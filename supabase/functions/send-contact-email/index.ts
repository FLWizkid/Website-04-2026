// Supabase Edge Function: send-contact-email
//
// Receives a contact form submission, emails it to contact@encountive.com
// via Resend, and (best-effort) stores a backup row in contact_submissions.
//
// Secrets required (set in the Supabase dashboard, never in code):
//   RESEND_API_KEY  - your Resend API key
//
// Deploy with verify_jwt = false so the public website form can call it.

import { createClient } from "npm:@supabase/supabase-js@2";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

// Addresses. FROM must be on your Resend-verified domain (encountive.com).
const FROM = "Encountive Website <noreply@encountive.com>";
const TO = "contact@encountive.com";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

type Payload = {
  name?: string;
  title?: string;
  organization?: string;
  email?: string;
  phone?: string;
  interest?: string;
  message?: string;
  website?: string; // honeypot
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return json({ error: "Method not allowed" }, 405);
  }

  if (!RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set");
    return json({ error: "Email service is not configured." }, 500);
  }

  let payload: Payload;
  try {
    payload = await req.json();
  } catch {
    return json({ error: "Invalid request body." }, 400);
  }

  // Honeypot: silently accept bot submissions without sending anything.
  if (payload.website && payload.website.trim() !== "") {
    return json({ ok: true });
  }

  const name = (payload.name ?? "").trim();
  const email = (payload.email ?? "").trim();
  const message = (payload.message ?? "").trim();

  // Mirror the database constraints so validation is consistent.
  if (
    name.length < 1 || name.length > 200 ||
    email.length < 5 || email.length > 254 ||
    !/^.+@.+\..+$/.test(email) ||
    message.length < 1 || message.length > 5000
  ) {
    return json({ error: "Please provide a valid name, email, and message." }, 400);
  }

  const title = (payload.title ?? "").trim();
  const organization = (payload.organization ?? "").trim();
  const phone = (payload.phone ?? "").trim();
  const interest = (payload.interest ?? "").trim();

  const rows: [string, string][] = [
    ["Name", name],
    ["Title", title],
    ["Organization", organization],
    ["Email", email],
    ["Phone", phone],
    ["Interested in", interest],
  ];

  const htmlRows = rows
    .filter(([, v]) => v !== "")
    .map(
      ([label, value]) =>
        `<tr><td style="padding:4px 12px 4px 0;font-weight:600;color:#0a0f1f;vertical-align:top">${label}</td><td style="padding:4px 0;color:#1f2937">${escapeHtml(value)}</td></tr>`,
    )
    .join("");

  const html = `
    <div style="font-family:Inter,Arial,sans-serif;max-width:640px;margin:0 auto">
      <h2 style="color:#0a0f1f">New contact form submission</h2>
      <table style="border-collapse:collapse;margin-bottom:16px">${htmlRows}</table>
      <h3 style="color:#0a0f1f;margin-bottom:4px">Message</h3>
      <p style="white-space:pre-wrap;color:#1f2937;line-height:1.6">${escapeHtml(message)}</p>
    </div>`;

  const text = [
    "New contact form submission",
    "",
    ...rows.filter(([, v]) => v !== "").map(([label, value]) => `${label}: ${value}`),
    "",
    "Message:",
    message,
  ].join("\n");

  // Send the notification email via Resend.
  const resendRes = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM,
      to: [TO],
      reply_to: email,
      subject: `New contact form submission from ${name}`,
      html,
      text,
    }),
  });

  if (!resendRes.ok) {
    const detail = await resendRes.text();
    console.error("Resend error:", resendRes.status, detail);
    return json({ error: "We couldn't send your message. Please try again." }, 502);
  }

  // Best-effort backup: store the submission. Never block on this.
  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    if (supabaseUrl && serviceKey) {
      const supabase = createClient(supabaseUrl, serviceKey);
      await supabase.from("contact_submissions").insert({
        name,
        title: title || null,
        organization: organization || null,
        email,
        phone: phone || null,
        interest: interest || null,
        message,
      });
    }
  } catch (err) {
    console.error("Backup insert failed (non-fatal):", err);
  }

  return json({ ok: true });
});

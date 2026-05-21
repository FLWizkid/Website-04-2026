import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const FROM_ADDRESS = 'Encountive Contact <noreply@encountive.com>';
const TO_ADDRESS = 'contact@encountive.com';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const { name, title, organization, email, phone, interest, message, website } = req.body ?? {};
  if (website) return res.status(200).json({ ok: true });
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Invalid email' });
  }
  if (message.length > 5000 || name.length > 200) {
    return res.status(400).json({ error: 'Field too long' });
  }
  try {
    const { error } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: TO_ADDRESS,
      replyTo: email,
      subject: '[Encountive] ' + (interest || 'Inquiry') + ' from ' + (organization || name),
      text: [
        'Name: ' + name,
        'Title: ' + (title || '-'),
        'Organization: ' + (organization || '-'),
        'Email: ' + email,
        'Phone: ' + (phone || '-'),
        'Interested in: ' + (interest || '-'),
        '',
        'Message:',
        message,
      ].join('\n'),
    });
    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ error: 'Failed to send' });
    }
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Send error:', err);
    return res.status(500).json({ error: 'Internal error' });
  }
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        brand: {
          blue: "#007BFF",
          orange: "#FF6B00",
          cyan: "#22D3EE",
          amber: "#F59E0B",
          pink: "#F43F5E",
          bg: "#0A0F1F",
          surface: "#131A2E",
          "surface-2": "#1A2238",
          "surface-3": "#222C48",
          border: "rgba(148,163,184,0.14)",
          ink: "#E2E8F0",
          mist: "#131A2E",
          muted: "#94A3B8",
          dim: "#64748B",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        display: ["Poppins", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(90deg, #007BFF 0%, #FF6B00 100%)",
        "brand-gradient-soft":
          "linear-gradient(135deg, rgba(34,211,238,0.14) 0%, rgba(245,158,11,0.14) 100%)",
        "cyan-glow":
          "radial-gradient(120% 80% at 50% 0%, rgba(34,211,238,0.22), transparent 60%)",
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(0, 0, 0, 0.6)",
        glow: "0 0 0 1px rgba(34,211,238,0.35), 0 10px 40px -10px rgba(34,211,238,0.25)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out both",
      },
    },
  },
  plugins: [],
};

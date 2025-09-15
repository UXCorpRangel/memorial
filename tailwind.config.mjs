/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        bebas: ['"Bebas Neue"', "sans-serif"],
        lato: ['"Lato"', "sans-serif"],
        jetbrains_mono: ['"JetBrains Mono"', "sans-serif"],
      },
      colors: {
        background: {
          default: "#07091E",
          "primary-gradient": "radial-gradient(#491012, #07091E)",
        },
        hover: {
          primary: "#1ee0e1",
        },
        primary: {
          50: "#fef7ee",
          100: "#fdedd3",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
          900: "#9a3412",
        },
        secondary: {
          50: "#f8fafc",
          100: "#f1f5f9",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          900: "#0f172a",
        },
        neutral: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-out-down": {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(-20px)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.4s ease-out",
        "fade-out-down": "fade-out-down 0.3s ease-in",
      },
      maskImage: {
        "gradient-lr":
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".mask-gradient-lr": {
          "-webkit-mask-image":
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          "mask-image":
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        },
      });
    },
  ],
};

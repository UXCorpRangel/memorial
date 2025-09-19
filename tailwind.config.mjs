/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        bebas: ['"Bebas Neue"', "sans-serif"],
        lato: ['"Lato"', "sans-serif"],
        jetbrains_mono: ['"JetBrains Mono"', "sans-serif"],
        noto_color_emoji: ['"Noto Color Emoji"', "sans-serif"],
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
          DEFAULT: "#f3384a",
          hover: "#972123",
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
          "0%": { opacity: "0", transform: "translateY(100px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-out-down": {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(-100px)" },
        },
        neon: {
          "0%": {
            filter:
              "drop-shadow(0 0 5px #f5f5f5) drop-shadow(0 0 10px #f5f5f5) drop-shadow(0 0 20px #f5f5f5)",
            opacity: "1",
          },
          "20%": {
            opacity: "0.5",
            filter: "none",
          },
          "25%": {
            opacity: "1",
          },
          "30%": {
            opacity: "0.3",
          },
          "32%": {
            opacity: "1",
          },
          "40%": {
            opacity: "0.2",
            filter: "none",
          },
          "45%": {
            opacity: "1",
            filter:
              "drop-shadow(0 0 5px #f5f5f5) drop-shadow(0 0 10px #f5f5f5) drop-shadow(0 0 20px #f5f5f5)",
          },
          "70%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0.9",
          },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 1s ease-out",
        "fade-out-down": "fade-out-down 1s ease-in",
        neon: "neon 4s linear infinite",
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

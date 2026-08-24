import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Mid-tone brand blue — threaded through links, icons, and small
        // accents. Dark surfaces use Tailwind's built-in slate/sky instead
        // for a richer, more neutral navy (see globals.css).
        ocean: {
          50: "#EFF6F9",
          100: "#DCEAF1",
          200: "#B9D6E3",
          300: "#8FBBCF",
          400: "#5C97B3",
          500: "#357695",
          600: "#245B78",
          700: "#1B4761",
          800: "#143648",
          900: "#0D2530",
          950: "#081A22",
        },
      },
      fontFamily: {
        sans: ["var(--font-noto-sans-sc)", "system-ui", "sans-serif"],
        display: ["var(--font-poppins)", "var(--font-noto-sans-sc)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        "8xl": "90rem",
      },
    },
  },
  plugins: [],
};

export default config;

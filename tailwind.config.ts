import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#050505",
        coal: "#0d0d0d",
        graphite: "#181818",
        smoke: "#8b8780",
        bone: "#eee8dd",
        porcelain: "#cfc6b6"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Arial", "sans-serif"],
        serif: ["var(--font-cormorant)", "Georgia", "serif"]
      },
      letterSpacing: {
        editorial: "0.18em"
      }
    }
  },
  plugins: []
};

export default config;

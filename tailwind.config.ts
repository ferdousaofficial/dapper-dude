import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        title: "#1e1e1e",
        text: "#606d7e",
        black: "#010101",
      },
      fontFamily: {
        playfairDisplay: "var(--font-playfairDisplay)",
      },
    },
  },
  plugins: [],
};
export default config;

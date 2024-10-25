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
        background: "var(--background)",
        foreground: "var(--foreground)",
        navigation: "#18222f",
        review: "#12322f",
        defaultText: "#f1f3f5",
        reviewHover: "#13233f",
        profile: "#0000ff",
      },
    },
  },
  plugins: [],
};
export default config;

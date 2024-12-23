import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        navigationBtn: "#d6d0b4",
        review: "#12322f",
        defaultText: "#f1f3f5",
        reviewHover: "#827c5e",
        textHover: "#e8e6e3",
        lightAqua: "##bfdeca",
        lightGold: "##dec990",
        lightWhite: "#f2eee1",
        papyrus: "##f5f2eb",
      },
    },
  },
};
export default config;

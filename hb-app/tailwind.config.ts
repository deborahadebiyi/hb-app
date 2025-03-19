import type { Config } from "tailwindcss";

export default {
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
        lightWhite: "#f2eee1",
        goldy: "#c9c4b7",
        darkgoldy: "#87837a",
      },
    },
  },
  plugins: [],
} satisfies Config;

// const config: Config = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         background: "hsl(var(--background))",
//         foreground: "hsl(var(--foreground))",
//         navigationBtn: "#d6d0b4",
//         review: "#12322f",
//          goldy: "#f1f3f5",
//         reviewHover: "#827c5e",
//         textHover: "#e8e6e3",
//         lightAqua: "#bfdeca",
//         lightGold: "#dec990",
//         lightWhite: "#f2eee1",
//          goldy: "#f5f2eb",
//       },
//     },
//   },
//   plugins: [],
// };
// export default config;

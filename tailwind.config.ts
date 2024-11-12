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
        background: "#2B2B2B",
        buttonPrimary: "#BFAFF2",
        buttonSecundary: "#F8D57E",
      },
    },
  },
  plugins: [],
} satisfies Config;

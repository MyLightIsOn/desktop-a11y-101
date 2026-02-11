import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        spooky: {
          purple: '#8b5cf6',
          green: '#10b981',
        },
      },
      fontFamily: {
        geist: ['var(--font-geist-sans)'],
        henny: ['var(--font-henny-penny)'],
      },
    },
  },
  plugins: [],
} satisfies Config;

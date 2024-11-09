import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        mainColorSecondary: '#0E0637',
        mainColorPrimary: '#5235E8',
        mainColorNeutral: '#717184',
      },

      backgroundColor: {
        mainColorSecondary: '#0E0637',
        mainColorPrimary: '#5235E8',
        mainColorNeutral: '#717184',
        mainColorGreen: '#DAF727',
      },

      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
      },
    },
  },
  plugins: [],
};
export default config;

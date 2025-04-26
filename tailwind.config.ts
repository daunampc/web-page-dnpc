import { heroui } from '@heroui/theme';
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/components/(avatar|button|card|divider|image|input|ripple|spinner|form).js"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'dark-body': '#0A0A0A',
        'dark-header': '#121212'
      },
      fontFamily: {
        'potta-none': ['var(--font-potta-one)']
      },
    },
  },
  plugins: [heroui()],
};
export default config;

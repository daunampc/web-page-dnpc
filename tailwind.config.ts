import { heroui } from '@heroui/theme';
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // key: value
        16: 'repeat(16, minmax(0, 1fr))',
      },
      keyframes: {
        enter: {
          '0%': { opacity: '0', transform: 'translateY(-25%)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        leave: {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(-25%)' },
        },
      },
      animation: {
        'toast-in': 'enter 300ms ease-out',
        'toast-out': 'leave 200ms ease-in forwards',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'dark-body': '#0A0A0A',
        'dark-header': '#121212',
        'dark-gray-1': '#212121',
        'dark-pink-primary': '#5E129B',
        'success': '#04AA2A',
        'danger': '#F04438',
        'danger-2': '#DF1D48'
      },
      fontFamily: {
        'potta-none': ['var(--font-potta-one)'],
        'roboto': ['var(--font-roboto)'],
        'noto-color-emoji': ['var(--font-noto-color-emoji)']
      },
      container: {
        center: true,              // canh giữa container
        padding: {
          DEFAULT: '1rem',         // padding mặc định (16px)
          sm: '2rem',              // ≥640px: 32px
          lg: '4rem',              // ≥1024px: 64px
          xl: '5rem',              // ≥1280px: 80px
          '2xl': '6rem',           // ≥1536px: 96px
        },
        screens: {
          sm: '840px',
          md: '968px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1516px',
        },
      },
    },
  },
  plugins: [heroui()],
};
export default config;

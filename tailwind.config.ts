import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '360px',
        sm: '640px',
        md: '768px',
        lg: '992px',
        xl: '1280px',
      },
      colors: {
        transparent: 'transparent',
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: 'var(--primary)',
          light: 'var(--primary-light)',
          lighter: 'var(--primary-lighter)',
        },
        link: {
          DEFAULT: 'var(--link)',
          hover: 'var(--link-hover)',
        },
        input: {
          DEFAULT: 'var(--input)',
          hover: 'var(--input-hover)',
          label: 'var(--input-label)',
          placeholder: 'var(--input-placeholder)',
          error: 'var(--input-error)',
          success: 'var(--input-success)',
          warning: 'var(--input-warning)',
          hint: 'var(--input-hint)',
          disabled: 'var(--input-disabled)',
        },
        select: {
          DEFAULT: 'var(--select-arrow)',
          hover: 'var(--select-arrow-hover)',
        },
        button: {
          primary: {
            DEFAULT: 'var(--button-primary)',
            hover: 'var(--button-primary-hover)',
            focus: 'var(--button-primary-focus)',
            color: 'var(--button-primary-color)',
            disabled: 'var(--button-primary-disabled)',
          },
        },
        black: {
          DEFAULT: 'var(--black)',
          light: 'var(--black-light)',
          dark: 'var(--black-dark)',
        },
        grey: {
          DEFAULT: 'var(--gray)',
          lightest: 'var(--gray-lightest)',
          light: 'var(--gray-light)',
          dark: 'var(--gray-dark)',
        },
        yellow: {
          DEFAULT: 'var(--yellow)',
        },
        orange: {
          DEFAULT: 'var(--orange)',
        },
        purple: {
          DEFAULT: 'var(--purple)',
        },
      },
      fontFamily: {
        sans: ['Geometria', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;

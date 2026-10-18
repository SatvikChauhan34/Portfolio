/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: 'rgb(var(--bg-primary-rgb) / <alpha-value>)',
          secondary: 'rgb(var(--bg-secondary-rgb) / <alpha-value>)',
          tertiary: 'rgb(var(--bg-tertiary-rgb) / <alpha-value>)',
        },
        text: {
          primary: 'rgb(var(--text-primary-rgb) / <alpha-value>)',
          secondary: 'rgb(var(--text-secondary-rgb) / <alpha-value>)',
          tertiary: 'rgb(var(--text-tertiary-rgb) / <alpha-value>)',
        },
        accent: {
          indigo: 'rgb(var(--accent-indigo-rgb) / <alpha-value>)',
          mint: 'rgb(var(--accent-mint-rgb) / <alpha-value>)',
          coral: '#FF6B6B',
        },
        border: {
          subtle: 'rgb(var(--border-subtle-rgb) / <alpha-value>)',
          hover: 'rgb(var(--border-hover-rgb) / <alpha-value>)',
        },
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      maxWidth: {
        content: '1200px',
      },
      boxShadow: {
        'glow-indigo': 'var(--glow-indigo-shadow)',
        'glow-mint': 'var(--glow-mint-shadow)',
      },
    },
  },
  plugins: [],
};

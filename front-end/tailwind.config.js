/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
          purple: '#635fc7',
          'extra-light-purple': '#f0effa',
          'light-purple': '#a8a4ff',
          'medium-purple': '#625fc74b',
          'dark-purple-level-1': '#625fc721',
          'dark-purple-level-2': '#625fc70a',
          red: '#ea5555',
          'light-red': '#ff9898',
        },
        neutral: {
          gray: '#e9effa8e',
          'dark-gray': '#2b2c37',
          'medium-gray': '#828fa3',
          'light-gray': '#f4f7fd',
          'bluish-black': '#000112',
          'translucent-black': '#00000042',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      boxShadow: {
        'elevation-1': '0px 10px 20px rgba(54, 78, 126, 0.25)',
        'elevation-2': '0px 4px 6px rgba(54, 78, 126, 0.101545)',
      },
      fontFamily: {
        poppins: ['Poppins'],
      },
      screens: {
        sm: { max: '800px' },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

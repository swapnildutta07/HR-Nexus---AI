/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        background: '#F8FAFC',
        card: '#FFFFFF',
        primary: {
          DEFAULT: '#2563eb',
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
        teal: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          500: '#14b8a6',
          600: '#0d9488',
        },
        secondary: '#14B8A6',
        success: '#22C55E',
        warning: '#F59E0B',
        danger: '#EF4444',
        border: '#E5E7EB',
        text: '#0F172A',
        subtext: '#64748B',
      },
      borderRadius: {
        card: '20px',
      },
      boxShadow: {
        soft: '0 1px 3px rgba(15,23,42,0.04), 0 4px 16px rgba(15,23,42,0.04)',
        lift: '0 8px 30px rgba(15,23,42,0.10)',
      },
    },
  },
  plugins: [],
}
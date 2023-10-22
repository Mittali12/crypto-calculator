/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      textColor: {
        'black': 'rgba(15, 22, 41, 1)',
        'gray': '#3E424A',
        'green': '#0FBA83',
        'purple': '#0141CF'
      },
      backgroundColor: {
        'lightBlue': 'rgba(239, 242, 245, 1)',
        'lightGreen': '#EBF9F4',
        'lightPurple': '#EBF2FF',
        'blue': 'rgba(82, 82, 254, 0.06)'
      },
      borderColor: {
        'gray': 'rgba(62, 66, 74, 1)',
        'blue': '#0052FE',
      },
      outlineColor: {
        'gray': 'rgba(62, 66, 74, 1)',
        'blue': '#0052FE',
        'purple': '#0141CF'
      }
    },
  },
  plugins: [],
}

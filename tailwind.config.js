/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backdropBlur: {
      xs: '2px',
    },
    opacity: {
      '15': '.15',
    },
    extend: {
      animation: {
        'newpulse': 'newpulse 1s ease-in infinite',
      },
      keyframes: {
        newpulse: {
          '0%, 100%': {
            opacity: 0
          },
          '50%':{
            opacity: 0.1
          }
        },
      },
    },
  },
  plugins: [],
}
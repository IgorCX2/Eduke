/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "/pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backdropBlur: {
      xs: '2px',
    },
    opacity: {
      '0': '0',
      '15': '.15',
      '3': '.3',
      '50': '.75',
    },
    extend: {
      dropShadow: {
        'toxl': '0px 0px 20px rgb(0 0 0 / 0.1)',
        'n2xl': '0px 0px 20px rgb(0 0 0 / 0.15)'
      },
      blur: {
        xx: '100px',
      },
      colors: {
        'bluelight': '#24aac2'
      },
      animation: {
        'newpulse': 'newpulse 1s ease-in infinite',
      },
      keyframes: {
        shimmer: {
          '100%': {
            transform: 'translateX(100%)',
          },
        },
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
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '12px',
      },
      colors: {
        'primary': '#E8C300',
        'secondary': '#907910',
        'highlight': '#ED8408',
        'dark': '#181818',
        fog: {
          '500': '#666666',
          '400': '#9F9F9F',
          '300': '#D4D4D4',
          '200': '#E9E9E9',
          '100': '#F7F7F7',
        },
      },
      fontFamily: {
        'inter': 'Inter',
      },
      backgroundImage: {
        'logo': 'url("/src/assets/images/layout/Logo.svg")'
      },
      fontSize: {
        'h1': ['48px', '1.2'],  // 57.6pc
        'h2': ['32px', '1.2'], // 38.4px
        'h3': ['28px', '1.2'], //33.6px
        'h4': ['24px', '1.2'], //28.8px
        'h5': ['20px', '1.2'], //24px
        'h6': ['16px', '1.2'],  // 19px
      },
      borderRadius: {
        'lg2': '10px',
        '2xxl': '20px',
      },
      spacing: {
        '13': '54px',
      },
      boxShadow: {
        'lg2': '0 8px 16px 0 rgba(0, 0, 0, 0.16)',
      },
    },
  },
  plugins: [],
};

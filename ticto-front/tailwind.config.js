/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },

      fontSize: {
        '22': '22px',
        '28': '28px',
        '18': '18px',
        '24': '24px',
        '42': '42px',
      },
      lineHeight: {
        '29': '29px',
        '37': '37px',
        '24': '24px',
        '32': '32px',
        '63': '63px',
      },
      letterSpacing: {
        '0': '0',
        '0-73': '0.73px',
      },
      colors: {
        'ffffff': '#ffffff',
        '4e5555': '#4e5555',
        'b7bfc0': '#b7bfc0',
        '4c5a5a': '#4c5a5a',
        '06d7a5': '#06d7a5',
        'db3766': '#db3766',
        '484f55': '#484f55',
      },
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
    },
  },
  plugins: [],
}

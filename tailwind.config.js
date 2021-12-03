const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',
  purge: ['./src/**/*.jsx', './src/**/*.tsx', './src/**/*.js', './src/**/*.ts'],
  theme: {
    extend: {
      height: {
        550: '550px',
      },
      colors: {
        mainGreen: {
          light: '#DFF5F4',
          DEFAULT: '#3E8896',
          old: '#00A9AB',
        },
        mainYellow: {
          DEFAULT: '#FFCC44',
        },
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      minWidth: {
        10: '2.5rem',
        15: '3.75rem',
        20: '5rem',
        25: '6.25rem',
        30: '7.5rem',
        40: '10rem',
        60: '15rem',
        80: '20rem',
      },
      maxWidth: {
        10: '2.5rem',
        15: '3.75rem',
        20: '5rem',
        25: '6.25rem',
        30: '7.5rem',
        40: '10rem',
        60: '15rem',
        80: '20rem',
      },
    },

    typography: (theme) => ({
      default: {
        css: {
          color: theme('colors.gray.900'),

          a: {
            color: theme('colors.blue.500'),
            '&:hover': {
              color: theme('colors.blue.700'),
            },
          },
        },
      },

      dark: {
        css: {
          color: theme('colors.gray.100'),

          a: {
            color: theme('colors.blue.100'),
            '&:hover': {
              color: theme('colors.blue.100'),
            },
          },
        },
      },
    }),
  },
  variants: {
    extend: {
      // ...
      rotate: ['active', 'group-hover', 'hover'],
      width: ['active', 'group-hover', 'hover'],
      maxWidth: ['active', 'group-hover', 'hover'],
    },
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};

const colors = require('tailwindcss/colors');

module.exports = {
   purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
   darkMode: false, // or 'media' or 'class'
   theme: {
      // extend: {
      // },
      colors: {
         transparent: 'transparent',
         current: 'currentColor',
         black: colors.black,
         white: colors.white,
         rose: colors.rose,
         pink: colors.pink,
         fucshia: colors.fuchsia,
         purple: colors.purple,
         violet: colors.violet,
         indigo: colors.indigo,
         blue: colors.blue,
         lightBlue: colors.lightBlue,
         cyan: colors.cyan,
         teal: colors.teal,
         emerald: colors.emerald,
         green: colors.green,
         lime: colors.lime,
         yellow: colors.yellow,
         amber: colors.amber,
         orange: colors.orange,
         red: colors.rose,
         trueGray: colors.trueGray,
         gray: colors.trueGray,
         coolGray: colors.coolGray,
         blueGray: colors.blueGray
      },
      screens: {
         sm: '576',
         md: '768',
         lg: '992',
         xl: '1200'
      }
   },
   variants: {
      extend: {}
   },
   plugins: []
};

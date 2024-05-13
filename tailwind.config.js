import colors from 'tailwindcss/colors'

export default {
  theme: {
    extend: {
      fontFamily: {
        dela: ['Dela Gothic One', 'sans-serif'], 
        jojo: ['Josefin Sans', 'sans-serif'], 
      },
      colors: {
        red: "#cf152d",
        darkred: "#df5642"
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '15px',
          sm: '15px',
          lg: '15px',
          xl: '10px'
        },
        screens: {
          sm: '600px',
          md: '767px',
          lg: '992px',
          xl: '1200px',
        },
      }
    }
  }
}
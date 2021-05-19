export default {
  colors: {
    primary: '#FFBB11',
    secondary: '#764701',
    white: '#FFFFFF',
    black: '#333333',
    gray: '#666666',
    LightGray: '#EEEEEE'
  },

  font: {
    light: 300,
    normal: 400,
    bold: 600,

    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem',
      xxxlarge: '3rem'
    }
  },

  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },

  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },

  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  },

  border: {
    radius: '0.4rem',
    circle: '50%'
  }
} as const

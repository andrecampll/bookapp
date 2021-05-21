import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    bridal: {
      'heath': '#FFFBF7'
    },
    blue: {
      '400': '#4ABDF1',
      '800': '#00173D'
    },
    white: {
      '100': '#FDFCFC',
    },
    green: {
      '300': '#EEF5DB',
    },
    gray: {
      '300': '#CFCBD2',
      '500': '#acacac',
      '700': '#74776D',
      '900': '#3F4043',
    },
    pink: {
      '500': '#FA6A78',
    },
    sand: {
      '500': '#FFF6E5',
    }
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
  },
  styles: {
    global: {
      body: {
        bg: 'bridal.heath',
        color: 'gray.900'
      }
    }
  }
});

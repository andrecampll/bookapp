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
    gray: {
      '900': '#3F4043',
    },
    pink: {
      '500': '#FA6A78'
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

import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        height: '100vh',
        bgColor: 'purple.50',
      },
    },
  },
  components: {
    Heading: {
      baseStyle: {
        margin: '.4em auto',
        color: 'purple.200',
        textAlign: 'center',
      },
    },
    Box: {
      variants: {
        card: {
          bgColor: 'purple.500',
        },
      },
    },
  },
});

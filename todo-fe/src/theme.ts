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
});

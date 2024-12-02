import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: 'Pretendard',
    body: 'Pretendard',
  },
  styles: {
    global: {
      body: {
        fontFamily: 'Pretendard',
      },
    },
  },
});

export default theme;
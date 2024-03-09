import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const styles = {
  global: (props: any) => ({
    body: {
      bg: mode('gray.100', '#000')(props),
      color: mode('gray.800', 'whiteAlpha.900')(props),
    },
  }),
};

export const theme = extendTheme({ config, styles });

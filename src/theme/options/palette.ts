import { common } from '@mui/material/colors';

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    support: {
      main: string;
      light: string;
      dark: string;
      darker: string;
    };
  }
}

const palette = {
  primary: {
    main: '#0D6EFD',
    light: '#AFD0FF',
    dark: '#00317b',
    contrastText: common.white,
  },
  background: {
    default: '#F7FAFC',
    paper: common.white,
  },
  text: {
    primary: '#505050',
    secondary: '#1C1C1C',
    ligthtgrey: '#8B96A5',
    disabled: '#c8cdcd',
  },
  gray: {
    '100': '#F7FAFC',
    '200': '#EFF2F4',
    '300': '#DEE2E7',
    '400': '#BDC4CD',
    '500': '#8B96A5',
    '600': '#505050',
  },
};

export default palette;

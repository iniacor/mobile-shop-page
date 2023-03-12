import { createTheme } from '@mui/material/styles';

import components from '@theme/options/components';
import palette from '@theme/options/palette';
import typography from '@theme/options/typography';

const theme = createTheme({
  palette,
  components,
  typography,
});

export default theme;

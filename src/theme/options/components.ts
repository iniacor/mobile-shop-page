const components = {
  // MuiInputBase: {
  //   styleOverrides: {
  //     root: {
  //       '.MuiInputBase-input': {
  //         padding: 8,
  //       },
  //     },
  //   },
  // },
  // MuiContainer: {
  //   styleOverrides: {
  //     root: {
  //       '.MuiContainer-maxWidthLg': {
  //         maxWidth: '1180px',
  //       },
  //     },
  //   },
  // },

  // MuiSvgIcon: {
  //   styleOverrides: {
  //     root: {
  //       '&.MuiSvgIcon-fontSizeLarge': {
  //         fontSize: '1.75rem',
  //       },
  //     },
  //   },
  // },
  MuiPaper: {
    styleOverrides: {
      root: {
        padding: 8,
      },
    },
    defaultProps: { elevation: 0 },
  },
  MuiGrid: {
    styleOverrides: {
      root: {
        '&.MuiGrid-container': {
          margin: 0,
        },
      },
    },
  },
};

export default components;

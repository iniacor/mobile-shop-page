const components = {
  MuiPaper: {
    styleOverrides: {
      root: {
        padding: 8,
        borderRadius: '6px',
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

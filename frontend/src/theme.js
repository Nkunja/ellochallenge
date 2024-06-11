import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Mulish, sans-serif',
  },
  palette: {
    primary: {
      main: '#5ACCC', 
    },
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 0, 
      },
      containedPrimary: {
        backgroundColor: '#28B8B8',
        '&:hover': {
          backgroundColor: '#479cbb',
        },
      },
    },
  },
});

export default theme;

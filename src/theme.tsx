import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: 'hsl(348,72%,55%)',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    
  },
  shape: {
    borderRadius: 0,
  },
  components:{
    MuiOutlinedInput: {
      styleOverrides: {
          input: {
            padding: '0.4rem 0.8rem !important',
            fontSize: "1rem",
          },
      },
    },
    MuiInputLabel: {
      styleOverrides:{
        "root":{
          "&.MuiInputLabel-outlined": {
            transform: "translate(1rem, 0.4rem)",
          },
          '&.MuiInputLabel-outlined[data-shrink="true"]': {
            transform: "translate(0.9rem, -0.5rem) scale(0.75)",
          }
        },
      }
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          position: "absolute",
          bottom:"-1.5rem"
        }
      }
    },
  },
});

export default theme;
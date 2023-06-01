import { createTheme } from "@mui/material";

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 769,
      md: 1025,
      lg: 1401,
      xl: 1921,
    },
  },
  components: {
    MuiStack: {
      defaultProps: {
        useFlexGap: true,
      },
    },
  },
  typography: {
    fontFamily: `"Poppins",  sans-serif`,
  },
  palette: {
    primary: {
      main: "#7E3CC0",
    },
    secondary: {
      main: "#21242d",
    },
  },
});

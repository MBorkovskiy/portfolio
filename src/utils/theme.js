import { createTheme } from "@mui/material";

export const theme = createTheme({
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

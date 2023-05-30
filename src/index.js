import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { theme } from "./utils/theme";
import { StyledEngineProvider, ThemeProvider } from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <StyledEngineProvider injectFirst>
      <App />
    </StyledEngineProvider>
  </ThemeProvider>
);

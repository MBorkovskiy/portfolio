import { Box, Stack } from "@mui/material";
import "./App.css";
import { Header } from "./Components/Header/Header";

import { MainPage } from "./Page/MainPage";
import { Footer } from "./Components/Footer/Footer";

function App() {
  return (
    <Stack>
      <Header />
      <Box className="App">
        <MainPage />
      </Box>
      <Footer />
    </Stack>
  );
}

export default App;

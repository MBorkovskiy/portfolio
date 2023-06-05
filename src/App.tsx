import "./App.scss";
import { Box } from "@mui/material";
import { Header } from "./Components/Header/Header";
import { MainPage } from "./Page/MainPage";
import { Footer } from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Box className="App">
        <MainPage />
      </Box>
      <Footer />
    </>
  );
}

export default App;

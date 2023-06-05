import styles from "./MainPage.module.scss";
import { FirstScreen } from "../Components/FirstScreen/FirstScreen";
import { Stack } from "@mui/material";
import { About } from "../Components/About/About";
import { Projects } from "../Components/Projects/Projects";

export const MainPage = () => {
  return (
    <Stack className={styles.main_page}>
      <FirstScreen />
      <About />
      <Projects />
    </Stack>
  );
};

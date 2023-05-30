import styles from "./MainPage.module.scss";
import { FirstScreen } from "../Components/FirstScreen/FirstScreen";
import { Stack } from "@mui/material";

export const MainPage = () => {
  return (
    <Stack className={styles.main_page}>
      <FirstScreen />
    </Stack>
  );
};

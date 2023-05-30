import styles from "./Header.module.scss";
import { Stack, Typography } from "@mui/material";

export const Header = () => {
  return (
    <Stack className={styles.header}>
      <Stack
        className={styles.content}
        direction={"row"}
        spacing={4}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Typography
          textTransform={"uppercase"}
          fontWeight={"700"}
          className={styles.header_info}
        >
          About
        </Typography>
        <Typography
          textTransform={"uppercase"}
          fontWeight={"700"}
          className={styles.header_info}
        >
          Projects
        </Typography>
        <Typography
          textTransform={"uppercase"}
          fontWeight={"700"}
          className={styles.header_info}
        >
          Contacts
        </Typography>
      </Stack>
    </Stack>
  );
};

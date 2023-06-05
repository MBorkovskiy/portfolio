import styles from "./Header.module.scss";
import { Stack } from "@mui/material";
import { HashLink } from "react-router-hash-link";

export const Header = () => {
  return (
    <Stack className={styles.content}>
      <HashLink smooth to="/#about" className={styles.header_info}>
        About
      </HashLink>
      <HashLink smooth to="/#projects" className={styles.header_info}>
        Projects
      </HashLink>
      <HashLink smooth to="/#footer" className={styles.header_info}>
        Contacts
      </HashLink>
    </Stack>
  );
};

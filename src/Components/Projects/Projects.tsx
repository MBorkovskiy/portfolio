import styles from "./Projects.module.scss";
import { Box, Stack } from "@mui/material";
import { Project } from "../Project/Project";
import { projects } from "../../utils/constants";
import { H3Left } from "../H3Left/H3Left";
import { H2Left } from "../H2Left/H2Left";

export const Projects = () => {
  return (
    <Stack
      id="projects"
      spacing={{ xs: 2, sm: 4, md: 6 }}
      className={styles.projects}
    >
      <Box paddingX={{ xs: 2, sm: 0 }}>
        <H3Left>Portfolio</H3Left>
        <H2Left>Each project is a unique piece of development</H2Left>
      </Box>
      {projects.map((el) => (
        <Project el={el} />
      ))}
    </Stack>
  );
};

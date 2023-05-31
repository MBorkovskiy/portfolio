import { Box, Stack, Typography } from "@mui/material";
import { Project } from "../Project/Project";
import { projects } from "../../utils/constants";

export const Projects = () => {
  return (
    <Stack
      id="projects"
      direction={"column"}
      padding={"150px"}
      spacing={6}
      justifyContent={"center"}
      marginX={"auto"}
    >
      <Box>
        <Typography
          fontWeight={"900"}
          textTransform={"uppercase"}
          color={"primary"}
          gutterBottom
        >
          Portfolio
        </Typography>
        <Typography
          fontSize={"25px"}
          color={"secondary"}
          fontWeight={"600"}
          lineHeight={"120%"}
          gutterBottom
        >
          Each project is a unique piece of development
        </Typography>
      </Box>
      {projects.map((el) => (
        <Project el={el} />
      ))}
    </Stack>
  );
};

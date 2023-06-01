import { Box, Stack, Typography } from "@mui/material";
import { Project } from "../Project/Project";
import { projects } from "../../utils/constants";

export const Projects = () => {
  return (
    <Stack
      id="projects"
      direction={"column"}
      padding={{ xs: "15px", sm: "100px", md: "150px" }}
      spacing={{ xs: 2, sm: 4, md: 6 }}
      justifyContent={"center"}
      marginX={"auto"}
    >
      <Box>
        <Typography
          fontWeight={"900"}
          textTransform={"uppercase"}
          color={"primary"}
          textAlign={{ xs: "center", md: "left" }}
          gutterBottom
        >
          Portfolio
        </Typography>
        <Typography
          fontSize={"25px"}
          color={"secondary"}
          fontWeight={"600"}
          lineHeight={"120%"}
          textAlign={{ xs: "center", md: "left" }}
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

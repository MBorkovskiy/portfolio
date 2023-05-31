import styles from "./About.module.scss";
import about from "../../assets/about.jpg";
import { Box, Stack, Typography } from "@mui/material";

export const About = () => {
  return (
    <Stack
      id="about"
      direction={{ xs: "column", md: "row" }}
      padding={"150px"}
      spacing={10}
      justifyContent={"center"}
      className={styles.container}
      marginX={"auto"}
    >
      <Stack
        width={"500px"}
        justifyContent={"center"}
        className={styles.about}
        marginX={"auto"}
      >
        <img src={about} alt="Image" />
      </Stack>
      <Stack width={"500px"}>
        <Typography
          fontWeight={"900"}
          textTransform={"uppercase"}
          color={"primary"}
          textAlign={{ xs: "center", md: "left" }}
          gutterBottom
        >
          About me
        </Typography>
        <Typography
          fontSize={"25px"}
          color={"secondary"}
          fontWeight={"600"}
          lineHeight={"120%"}
          textAlign={{ xs: "center", md: "left" }}
          gutterBottom
        >
          A dedicated Front-end Developer based in Moscow, Russia
        </Typography>
        <Typography
          color={"secondary"}
          textAlign={{ xs: "center", md: "left" }}
        >
          As a Junior Front-End Developer, I possess an impressive arsenal of
          skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel in
          designing and maintaining responsive websites that offer a smooth user
          experience. My expertise lies in crafting dynamic, engaging interfaces
          through writing clean and optimized code and utilizing cutting-edge
          development tools and techniques. I am also a team player who thrives
          in collaborating with cross-functional teams to produce outstanding
          web applications.
        </Typography>
      </Stack>
    </Stack>
  );
};

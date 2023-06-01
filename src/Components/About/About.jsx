import styles from "./About.module.scss";
import about from "../../assets/about.jpg";
import { motion } from "framer-motion";
import { Stack, Typography } from "@mui/material";
import { H3Left } from "../H3Left/H3Left";
import { H2Left } from "../H2Left/H2Left";
import {
  aboutImageAnimation,
  aboutTextAnimation,
} from "../../utils/animations";

export const About = () => {
  return (
    <Stack
      className={styles.container}
      component={motion.div}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.5 }}
    >
      <Stack
        id="about"
        direction={{ xs: "column", md: "row" }}
        padding={{ xs: "50px 15px", sm: "100px", md: "150px" }}
        spacing={{ xs: 2, sm: 5, md: 10 }}
        width={{ xs: "360px", sm: "700px", md: "100%" }}
        marginX={"auto"}
        justifyContent={"center"}
      >
        <Stack
          className={styles.about}
          component={motion.div}
          variants={aboutImageAnimation}
          custom={1}
        >
          <img src={about} alt="Image" />
        </Stack>
        <Stack
          width={{ xs: "100%", md: "500px" }}
          marginX={{ xs: "auto", md: "0" }}
        >
          <H3Left>About me</H3Left>
          <H2Left>
            A dedicated Front-end Developer based in Moscow, Russia
          </H2Left>
          <Typography
            component={motion.p}
            variants={aboutTextAnimation}
            custom={4}
            color={"secondary"}
            textAlign={{ xs: "center", md: "left" }}
            fontSize={{ xs: "14px", sm: "16px" }}
          >
            As a Front-End Developer, I possess an impressive arsenal of skills
            in HTML, CSS, SCSS, JavaScript, React, Redux Toolkit, Tailwind, and
            MUI. I excel in designing and maintaining responsive websites that
            offer a smooth user experience. My expertise lies in crafting
            dynamic, engaging interfaces through writing clean and optimized
            code and utilizing cutting-edge development tools and techniques. I
            am also a team player who thrives in collaborating with
            cross-functional teams to produce outstanding web applications.
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

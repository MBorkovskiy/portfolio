import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import { aboutTextAnimation } from "../../utils/animations";

export const H2Left = ({ children }) => {
  return (
    <Typography
      component={motion.h2}
      variants={aboutTextAnimation}
      custom={3}
      fontSize={"25px"}
      color={"secondary"}
      fontWeight={"600"}
      lineHeight={"120%"}
      textAlign={{ xs: "center", md: "left" }}
      gutterBottom
    >
      {children}
    </Typography>
  );
};

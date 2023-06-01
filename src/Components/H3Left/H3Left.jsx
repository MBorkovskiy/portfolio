import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import { aboutTextAnimation } from "../../utils/animations";

export const H3Left = ({ children }) => {
  return (
    <Typography
      component={motion.h3}
      variants={aboutTextAnimation}
      custom={2}
      fontWeight={"900"}
      textTransform={"uppercase"}
      color={"primary"}
      textAlign={{ xs: "center", md: "left" }}
      gutterBottom
    >
      {children}
    </Typography>
  );
};

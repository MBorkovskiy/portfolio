import { Typography } from "@mui/material";

export const H2Left = ({ children }) => {
  return (
    <Typography
      component={"h2"}
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

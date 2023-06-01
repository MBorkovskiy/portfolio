import { Typography } from "@mui/material";

export const H3Center = ({ children }) => {
  return (
    <Typography
      component={"h3"}
      fontWeight={"700"}
      textTransform={"uppercase"}
      color={"primary"}
      textAlign={"center"}
      gutterBottom
    >
      {children}
    </Typography>
  );
};

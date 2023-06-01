import { Typography } from "@mui/material";

export const H3Center = ({ children }) => {
  return (
    <Typography
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

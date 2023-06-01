import { Typography } from "@mui/material";

export const H3Left = ({ children }) => {
  return (
    <Typography
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

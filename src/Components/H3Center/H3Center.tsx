import { Typography } from "@mui/material";
import { IChildren } from "../H3Left/H3Left";

export const H3Center = ({ children }: IChildren) => {
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

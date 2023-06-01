import { Stack, Typography } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export const StackElement = ({ children }) => {
  <>
    <CheckCircleOutlineIcon color="success" />
    <Typography
      width={"115px"}
      fontWeight={"600"}
      color={"secondary"}
      fontSize={"14px"}
      textTransform={"uppercase"}
    >
      {children}
    </Typography>
  </>;
};

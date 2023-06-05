import { IconButton, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { IFooterInfo } from "../../utils/constants";

export const FooterInfo = ({ title, desc, icon, link }: IFooterInfo) => {
  return (
    <Stack
      direction={"row"}
      spacing={1}
      width={{ xs: "283px", md: "max-content" }}
    >
      <Link to={link} target="blank">
        <IconButton color="primary">{icon}</IconButton>
      </Link>
      <Stack>
        <Typography
          textTransform={"uppercase"}
          fontWeight={"600"}
          fontSize={"18px"}
        >
          {title}
        </Typography>
        <Typography fontSize={"14px"}>{desc}</Typography>
      </Stack>
    </Stack>
  );
};

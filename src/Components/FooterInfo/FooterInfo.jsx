import { IconButton, Stack, Typography } from "@mui/material";

export const FooterInfo = ({ title, desc, icon }) => {
  return (
    <Stack direction={"row"} spacing={1}>
      <IconButton color="primary">{icon}</IconButton>
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

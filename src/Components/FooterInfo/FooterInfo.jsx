import { IconButton, Stack, Typography } from "@mui/material";

export const FooterInfo = ({ title, desc, icon }) => {
  return (
    <Stack direction={"row"} spacing={1}>
      <IconButton color="primary">{icon}</IconButton>
      <Stack>
        <Typography textTransform={"uppercase"} fontWeight={"700"}>
          {title}
        </Typography>
        <Typography>{desc}</Typography>
      </Stack>
    </Stack>
  );
};

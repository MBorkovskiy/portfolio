import styles from "./FirstScreen.module.scss";
import { Box, Divider, IconButton, Stack, Typography } from "@mui/material";
import { techIcons } from "../../utils/constants";

export const FirstScreen = () => {
  return (
    <Stack
      direction={"row"}
      padding={"100px"}
      spacing={4}
      justifyContent={"center"}
    >
      <Stack width={"500px"} justifyContent={"space-between"}>
        <Box>
          <Typography variant="h2" fontWeight={"900"} color={"primary"}>
            React Frontend Developer
          </Typography>
          <Typography fontSize={"18px"}>
            Hi, I'm Maxim Borkovskiy. A passionate Front-end React Developer
            based in Moscow, Russia.
          </Typography>
        </Box>
        <Box>
          <Typography
            fontWeight={"900"}
            textTransform={"uppercase"}
            textAlign={"center"}
            color={"primary"}
            gutterBottom
          >
            Tech Stack
          </Typography>
          <Divider />
          <Stack direction={"row"} justifyContent={"space-between"} mt={"6px"}>
            {techIcons.map((el) => (
              <IconButton className={styles.tech_img_btn}>
                <img src={el} alt="Tech Icon" className={styles.tech_img} />
              </IconButton>
            ))}
          </Stack>
        </Box>
      </Stack>
      <Box border={"1px solid black"} width={"300px"} height={"350px"}>
        <img src="" alt="Profile" />
      </Box>
    </Stack>
  );
};
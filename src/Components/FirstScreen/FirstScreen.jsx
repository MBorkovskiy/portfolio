import styles from "./FirstScreen.module.scss";
import { Box, Divider, IconButton, Stack, Typography } from "@mui/material";
import { techIcons } from "../../utils/constants";
import { Image } from "../Image/Image";

export const FirstScreen = () => {
  return (
    <Stack
      direction={{ sm: "column-reverse", md: "row" }}
      padding={"150px"}
      spacing={{ sm: 5, md: 10 }}
      marginX={"auto"}
    >
      <Stack width={"500px"}>
        <Stack>
          <Typography
            variant="h2"
            fontWeight={"900"}
            color={"primary"}
            lineHeight={"100%"}
            textAlign={{ sm: "center", md: "left" }}
            gutterBottom
          >
            React Frontend Developer
          </Typography>
          <Typography fontSize={"18px"} color={"secondary"}>
            Hi, I'm Maxim Borkovskiy. A passionate Front-end React Developer
            based in Moscow, Russia.
          </Typography>
        </Stack>
        <Box mt={"36px"}>
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
      <Stack className={styles.profile} marginX={"auto"}>
        <Image />
      </Stack>
    </Stack>
  );
};

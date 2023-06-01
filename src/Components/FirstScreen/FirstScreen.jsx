import styles from "./FirstScreen.module.scss";
import { Box, Divider, IconButton, Stack, Typography } from "@mui/material";
import { techIcons } from "../../utils/constants";
import { Image } from "../Image/Image";
import { H3Center } from "../H3Center/H3Center";

export const FirstScreen = () => {
  return (
    <Stack
      direction={{ xs: "column-reverse", md: "row" }}
      padding={{ xs: "15px", sm: "100px", md: "150px" }}
      spacing={{ xs: 2, sm: 5, md: 10 }}
      width={"100%"}
      marginX={"auto"}
      justifyContent={"center"}
    >
      <Stack
        width={{ xs: "100%", sm: "500px" }}
        marginX={{ xs: "auto", md: "0" }}
        justifyContent={"space-between"}
      >
        <Stack>
          <Typography color={"primary"} className={styles.head}>
            React Frontend Developer
          </Typography>
          <Typography className={styles.desc} color={"secondary"}>
            Hi, I'm Maxim Borkovskiy. A passionate Front-end React Developer
            based in Moscow, Russia.
          </Typography>
        </Stack>
        <Box mt={{ xs: "36px", md: "0px" }}>
          <H3Center>Tech Stack</H3Center>
          <Divider />
          <Stack
            direction={"row"}
            justifyContent={{ xs: "center", sm: "space-between" }}
            mt={"6px"}
            flexWrap={{ xs: "wrap", sm: "nowrap" }}
          >
            {techIcons.map((el) => (
              <IconButton className={styles.tech_img_btn}>
                <img src={el} alt="Tech Icon" className={styles.tech_img} />
              </IconButton>
            ))}
          </Stack>
        </Box>
      </Stack>
      <Stack className={styles.profile}>
        <Image />
      </Stack>
    </Stack>
  );
};

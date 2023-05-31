import styles from "./Footer.module.scss";
import { Stack, Typography } from "@mui/material";
import { FooterInfo } from "../FooterInfo/FooterInfo";
import { footerInfo } from "../../utils/constants";

export const Footer = () => {
  return (
    <Stack id="footer" className={styles.footer}>
      <Stack className={styles.content} alignItems={"center"}>
        <Typography
          variant="h5"
          textTransform={"uppercase"}
          fontWeight={"700"}
          mb={"30px"}
          color={"primary"}
        >
          Don't be shy! Hit me up!
        </Typography>
        <Stack direction={"row"} spacing={4} flexWrap={"wrap"}>
          {footerInfo.map((el) => (
            <FooterInfo
              title={el.title}
              desc={el.desc}
              icon={el.icon}
              link={el.link}
            />
          ))}
        </Stack>
        <Typography mt={"50px"} fontSize={"14px"} className={styles.opacity}>
          Copyright © 2023. All rights are reserved
        </Typography>
      </Stack>
    </Stack>
  );
};

// https://t.me/maxim_alexeyevich

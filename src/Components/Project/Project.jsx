import styles from "./Projects.module.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import { Button, Stack, Typography } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Link } from "react-router-dom";
import { Preview } from "../Preview/Preview";
import { H3Center } from "../H3Center/H3Center";

export const Project = ({ el }) => {
  return (
    <Stack
      className={styles.project}
      spacing={{ xs: "15px", sm: "50px" }}
      width={{ xs: "80%", sm: "80%", md: "880px" }}
      marginX={"auto"}
    >
      <Stack className={styles.project_img}>
        <Preview el={el} />
      </Stack>
      <Stack
        width={"300px"}
        justifyContent={"space-between"}
        marginX={{ xs: "auto", md: "0" }}
      >
        <Stack>
          <H3Center>{el.title}</H3Center>
          <Typography textAlign={"center"} fontSize={14}>
            {el.description}
          </Typography>
        </Stack>
        <Stack spacing={2} mt={{ xs: "15px", md: "0" }}>
          <Stack
            direction={"row"}
            flexWrap={"wrap"}
            justifyContent={"space-between"}
          >
            {el.stack.map((el) => (
              <Stack direction={"row"} alignItems={"center"} spacing={"5px"}>
                <CheckCircleOutlineIcon color="success" />
                <Typography
                  width={"115px"}
                  fontWeight={"600"}
                  color={"secondary"}
                  fontSize={"14px"}
                  textTransform={"uppercase"}
                >
                  {el}
                </Typography>
              </Stack>
            ))}
          </Stack>
          <Stack direction={"row"} spacing={2} width={"100%"}>
            <Link className={styles.link} target="blank" to={el.links.code}>
              <Button fullWidth variant="outlined" startIcon={<GitHubIcon />}>
                Code
              </Button>
            </Link>
            <Link className={styles.link} target="blank" to={el.links.demo}>
              <Button fullWidth variant="outlined" startIcon={<LaunchIcon />}>
                Demo
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

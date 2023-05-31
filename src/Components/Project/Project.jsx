import styles from "./Projects.module.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import { Button, Stack, Typography } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Link } from "react-router-dom";
import { Preview } from "../Preview/Preview";

export const Project = ({ el }) => {
  return (
    <Stack
      className={styles.project}
      spacing={"50px"}
      width={{ sm: "530px", md: "880px" }}
      marginX={"auto"}
    >
      <Stack className={styles.project_img}>
        <Preview el={el} />
      </Stack>
      <Stack width={"300px"} marginX={"auto"} justifyContent={"space-between"}>
        <Stack>
          <Typography
            fontWeight={"700"}
            textTransform={"uppercase"}
            color={"primary"}
            textAlign={"center"}
            gutterBottom
          >
            {el.title}
          </Typography>
          <Typography textAlign={"center"} fontSize={14}>
            {el.description}
          </Typography>
        </Stack>
        <Stack spacing={2}>
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

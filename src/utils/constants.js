import LocationOnIcon from "@mui/icons-material/LocationOn";
import TelegramIcon from "@mui/icons-material/Telegram";
import MailIcon from "@mui/icons-material/Mail";
import GitHubIcon from "@mui/icons-material/GitHub";

export const techIcons = [
  "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg",
  "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg",
  "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg",
  "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg",
  "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/sass-colored.svg",
  "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg",
  "https://mui.com/static/logo.png",
];

export const footerInfo = [
  {
    title: "Location",
    desc: "Russia,Moscow",
    icon: <LocationOnIcon fontSize="large" />,
  },
  {
    title: "E-mail",
    desc: "borkovskiy.m@gmail.com",
    icon: <MailIcon fontSize="large" />,
  },
  {
    title: "Telegram",
    desc: "89269588045",
    icon: <TelegramIcon fontSize="large" />,
  },
  {
    title: "GitHub",
    desc: "https://github.com/MBorkovskiy",
    icon: <GitHubIcon fontSize="large" />,
  },
];

export const projects = [
  {
    title: "TvApp",
    description:
      "A Tvapp is a website that shows various selections of movies and TV series, allows you to find out all the necessary information about the film and watch the trailer. You can also save your favorite movies and series to your wishlist.",
    stack: ["Scss modules", "MUI", "React JS", "Redux Toolkit"],
    links: {
      code: "https://github.com/MBorkovskiy/tvapp",
      demo: "https://mborkovskiy.github.io/tvapp/",
    },
  },
  {
    title: "Games",
    description:
      "A Games website - a service that allows you to be aware of all the events in the world of free games through the news feed. You can find out all the necessary information about the game you are interested in, and if you are interested - go to the official page of the game. There is also a flexible filtering by genre, platform and sorting with a global search.",
    stack: ["Css modules", "MUI", "React JS", "Redux Toolkit"],
    links: {
      code: "https://github.com/MBorkovskiy/games",
      demo: "https://mborkovskiy.github.io/games/",
    },
  },
  {
    title: "Store",
    description:
      "A E-commerce website is an online platform that allows users to shop for personal or business use. The site provides an easy-to-use interface for searching, filtering, and purchasing a variety of products from a wide range of products. Also you can register and log in.",
    stack: ["Css", "React JS", "Redux Toolkit"],
    links: {
      code: "https://github.com/MBorkovskiy/store",
      demo: "https://mborkovskiy.github.io/store/",
    },
  },
];

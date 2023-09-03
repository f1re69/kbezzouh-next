import streamyImage from "../../../public/logos/projects/streamy.jpg";
import naturaImage from "../../../public/logos/projects/natura.jpg";
import weatherImage from "../../../public/logos/projects/weather.jpg";

export const projects = [
  {
    image: {
      file: streamyImage,
      width: 300,
      height: 300,
      alt: "Streamy",
    },
    title: "Projet Streamy",
    github: "https://github.com/f1re69/Streamy",
    livedemo: undefined,
  },
  {
    image: {
      file: naturaImage,
      width: 300,
      height: 300,
      alt: "Natura",
    },
    title: "Project Natura",
    github: "https://github.com/f1re69/Natura",
    livedemo: "https://natura.now.sh/",
  },
  {
    image: {
      file: weatherImage,
      width: 300,
      height: 300,
      alt: "Weather",
    },
    title: "Weather App",
    github: "https://github.com/f1re69/weather",
    livedemo: "https://weather-pearl.vercel.app/",
  },
];

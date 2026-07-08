import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import { SiFrontendmentor } from "react-icons/si";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import { FaDev } from "react-icons/fa";
import { FaTwitch } from "react-icons/fa";
import { SiCodewars } from "react-icons/si";
import { FaFreeCodeCamp } from "react-icons/fa";
import { FiGitlab } from "react-icons/fi";
import { FaHashnode } from "react-icons/fa6";
import { SiStackoverflow } from "react-icons/si";
const mapData = {
  plantforms: [
    {
      id: 1,
      name: "Github",
      icon: <GitHubIcon />,
      color: "#1A1A1A",
    },
    {
      id: 2,
      name: "Frontend Mentor",
      icon: <SiFrontendmentor />,
      color: "#D9D9D9",
    },
    {
      id: 3,
      name: "Twitter",
      icon: <TwitterIcon />,
      color: "#43B7E9",
    },
    {
      id: 4,
      name: "LinkedIn",
      icon: <LinkedInIcon />,
      color: "#2D68FF",
    },
    {
      id: 5,
      name: "Youtube",
      icon: <YouTubeIcon />,
      color: "#EE3939",
    },
    {
      id: 6,
      name: "Facebook",
      icon: <FacebookIcon />,
      color: "#2442AC",
    },

    {
      id: 7,
      name: "Twitch",
      icon: <FaTwitch />,
      color: "#EE3FC8",
    },
    {
      id: 8,
      name: "Dev.to",
      icon: <FaDev />,
      color: "#333333",
    },
    {
      id: 9,
      name: "Codewars",
      icon: <SiCodewars />,
      color: "#8A1A50",
    },

    {
      id: 10,
      name: "FreeCodeCamp",
      icon: <FaFreeCodeCamp />,
      color: "#8A1A50",
    },
    {
      id: 11,
      name: "GitLab",
      icon: <FiGitlab />,
      color: "#EB4925",
    },
    {
      id: 12,
      name: "Hashnode",
      icon: <FaHashnode />,
      color: "#0330D1",
    },
    {
      id: 13,
      name: "Stack Overflow",
      icon: <SiStackoverflow />,
      color: "#EC7100",
    },
  ],
};

export default mapData;

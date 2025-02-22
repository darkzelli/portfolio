import { ProjectProps } from "@/components/project";
import { accordianInterface } from "@/components/accordian";
import { nodeBadge, reactBadge, reactQueryBadge, typescriptBadge ,nextBadge, postgreSQLBadge, coolifyBadge } from "./badges";

 const projects: ProjectProps[] = [
  {
    projectName: "Portfolio Review",
    dateStarted: "Jan 2023",
    dateFinished: "Feb 2024",
    description: "Designed and created a platform for software engineers to receive feedback on their portfolios. Created a system to self-host the application on a VPS through SSH using Coolify. Implemented an efficient caching system using a combination of React Query and the NextJS API for a reliable and fast user interface",
    urlColor: "#A005FF",
    gifUrl: "https://media2.giphy.com/media/SpopD7IQN2gK3qN4jS/giphy.gif?cid=6c09b952y80leeflljm6ipq1b7s7o7s5ft4cm1xpyv4ardgg&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    badges: [
      reactBadge,
      typescriptBadge,
      reactQueryBadge,
      nodeBadge,
      nextBadge,
      postgreSQLBadge,
      coolifyBadge,
    ]
  },
  {
    projectName: "Portfolio Review",
    dateStarted: "Jan 2023",
    dateFinished: "Feb 2024",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    urlColor: "#A005FF",
    gifUrl: "https://media2.giphy.com/media/SpopD7IQN2gK3qN4jS/giphy.gif?cid=6c09b952y80leeflljm6ipq1b7s7o7s5ft4cm1xpyv4ardgg&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    badges: [
      reactBadge,
      typescriptBadge,
      reactQueryBadge,
      nodeBadge,
      nextBadge,
      postgreSQLBadge,
      coolifyBadge,
    ]
  },
  {
    projectName: "Portfolio Review",
    dateStarted: "Jan 2023",
    dateFinished: "Feb 2024",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    urlColor: "#A005FF",
    gifUrl: "https://media2.giphy.com/media/SpopD7IQN2gK3qN4jS/giphy.gif?cid=6c09b952y80leeflljm6ipq1b7s7o7s5ft4cm1xpyv4ardgg&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    badges: [
      reactBadge,
      typescriptBadge,
      reactQueryBadge,
      nodeBadge,
      nextBadge,
      postgreSQLBadge,
      coolifyBadge,
    ]
  },
  {
    projectName: "Portfolio Review",
    dateStarted: "Jan 2023",
    dateFinished: "Feb 2024",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    urlColor: "#A005FF",
    gifUrl: "https://media2.giphy.com/media/SpopD7IQN2gK3qN4jS/giphy.gif?cid=6c09b952y80leeflljm6ipq1b7s7o7s5ft4cm1xpyv4ardgg&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    badges: [
      reactBadge,
      typescriptBadge,
      reactQueryBadge,
      nodeBadge,
      nextBadge,
      postgreSQLBadge,
      coolifyBadge,
    ]
  },
 ]

 export const accordians:  accordianInterface[] = [
  {
    title: "Freelance Graphic Designer",
    description: "Utilized design tools such as Adobe Photoshop, Cinema 4D and Blender to produce high-quality work under tight deadlines. Gained experience in communicating effectively with clients to understand their vision and deliver designs that exceeded expectations. Developed time management skills to balance multiple projects while delivering creative designs on time.",
    dateStarted: 2016,
    dateFinished: 2021

  },
  {
    title: "Young Phenoms",
    description: "Taught a group of 7 how to earn money online through freelance work and entertainment. Used my experience as a freelance graphic designer to educate my students on how to design thumbnails that grabbed a potential viewer's attention.Learned how to organize, create and give helpful presentations that were tailored to all the club members' needs.",
    dateStarted: 2021,
    dateFinished: 2022
  }
 ]
export default projects;

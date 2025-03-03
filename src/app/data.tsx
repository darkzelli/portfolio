import { ProjectProps } from "@/components/project";
import { accordianInterface } from "@/components/accordian";
import { nodeBadge, reactBadge, reactQueryBadge, typescriptBadge ,nextBadge, postgreSQLBadge, coolifyBadge, supabaseBadge, flutterBadge } from "./badges";

 const projects: ProjectProps[] = [
  {
    projectName: "Portfolio Review",
    dateStarted: "Jan 2023",
    dateFinished: "Feb 2024",
    description: "Designed and created a platform for software engineers to receive feedback on their portfolios. Created a system to self-host the application on a VPS through SSH using Coolify. Implemented an efficient caching system using a combination of React Query and the NextJS API for a reliable and fast user interface",
    gifUrl: "https://i.imgur.com/qRh51F7.gif",
    badges: [
      reactBadge,
      typescriptBadge,
      reactQueryBadge,
      nodeBadge,
      nextBadge,
      postgreSQLBadge,
      coolifyBadge,
    ],
    website: "https://portfolioreview.me/",
    github: "https://github.com/darkzelli/portfolioreview",
    accentColor: "#A005FF"
  },
  {
    projectName: "Yearly",
    dateStarted: "Nov 2024",
    dateFinished: "Mar 2025",
    description: "Developed a cross-platform mobile application using Flutter for iOS and Android.Implemented backend functionality using Supabase, allowing for data storage and authentication.Refactored code to optimize app for performance, ensuring smooth usability. ",
    gifUrl: "https://i.imgur.com/xOrCkfF.gif",
    badges: [
      flutterBadge,
      supabaseBadge,
    ],
    website: "https://yearlyapp.com/",
    github: "https://github.com/darkzelli/yearly",
    accentColor: "#006BFF"
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

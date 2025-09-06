import { ProjectProps } from "@/components/project";
import { accordianInterface } from "@/components/accordian";
import { nodeBadge, reactBadge, reactQueryBadge, typescriptBadge ,nextBadge, postgreSQLBadge, coolifyBadge, supabaseBadge, flutterBadge, tailwindBadge, viteBadge, expressBadge } from "./badges";

 const projects: ProjectProps[] = [
  {
    projectName: "Portfolio Review",
    dateStarted: "Jan 2023",
    dateFinished: "Feb 2024",
    description: "Portfolio Review is a platform designed to help creatives, designers, and professionals get valuable feedback on their portfolios. Users can submit their work for review by industry experts or peers, gaining insights to improve their design, presentation, and overall impact. The platform aims to provide constructive critique to help users refine their portfolios and increase their chances of landing jobs or clients.",
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
    description: "Yearly is a productivity app designed to help users set, track, and achieve their annual goals. It offers features such as daily progress logging, goal setting with milestones and deadlines, visual progress charts, an achievement system, a comprehensive yearly overview dashboard, and smart reminders to keep users motivated and on track.",
    gifUrl: "https://i.imgur.com/xOrCkfF.gif",
    badges: [
      flutterBadge,
      supabaseBadge,
    ],
    website: "https://yearlyapp.com/",
    github: "https://github.com/darkzelli/yearly",
    accentColor: "#006BFF"
  },
  {
    projectName: "Towson Academic Pathway",
    dateStarted: "Sept 2024",
    dateFinished: "Dec 2024",
    description: "Towson Academic Pathway (TAP) is a MERN-stack web app that streamlines academic planning for Towson University students. Styled with Tailwind CSS and powered by OpenAI, it offers a drag-and-drop interface, an integrated course catalog, and a dedicated page for university requirements, making degree planning intuitive and stress-free. ",
    gifUrl: "https://i.imgur.com/9fqsd4B.gif",
    badges: [
      postgreSQLBadge,
      tailwindBadge,
      reactBadge,
      viteBadge,
      expressBadge,
      nodeBadge
    ],
    website: "",
    github: "https://github.com/Romerico234/Towson-Academic-Pathway",
    accentColor: "#f5c842"
  },


 ]

 export const accordians:  accordianInterface[] = [
  {
    title: "Mettler Toledo",
    img: "/images/Mettler_Toledo.png",
    description: "Taught a group of 7 how to earn money online through freelance work and entertainment. Used my experience as a freelance graphic designer to educate my students on how to design thumbnails that grabbed a potential viewer's attention.Learned how to organize, create and give helpful presentations that were tailored to all the club members' needs.",
    dateStarted: "June 2025",
    dateFinished: "Aug 2025"
  },
  {
    title: "Freelance Graphic Designer",
    img: "",
    description: "Utilized design tools such as Adobe Photoshop, Cinema 4D and Blender to produce high-quality work under tight deadlines. Gained experience in communicating effectively with clients to understand their vision and deliver designs that exceeded expectations. Developed time management skills to balance multiple projects while delivering creative designs on time.",
    dateStarted: "2016",
    dateFinished: "2021"

  }
 ]
export default projects;

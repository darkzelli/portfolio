import { ProjectProps } from "@/components/project";
import { accordianInterface } from "@/components/accordian";
import { nodeBadge, reactBadge, reactQueryBadge, typescriptBadge ,nextBadge, postgreSQLBadge, coolifyBadge, supabaseBadge, flutterBadge, tailwindBadge, viteBadge, expressBadge, csharpBadge, avaloniaBadge, dartBadge } from "./badges";

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
    website: "zacharyhall.dev/portfolioreview",
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
      dartBadge,
      flutterBadge,
      supabaseBadge,
    ],
    website: "zacharyhall.dev/yearly",
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
    website: "zacharyhall.dev/tap",
    github: "https://github.com/Romerico234/Towson-Academic-Pathway",
    accentColor: "#f5c842"
  },
  {
    projectName: "HashSync",
    dateStarted: "May 2024",
    dateFinished: "June 2024",
    description: "HashSync is a cross-platform desktop application that automatically syncs files between devices by detecting files changes and securely transferring updated files. It utilizes the SHA-256 hashing algorithm to detect changes in your file at regular intervals.",
    gifUrl: "https://camo.githubusercontent.com/35cfe0901c3aaa6524a2e6da489a0e68ecf9dbba81770501f3f1cc2c5b8b08f9/68747470733a2f2f692e696d6775722e636f6d2f436947574271672e706e67",
    badges: [
      csharpBadge,
      avaloniaBadge
    ],
    website: "zacharyhall.dev/hashsync",
    github: "https://github.com/darkzelli/hashsync?tab=readme-ov-file",
    accentColor: "#006BFF"
  },

 ]

 export const accordians:  accordianInterface[] = [
  {
    title: "Mettler Toledo",
    img: "/images/Mettler_Toledo.png",
    website: "https://www.mt.com/us/en/home.html",
    description: `Created a Blazor-based C# search engine enabling Field Service Engineers to access data 15% faster.
Developed unit and integration tests, boosting code coverage by 50% and reducing potential bugs.
Utilized Visual Studio IDE to debug user-reported issues and implement solutions.`,
    dateStarted: "June 2025",
    dateFinished: "Aug 2025"
  },
  {
    title: "Freelance Graphic Designer",
    img: "",
    website: "",
    description: "Utilized design tools such as Adobe Photoshop, Cinema 4D and Blender to produce high-quality work under tight deadlines. Gained experience in communicating effectively with clients to understand their vision and deliver designs that exceeded expectations. Developed time management skills to balance multiple projects while delivering creative designs on time.",
    dateStarted: "2016",
    dateFinished: "2021"

  }
 ]
export default projects;

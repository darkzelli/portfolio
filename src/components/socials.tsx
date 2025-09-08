import SocialCard from "./socialCard";
export default function Socials(){
  return (
    <div className="noscroll flex  flex-col justify-center ">
      <div className="flex flex-row items-center h-[70px] mb-2">
        <SocialCard url="https://github.com/darkzelli"/>
        <SocialCard url="mailto:zacharyhallellis@gmail.com?" icon="gmail"/>
        <SocialCard url="https://www.linkedin.com/in/zachary-hall-b19a80348/" icon="linkedIn"/>
        <SocialCard url="/" icon="youtube"/>
        <SocialCard url="/resume.pdf" icon="resume"/>
      </div>
    </div>
  );
}

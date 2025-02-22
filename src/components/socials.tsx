import SocialCard from "./socialCard";
export default function Socials(){
  return (
    <div className="noscroll flex  flex-col justify-center ">
      <div className="flex flex-row items-center h-[70px] mb-2">
        <SocialCard url="https://github.com/darkzelli"/>
        <SocialCard url="mailto:zacharyhallellis@gmail.com?" icon="gmail"/>
        <SocialCard url="/" icon="linkedIn"/>
        <SocialCard url="/" icon="youtube"/>
      </div>
    </div>
  );
}

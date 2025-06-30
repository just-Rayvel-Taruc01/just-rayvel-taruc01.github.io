import {
    FaHtml5, FaCss3Alt, FaJs, FaReact,
    FaBootstrap, FaNodeJs,  FaPython,
    FaJava, FaGitAlt, FaGithub,
    FaFigma,  FaLinux, FaNetworkWired,
    FaShieldAlt,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiExpress, SiMongodb, SiMysql, SiCplusplus, SiSharp, SiVercel} from "react-icons/si";

interface SkillBadgeProps {
  icon: React.ElementType; 
  name: string;
  bgColor?: string;
  textColor?: string;
}

const SkillBadge = ({ icon: Icon, name, bgColor = "bg-gray-100", textColor = "text-gray-800" }: SkillBadgeProps) => (
  <span className={`inline-flex items-center gap-1 ${bgColor} ${textColor} text-sm font-medium px-2.5 py-0.5 rounded-full transition-transform hover:scale-105`}>
    <Icon className="text-base w-4 h-4" />
    {name}
  </span>
);
export default function Skills() {
  return (
    <div className="mb-4">
      <h3 className="text-xl font-semibold mb-2 text-headline">Skills</h3>

      {/* Frontend */}
      <div className="mb-2 gap-2 flex-auto items-start md:flex">
        <p className="font-medium text-paragraph">Frontend:</p>
        <div className="flex flex-wrap gap-2 mt-1 md:mt-0">
          <SkillBadge icon={FaHtml5} name="HTML" bgColor="bg-orange-100" textColor="text-orange-800" />
          <SkillBadge icon={FaCss3Alt} name="CSS" bgColor="bg-blue-100" textColor="text-blue-800" />
          <SkillBadge icon={FaJs} name="JavaScript" bgColor="bg-yellow-100" textColor="text-yellow-800" />
          <SkillBadge icon={FaReact} name="React" bgColor="bg-cyan-100" textColor="text-cyan-800" />
          <SkillBadge icon={SiNextdotjs} name="Next.js" />
          <SkillBadge icon={SiTailwindcss} name="Tailwind CSS" textColor="text-teal-500" />
          <SkillBadge icon={FaBootstrap} name="Bootstrap" bgColor="bg-purple-100" textColor="text-purple-800" />
        </div>
      </div>

      {/* Backend */}
      <div className="mb-2 gap-2 flex-auto items-center md:flex">
        <p className="font-medium text-paragraph">Backend:</p>
        <div className="flex flex-wrap gap-2 mt-1 md:mt-0">
          <SkillBadge icon={FaNodeJs} name="Node.js" bgColor="bg-green-100" textColor="text-green-800" />
          <SkillBadge icon={SiExpress} name="Express.js" />
        </div>
      </div>

      {/* Database */}
      <div className="mb-2 gap-2 flex-auto items-center md:flex">
        <p className="font-medium text-paragraph">Database:</p>
        <div className="flex flex-wrap gap-2 mt-1 md:mt-0">
          <SkillBadge icon={SiMysql} name="MySQL" textColor="text-blue-700"/>
          <SkillBadge icon={SiMongodb} name="MongoDB" textColor="text-green-800"/>
        </div>
      </div>

      {/* Programming Languages */}
      <div className="mb-2 gap-2 flex-auto items-center md:flex">
        <p className="font-medium text-paragraph">Programming Languages:</p>
        <div className="flex flex-wrap gap-2 mt-1 md:mt-0">
          <SkillBadge icon={FaPython} name="Python" bgColor="bg-blue-100" textColor="text-blue-800" />
          <SkillBadge icon={FaJava} name="Java" bgColor="bg-orange-100"  textColor="text-orange-800" />
          <SkillBadge icon={SiCplusplus} name="C++" textColor="text-blue-500" />
          <SkillBadge icon={SiSharp} name="C#" textColor="text-purple-800"/>
        </div>
      </div>

      {/* Tools & Platforms */}
      <div className="mb-2 gap-2 flex-auto items-center md:flex">
        <p className="font-medium text-paragraph">Tools & Platforms:</p>
        <div className="flex flex-wrap gap-2 mt-1 md:mt-0">
          <SkillBadge icon={FaGithub} name="GitHub" />
          <SkillBadge icon={FaGitAlt} name="Git" textColor="text-orange-800" />
          <SkillBadge icon={SiVercel} name="Vercel" />
          <SkillBadge icon={FaFigma} name="Figma" textColor="text-rose-800" />
        </div>
      </div>

      {/* Cybersecurity */}
      <div className="mb-2 gap-2 flex-auto items-center md:flex">
        <p className="font-medium text-paragraph">Cybersecurity:</p>
        <div className="flex flex-wrap gap-2 mt-1 md:mt-0">
          <SkillBadge icon={FaLinux} name="Kali Linux" textColor="text-gray-800"/>
          <SkillBadge icon={FaNetworkWired} name="Packet Tracer" />
          <SkillBadge icon={FaShieldAlt} name="Pen Testing" />
        </div>
      </div>
    </div>
  );
}

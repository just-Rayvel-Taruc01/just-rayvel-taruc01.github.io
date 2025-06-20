import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiMysql, SiCisco } from "react-icons/si";

const techIcons = {
  "React": <FaReact className="inline mr-1 text-blue-500" />,
  "Next.js": <SiNextdotjs className="inline mr-1" />,
  "Tailwind CSS": <SiTailwindcss className="inline mr-1 text-teal-400" />,
  "Node.js": <FaNodeJs className="inline mr-1 text-green-600" />,
  "MySQL": <SiMysql className="inline mr-1 text-blue-700" />,
  "Packet Tracer": <SiCisco className="inline mr-1 text-blue-500" />,
};

export function About() {
  return (
    <div className="bg-(--card-bg) p-6 rounded-lg shadow text-[var(--body)]">
      <h2 className="text-3xl font-bold mb-4 text-[var-(--healine)]">About Me</h2>
      <p className="text-base lg:text-md mb-4">
        I am a passionate web developer with a focus on creating dynamic and responsive web applications. 
        My journey in web development began with a fascination for how websites work, and it has since evolved into a full-fledged career.
      </p>
      <p className="text-base lg:text-md mb-4">
        I specialize in using modern technologies like React, Next.js, and Tailwind CSS to build user-friendly interfaces and seamless 
         experiences. I am always eager to learn new skills and stay updated with the latest trends in web development.
      </p>
      <p className="text-base lg:text-md mb-4">
        I also enjoy creating responsive UI, experimenting with backend logic, and simulating networks for fun.
      </p>

      {/* Tech Stack Badges */}
      <div className="flex flex-wrap gap-2 mt-4">
        {[
          "React",
          "Next.js",
          "Tailwind CSS",
          "Node.js",
          "MySQL",
          "Packet Tracer",
        ].map((tech) => (
          <span
            key={tech}
            className="bg-(--card-tag-bg) text-(--card-tag-text) px-3 py-1 rounded-full text-sm flex items-center"
          >
            {techIcons[tech as keyof typeof techIcons]} {tech}
          </span>
        ))}
      </div>

    </div>
  );
}
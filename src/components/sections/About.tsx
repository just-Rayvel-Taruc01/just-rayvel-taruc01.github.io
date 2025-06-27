import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiMysql, SiCisco } from "react-icons/si";

const techIcons = {
  "React": <FaReact className="inline mr-1 text-blue-500" />,
  "Next.js": <SiNextdotjs className="inline mr-1 text-black dark:text-white" />,
  "Tailwind CSS": <SiTailwindcss className="inline mr-1 text-teal-400" />,
  "Node.js": <FaNodeJs className="inline mr-1 text-green-600" />,
  "MySQL": <SiMysql className="inline mr-1 text-blue-700" />,
  "Packet Tracer": <SiCisco className="inline mr-1 text-blue-500" />,
};

export function About() {
  return (
    <div className="bg-(--card-bg) p-6 rounded-lg shadow text-paragraph">
      <h2 className="text-3xl font-bold mb-4 text-headline">About Me</h2>

      <p className="text-base lg:text-md mb-4">
        I’m Rayvel Taruc, a passionate IT student focused on building dynamic and responsive web applications.
        My journey began with a fascination for how websites work, and it has since evolved into hands-on projects in web dev and cybersecurity.
      </p>

      <p className="text-base lg:text-md mb-4">
        I specialize in using modern tools like React, Next.js, and Tailwind CSS to build elegant, functional UIs. 
        I’m always learning and enjoy exploring both frontend and backend development.
      </p>

      <p className="text-base lg:text-md mb-4">
        I also enjoy experimenting with backend logic and simulating networks using Cisco Packet Tracer.
        I’ve participated in events like Hack4Gov and Code Wars to sharpen my problem-solving skills.
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
            className="bg-card-tag-bg text-card-tag-text px-3 py-1 rounded-full text-sm flex items-center"
          >
            {techIcons[tech as keyof typeof techIcons]} {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

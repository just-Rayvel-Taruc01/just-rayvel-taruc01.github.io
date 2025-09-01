"use client";

import { useState } from "react";
import { FaReact, FaNodeJs, FaUserShield } from "react-icons/fa";
import { 
  SiNextdotjs, 
  SiTailwindcss, 
  SiBootstrap, 
  SiMysql, 
  SiEjs 
} from "react-icons/si";
import { Modal } from "@/components/ui/Modal";

const projects = [
  {
    title: "Portfolio Site",
    description: "This portfolio built using Next.js and Tailwind CSS.",
    readme: `# Portfolio Site\n\nThis is my personal portfolio built with Next.js and Tailwind CSS.\n\nFeatures:\n- Responsive design\n- Modern UI\n- Showcases my work.`,
    image: "/images/portfolio-demo.png",
    repo: "https://github.com/just-Rayvel-Taruc01/just-rayvel-taruc01.github.io",
    tech: [
      { icon: <FaReact className="text-cyan-400" />, name: "React" },
      { icon: <SiNextdotjs />, name: "Next.js" },
      { icon: <SiTailwindcss className="text-teal-500" />, name: "Tailwind CSS" },
    ],
  },
  {
    title: "Pet Adoption App",
    description: "A dynamic full-stack app for managing adoptable pets.",
    readme: `# Pet Adoption App\n\nBuilt with Node.js, Express, MySQL, EJS, and Bootstrap.\n\nFeatures:\n- User authentication\n- Add & manage pets\n- Bootstrap UI`,
    image: "/images/pet-demo.png",
    repo: "https://github.com/just-Rayvel-Taruc01/Furr-Friend-adaption-website",
    tech: [
      { icon: <SiBootstrap className="text-purple-600" />, name: "Bootstrap" },
      { icon: <SiEjs className="text-yellow-600" />, name: "EJS" },
      { icon: <FaNodeJs className="text-green-600" />, name: "Node.js" },
      { icon: <SiMysql className="text-blue-600" />, name: "MySQL" },
      { icon: <FaUserShield className="text-gray-600" />, name: "Auth" },
    ],
  },
  {
    title: "Blog Platform",
    description: "A blogging platform with user authentication and post management.",
    readme: `# Blog Platform\n\nFull-stack blogging app with authentication and CRUD posts.\n\nFeatures:\n- User login/signup\n- Create, edit, delete posts\n- Responsive layout`,
    image: "/images/blog-demo.png",
    repo: "https://github.com/yourusername/blog-platform",
    tech: [
      { icon: <FaReact className="text-cyan-400" />, name: "React" },
      { icon: <SiNextdotjs />, name: "Next.js" },
      { icon: <SiTailwindcss className="text-teal-500" />, name: "Tailwind CSS" },
    ],
  },
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<null | typeof projects[0]>(null);

  return (
    <div className="bg-[var(--card-bg)] p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-[var(--headline)]">Projects</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        {projects.map((project, index) => (
          <div 
            key={index}
            onClick={() => setSelectedProject(project)}  // 🔹 open modal
            className="cursor-pointer border border-[var(--secondary)] rounded-lg p-4 mt-4 hover:[background:var(--accent-gradient)] hover:text-white transition-all duration-300"
          >
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-base lg:text-sm">{project.description}</p>

            <div className="flex flex-wrap items-center gap-2 mt-2">
              {project.tech.map((t, i) => (
                <span key={i} className="flex items-center gap-1 py-1 rounded-full text-sm">
                  {t.icon} <span className="hidden sm:inline">{t.name}</span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Modal rendered once, controlled by state */}
      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title || ""}
        content={selectedProject?.readme || ""}
        image={selectedProject?.image}
        repo={selectedProject?.repo}
      />
    </div>
  );
}

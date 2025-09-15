"use client";

import { useState } from "react";
import { FaReact, FaNodeJs, FaUserShield } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiMysql,
  SiEjs,
  SiPython,
  SiPostgresql,
  SiStreamlit,
  SiPlotly,
} from "react-icons/si";
import { Modal } from "@/components/ui/Modal";

const projects = [
  {
    title: "Portfolio Site",
    description: "This portfolio built using Next.js and Tailwind CSS.",
    readme: `# Portfolio Site\n\nThis is my personal portfolio built with Next.js and Tailwind CSS.\n\nFeatures:\n- Responsive design\n- Modern UI\n- Showcases my work.`,
    image: "/images/portfolio-demo.jpg",
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
    title: "IT Asset Inventory Dashboard",
    description: "Centralized dashboard to track and manage IT assets (devices, software, licenses) with ETL and real-time visualization.",
    readme: `# IT Asset Inventory Dashboard

  Python-based dashboard with PostgreSQL backend, ETL scripts, and Streamlit + Plotly frontend.

  ## Features
  - Import asset data (CSV/Excel, AD/LDAP, network scans)
  - Searchable inventory with filtering and lifecycle tracking
  - License expiration alerts
  - Interactive dashboard with charts (device distribution, OS, licenses, hardware age)

  ## Setup
  1. Install Python 3.8+
  2. pip install -r requirements.txt
  3. Run ETL scripts (etl/etl_csv.py, etl/etl_ldap.py, etl/etl_nmap.py)
  4. streamlit run dashboard/app.py
  `,
    image: "/images/it-asset-dashboard.png",
    repo: "https://github.com/just-Rayvel-Taruc01/it-asset-inventory-dashboard",
    tech: [
      { icon: <SiPython className="text-yellow-400" />, name: "Python" },
      { icon: <SiPostgresql className="text-sky-600" />, name: "PostgreSQL" },
      { icon: <SiStreamlit className="text-red-500" />, name: "Streamlit" },
      { icon: <SiPlotly className="text-blue-400" />, name: "Plotly" },
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

import { FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { FaNodeJs, FaUserShield } from "react-icons/fa";
import { SiBootstrap, SiMysql, SiEjs } from "react-icons/si";

export function Projects() {
  return (
    <div className="bg-[var(--card-bg)] p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-4 text-[var(--headline)]">Projects</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">

        {/* Portfolio Site */}
        <div className="border border-[var(--secondary)] rounded-lg p-4 mt-4 hover:[background:var(--accent-gradient)] hover:text-white transition-all duration-300">
          <h3 className="text-xl font-semibold">Portfolio Site</h3>
          <p className="text-base lg:text-sm">This portfolio built using Next.js and Tailwind CSS.</p>
          {/* Tech Stack Icon */}
          <div className="flex flex-wrap items-center gap-2 mt-2">
            <span className="flex items-center gap-1 py-1 rounded-full text-sm">
              <FaReact className="text-cyan-400" /> <span className="hidden sm:inline">React</span>
            </span>
            <span className="flex items-center gap-1 py-1 rounded-full text-sm">
              <SiNextdotjs className="" /> <span className="hidden sm:inline">Next.js</span>
            </span>
            <span className="flex items-center gap-1 py-1 rounded-full text-sm">
              <SiTailwindcss className="text-teal-500" /> <span className="hidden sm:inline">Tailwind CSS</span>
            </span>
          </div>
        </div>
        {/* Blog Platform */}
        <div className="border border-[var(--secondary)] rounded-lg p-4 mt-4 hover:[background:var(--accent-gradient)] hover:text-white transition-all duration-300">
          <h3 className="text-xl font-semibold">Blog Platform</h3>
          <p className="text-base lg:text-sm">A blogging platform with user authentication and post management.</p>
          {/* Tech Stack Icon */}
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="flex items-center gap-1 py-1 rounded-full text-sm">
              <FaReact className="text-cyan-400" /> <span className="hidden sm:inline">React</span>
            </span>
            <span className="flex items-center gap-1 py-1 rounded-full text-sm">
              <SiNextdotjs className="" /> <span className="hidden sm:inline">Next.js</span>
            </span>
            <span className="flex items-center gap-1 py-1 rounded-full text-sm">
              <SiTailwindcss className="text-teal-500" /> <span className="hidden sm:inline">Tailwind CSS</span>
            </span>
          </div>
        </div>
        {/* Pet Adoption App */}
        <div className="border border-[var(--secondary)] rounded-lg p-4 mt-4 hover:[background:var(--accent-gradient)] hover:text-white transition-all duration-300">
          <h3 className="text-xl font-semibold">Pet Adoption App</h3>
          <p className="text-base lg:text-sm">
            A dynamic full-stack web application for managing and showcasing adoptable pets, built with Node.js, Express, MySQL, EJS, and Bootstrap.
            A full-stack application with user authentication and pet management.
          </p>
          {/* Tech Stack Icon */}
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="flex items-center gap-1 py-1 rounded-full text-sm">
              <SiBootstrap className="text-purple-600" /> <span className="hidden sm:inline">Bootstrap</span>
            </span>
            <span className="flex items-center gap-1 py-1 rounded-full text-sm">
              <SiEjs className="text-yellow-600" /> <span className="hidden sm:inline">EJS</span>
            </span>
            <span className="flex items-center gap-1 py-1 rounded-full text-sm">
              <FaNodeJs className="text-green-600" /> <span className="hidden sm:inline">Node.js</span>
            </span>
            <span className="flex items-center gap-1 py-1 rounded-full text-sm">
              <SiMysql className="text-blue-600" /> <span className="hidden sm:inline">MySQL</span>
            </span>
            <span className="flex items-center gap-1 py-1 rounded-full text-sm">
              <FaUserShield className="text-gray-600" /> <span className="hidden sm:inline">Auth</span>
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}

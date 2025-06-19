import { FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

export function Projects() {
  return (
    <div className="bg-[var(--card-bg)] p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-4 text-[var(--headline)]">Projects</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">

      {/* Portfolio Site */}
      <div className="border border-[var(--secondary)] rounded-lg p-4 mt-4 hover:[background:var(--accent-gradient)] hover:text-white transition-all duration-300">
        <h3 className="text-xl font-semibold">Portfolio Site</h3>
        <p>This portfolio built using Next.js and Tailwind CSS.</p>
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
        <p>A blogging platform with user authentication and post management.</p>
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
      {/* E-commerce App */}
      <div className="border border-[var(--secondary)] rounded-lg p-4 mt-4 hover:[background:var(--accent-gradient)] hover:text-white transition-all duration-300">
        <h3 className="text-xl font-semibold">E-commerce App</h3>
        <p>A full-stack e-commerce application with user authentication and product management.</p>
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
    </div>
    </div>
  );
}

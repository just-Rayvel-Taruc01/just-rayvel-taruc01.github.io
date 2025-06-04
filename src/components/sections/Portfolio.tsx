import { FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

export function Portfolio() {
  return (
    <div className="bg-[var(--card-bg)] p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-4 text-[var(--headline)]">Projects</h2>

      <div className="border border-[var(--secondary)] rounded-lg p-4 hover:bg-[var(--accent)] hover:text-white transition">
        <h3 className="text-xl font-semibold">Portfolio Site</h3>
        <p>This portfolio built using Next.js and Tailwind CSS.</p>
        <div className="flex flex-wrap gap-2 mt-2">
          <span className="flex items-center gap-1 px-2 py-1 rounded-full text-sm">
            <FaReact className="text-cyan-400" /> <span className="hidden sm:inline">React</span>
          </span>
          <span className="flex items-center gap-1 -2 py-1 rounded-full text-sm">
            <SiNextdotjs className="" /> <span className="hidden sm:inline">Next.js</span>
          </span>
          <span className="flex items-center gap-1 px-2 py-1 rounded-full text-sm">
            <SiTailwindcss className="text-teal-500" /> <span className="hidden sm:inline">Tailwind CSS</span>
          </span>
        </div>
      </div>
    </div>
  );
}

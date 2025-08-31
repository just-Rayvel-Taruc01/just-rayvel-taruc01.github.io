"use client";
import Image from "next/image";
import { FiMail, FiMapPin } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { DarkModeToggle } from "@/components/ui/DarkModeToggle";


export function Sidebar() {
  return (
    <div className="flex flex-col md:flex-row lg:flex-col p-4 text-[var(--body)]
                    gap-6 md:gap-12 lg:gap-4 justify-center items-center">
      {/* Profile */}
      <div className="flex items-center justify-center">
        <Image
          src="/profile.jpg"
          alt="Profile"
          width={150}
          height={150}
          className="shadow-lg mx-auto md:w-45 md:h-45 animate-blobMorph border-4 border-(--accent)"
        />  
      </div>
      {/* Contact Info */}
      <div className="">
        {/* Greeting */}

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                        bg-(--contact-card-bg) mb-3">
            <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse"/>
            <span className="text-xs font-semibold">Hello, I am</span>
            
        </div>
        
        {/* Name */}
        <h2
          className="
            text-4xl font-bold text-transparent bg-clip-text 
            bg-[image:var(--accent-gradient)] animate-shimmer
            mb-3
            "
        >
          Rayvel Taruc
        </h2>

        <div
            className="text-base font-medium text-center md:text-left lg:text-center 
                      pb-3 border-b border-gray-300 dark:border-gray-700"
          >
            IT Graduate | Web Developer
          </div>

        <ul className="mt-3 md:mt-0 lg:mt-3 lg:space-y-3 md:space-y-1 space-y-2 text-sm">
          <li className="flex items-center gap-2 hover:text-[var(--accent)]">
            <FiMail />
            <a href="mailto:rayvel.dev@gmail.com" className="">
              rayvel.dev@gmail.com
            </a>
          </li>
          <li className="flex items-center gap-2">
            <FiMapPin /> <span>San Luis, Pampanga</span>
          </li>
        </ul>

        {/* Social + Toggle */}
        <ul className="flex flex-wrap gap-4 items-center justify-center md:justify-start lg:justify-center mt-6 md:mt-3 lg:mt-6">
          <li>
            <a
              href="https://www.linkedin.com/in/taruc-rayvel-m-026534261"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--accent)]"
            >
              <FaLinkedin size={22} />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/just-Rayvel-Taruc01/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--accent)]"
            >
              <FaGithub size={22} />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/yourtwitter"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--accent)]"
            >
              <FaXTwitter size={22} />
            </a>
          </li>
          <li>
            <DarkModeToggle />
          </li>
        </ul>
      </div>
    </div>
  );
}

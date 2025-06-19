"use client";

import Image from "next/image";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { DarkModeToggle } from "@/components/ui/DarkModeToggle";

export function Sidebar() {
  return (
    <div className="flex flex-col md:flex-row lg:flex-col p-6 text-[var(--body)]
                    gap-6 md:gap-12 lg:gap-4 justify-center items-center">
      {/* Profile */}
      <div className="flex items-center">
        <Image
          src="/profile.jpg"
          alt="Profile"
          width={150}
          height={150}
          className="rounded-full shadow-lg mx-auto md:w-45 md:h-45"
        />
      </div>

      {/* Contact Info */}
      <div className="">
        <h2 className="text-3xl md:text-4xl lg:text-3xl font-bold text-[var(--headline)] 
                       text-center lg:text-center md:text-start pb-4 md:pb-2 lg:pb-4"
        >Rayvel Taruc</h2>

        <div className="text-sm text-center md:text-start lg:text-center pb-3 lg:border-b-1 md:border-b-0 border-b-1">Web Developer | UX/UI Designer</div>

        <ul className="mt-3 md:mt-0 lg:mt-3 lg:space-y-3 md:space-y-1 space-y-2 text-sm">
          <li className="flex items-center gap-2">
            <FiPhone /> <span>(+63) 928 227 7066</span>
          </li>
          <li className="flex items-center gap-2">
            <FiMail />
            <a href="mailto:rayvelm.taruc02@gmail.com" className="hover:text-(--accent-gradient)">
              rayvelm.taruc02@gmail.com
            </a>
          </li>
          <li className="flex items-center gap-2">
            <FiMapPin /> <span>Purok 2, San Roque, San Luis, Pampanga</span>
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

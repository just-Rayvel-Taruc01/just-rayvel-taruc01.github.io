"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiMail, FiMapPin } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { DarkModeToggle } from "@/components/ui/DarkModeToggle";

// Motion variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

export function Sidebar() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="lg:fixed top-10 lg:h-11/12 lg:w-72 rounded-xl 
                 overflow-y-auto shadow-md bg-[var(--card-bg)] md:w-full md:h-auto"
    >
      <div className="flex flex-col md:flex-row lg:flex-col p-4 gap-6 md:gap-14 lg:gap-4 
                      justify-center items-center text-[var(--body)]">
        
        {/* Profile */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex items-center justify-center"
        >
          <Image
            src="/profile.jpg"
            alt="Profile"
            width={150}
            height={150}
            className="shadow-lg mx-auto md:w-[180px] md:h-[180px] animate-blobMorph border-4 border-[var(--accent)] rounded-full"
          />
        </motion.div>

        {/* Info */}
        <div className="flex flex-col">
          
          {/* Greeting */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="inline-flex items-center w-30 gap-2 px-4 py-2 rounded-full bg-[var(--contact-card-bg)] mb-3"
          >
            <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs font-semibold">Hello, I am</span>
          </motion.div>

          {/* Name */}
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl font-bold text-transparent bg-clip-text bg-[image:var(--accent-gradient)] animate-shimmer mb-3 text-center md:text-left lg:text-center"
          >
            Rayvel Taruc
          </motion.h2>

          {/* Role */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-base font-medium text-center md:text-left lg:text-center pb-3 border-b border-gray-300 dark:border-gray-700"
          >
            IT Enthusiast | Web Developer
          </motion.div>

          {/* Contact List */}
          <motion.ul
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-3 md:mt-0 lg:mt-3 lg:space-y-3 md:space-y-1 space-y-2 text-sm"
          >
            <li className="flex items-center gap-2 hover:text-[var(--accent)]">
              <FiMail /> <a href="mailto:rayvel.dev@gmail.com">rayvel.dev@gmail.com</a>
            </li>
            <li className="flex items-center gap-2">
              <FiMapPin /> <span>San Luis, Pampanga</span>
            </li>
          </motion.ul>

          {/* Socials + Dark Mode Toggle */}
          <motion.ul
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap gap-4 items-center justify-center md:justify-start lg:justify-center mt-6 md:mt-3 lg:mt-6"
          >
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
                href="https://twitter.com/your_actual_handle"
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
          </motion.ul>
        </div>
      </div>
    </motion.div>
  );
}

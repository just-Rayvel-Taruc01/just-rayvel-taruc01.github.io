"use client";
import { motion } from "framer-motion";

export function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className=""
    >
      <div className="bg-(--card-bg) p-6 rounded-lg shadow text-paragraph">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-4 text-headline"
        >
          About Me
        </motion.h2>

        {/* Paragraphs */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-base lg:text-md mb-4"
        >
          I’m Rayvel Taruc, a passionate IT Enthusiast focused on building web applications.
          My journey began with a fascination for how websites work, and it has since evolved into hands-on projects in web dev and cybersecurity.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-base lg:text-md mb-4"
        >
          I specialize in using modern tools like React, Next.js, and Tailwind CSS to build elegant, functional UIs. 
          I’m always learning and enjoy exploring both frontend and backend development.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-base lg:text-md mb-6"
        >
          I also enjoy experimenting with backend logic and simulating networks using Cisco Packet Tracer. 
          I’ve participated in events like Hack4Gov and Code Wars to sharpen my problem-solving skills.
        </motion.p>

        {/* Highlights / Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              { stat: "5+", label: "Projects Completed", link: "#projects" },
              { stat: "3", label: "Competitions Joined", link: "#resume" },
              { stat: "3+", label: "Years Coding", link: "#resume" },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-(--bg) p-4 rounded-lg shadow-md text-center 
                          border border-transparent
                          hover:border-(--accent) hover:scale-105 
                          transition-all duration-300 cursor-pointer"
              >
                <p className="text-2xl font-bold text-(--accent)">{item.stat}</p>
                <p className="text-sm text-paragraph">{item.label}</p>
              </motion.a>
            ))}
          </div>
        </motion.div>


        {/* Buttons Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-6 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center sm:justify-start lg:justify-start"
        >
          <a
            href="#projects"
            className="px-6 py-2.5 rounded-lg font-medium shadow 
                      bg-(--accent) text-white text-center
                      hover:scale-110 hover:opacity-90 
                      transition-all duration-300"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-2.5 rounded-lg font-medium shadow 
                      border border-(--accent) text-(--accent) text-center
                      hover:bg-(--accent) hover:text-white hover:scale-110 
                      transition-all duration-300"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const sections = ["about", "resume", "projects", "contact"];

export function Navigation() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0.1,
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex lg:justify-end justify-center">
      <motion.nav
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed z-20 flex justify-center p-2 bg-[var(--card-bg)] rounded-t-xl
                   shadow-md border-t-2 bottom-0 right-0 left-0 gap-2 md:gap-4
                   lg:text-base lg:rounded-lg lg:border lg:bottom-auto lg:right-auto lg:left-auto"
      >
        {sections.map((id) => {
          const isActive = active === id;

          return (
            <a
              key={id}
              href={`#${id}`}
              className={`
                px-2 md:px-3 lg:px-4 py-1 rounded-full transition-all
                ${isActive
                  ? "[background:var(--accent-gradient)] bg-clip-text shadow"
                  : "hover:text-[var(--accent)]" 
                }
              `}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          );
        })}
      </motion.nav>
    </div>
  );
}

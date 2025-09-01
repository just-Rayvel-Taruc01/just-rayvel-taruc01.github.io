"use client";

import { useRef, useState, useLayoutEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaBriefcase, FaBook, FaUserFriends } from "react-icons/fa";
import Image from "next/image";
import  Skills from "@/components/ui/Skills";

export function Resume() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  const [lineHeight, setLineHeight] = useState(0);

  // Measure line height once layout is rendered
  useLayoutEffect(() => {
  const resizeObserver = new ResizeObserver(() => {
      if (lineRef.current) {
        setLineHeight(lineRef.current.offsetHeight);
      }
    });

    if (lineRef.current) {
      resizeObserver.observe(lineRef.current);
    }

    return () => resizeObserver.disconnect();
  }, []);

  // Scroll progress (0 → 1) as container moves through viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"], // maps scrolling correctly
  });

  // Map progress to marker position (0 → lineHeight)
  const markerY = useTransform(scrollYProgress, [0, 1], [0, lineHeight]);

  return (
    <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="">
    <div
      ref={containerRef}
      className="bg-[var(--card-bg)] p-6 rounded-lg shadow-md relative"
    >
      <h2 className="text-3xl font-bold mb-8 text-[var(--headline)] text-start">
        Resume
      </h2>

      <div className="relative max-w-3xl mx-auto mb-8">
        {/* Left vertical line */}
        <div
          ref={lineRef}
          className="absolute left-3 top-0 bottom-0 w-[3px] bg-[var(--accent)]"
        />

        {/* Progress marker */}
        <motion.div
          style={{ top: markerY }}
          className="absolute left-[6px] w-4 h-4 bg-[var(--accent)] 
                     rounded-full border-2 border-white z-10"
        />

        <ul className="space-y-16 relative pl-10">
          {/* Experience */}
          <motion.li
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="grid items-center gap-2 mb-3">
              <span className="text-sm text-gray-400">Feb 2025 – May 2025</span>
              <div className="flex-none md:flex items-center gap-4 ">
                {/* Logo */}
                <Image
                  src="/logo/pelco.png"
                  alt="Pampanga Electric Cooperative I IT Department"
                  width={60}
                  height={60}
                  className="rounded-full flex-shrink-0"
                />

                {/* Content */}
                <div className="mt-2 md:mt-0">
                  <p className="font-semibold flex items-center gap-2">
                    <FaBriefcase size={16} className="text-[var(--accent)]" /> IT Intern
                  </p>
                  <p className="text-sm text-gray-400">
                    Pampanga Electric Cooperative I – IT Department
                  </p>
                </div>
              </div>
              
            </div>
            {/* Bullet points with spacing */}
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                    <li>Provided technical support for hardware and software issues within the office environment</li>
                    <li>Supported the IT team in updating internal documentation and asset inventory</li>
                    <li>Assisted in network troubleshooting and system maintenance tasks</li>
                  </ul>
          </motion.li>

          {/* Education - College */}
          <motion.li
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="grid items-center gap-2">
              <span className="text-sm text-gray-400">2021–2025</span>
              <div className="flex-none md:flex items-center gap-4">
                <Image
                  src="/logo/dhvsu.png"
                  alt="Don Honorio Ventura State University"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div  className="mt-2 md:mt-0">
                  <p className="font-semibold flex items-center gap-2">
                    <FaBook size={16} className="text-[var(--accent)]" /> BS in Information Technology
                  </p>
                  <p className="text-sm text-gray-400">
                    Don Honorio Ventura State University – Candaba Campus 
                  </p>
                </div>
              </div>
            </div>

            {/* Education milestones */}
            <ul className="mt-3 space-y-2 text-sm text-gray-500">
              <li className="flex items-start">
                <span className="w-20 font-semibold text-[var(--accent)]">2025</span>
                <span>🎓 Graduated</span>
              </li>
              <li className="flex items-start">
                <span className="w-20 font-semibold">2024</span>
                <span>
                  📌 Capstone Project: <span className="font-medium">AutoCompost</span> — The Design and Development of an Automated Composting Machine with Advanced Features to Transform Vegetable Waste into Organic Fertilizer
                </span>
              </li>
              
            </ul>
          </motion.li>

          {/* Activity - Hack4Gov */}
          <motion.li
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="grid md:flex items-center gap-2">
              <span className="text-sm text-gray-400">Sep 2023</span>
              <p className="font-semibold flex items-center gap-2">
                <FaUserFriends className="text-[var(--accent)]" /> Hack4Gov 2023 –
                Participant
              </p>
            </div>
          </motion.li>

          {/* Activity - Code Wars */}
          <motion.li
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="grid md:flex items-center gap-2">
              <span className="text-sm text-gray-400">May 2023</span>
              <p className="font-semibold flex items-center gap-2">
                <FaUserFriends className="text-[var(--accent)]" /> Code Wars –
                Participant
              </p>
            </div>
          </motion.li>

          <motion.li
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="relative">

            <div className="grid md:flex items-center gap-2">
                  <span className="text-sm text-gray-400">2021</span>
                  <span className="font-semibold">📝 Enrolled in BSIT Program</span>
            </div>
          </motion.li>

          {/* Education - Senior High */}
          <motion.li
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="grid items-center gap-2">
              <span className="text-sm text-gray-400">2019–2021</span>
              <div className="flex-none md:flex items-center gap-4">
                <Image
                  src="/logo/embhs.png"
                  alt="Emigdio A. Bondoc High School"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div className="mt-2 md:mt-0">
                  <p className="font-semibold flex items-center gap-2">
                    <FaBook size={16} className="text-[var(--accent)]" /> Senior High School – GAS</p>
                  <p className="text-sm text-gray-400">
                    Emigdio A. Bondoc High School
                  </p>
                </div>
              </div>
            </div>
          </motion.li>

        </ul>
      </div>
      <Skills/>
    </div>
    
    </motion.div>
  );
}

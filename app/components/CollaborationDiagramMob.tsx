"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, Variants } from "framer-motion";
import {
  Lightbulb,
  Mountain,
  Settings,
  Coins,
  Laptop,
  Factory,
  Users,
  Handshake,
} from "lucide-react";

interface PathData {
  id: string;
  d: string;
  isBridge?: boolean;
}

export default function CollaborationDiagramMob() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const leftHubRef = useRef<HTMLDivElement | null>(null);
  const rightHubRef = useRef<HTMLDivElement | null>(null);

  const leftItemRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const rightItemRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const [paths, setPaths] = useState<PathData[]>([]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const pathVariants: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 0.8,
      transition: { duration: 1, ease: "easeInOut", delay: 0.5 },
    },
  };

  const updatePaths = () => {
    if (!containerRef.current || !leftHubRef.current || !rightHubRef.current)
      return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const leftHubRect = leftHubRef.current.getBoundingClientRect();
    const rightHubRect = rightHubRef.current.getBoundingClientRect();

    const leftHubCenter = {
      x: leftHubRect.left + leftHubRect.width / 2 - containerRect.left,
      y: leftHubRect.top + leftHubRect.height / 2 - containerRect.top,
    };

    const rightHubCenter = {
      x: rightHubRect.left + rightHubRect.width / 2 - containerRect.left,
      y: rightHubRect.top + rightHubRect.height / 2 - containerRect.top,
    };

    const newPaths: PathData[] = [];

    // 1. Path connecting Left Hub & Right Hub
    const bridgePath = `M ${leftHubRect.right - containerRect.left} ${
      leftHubCenter.y
    } L ${rightHubRect.left - containerRect.left} ${rightHubCenter.y}`;
    newPaths.push({ id: "bridge", d: bridgePath, isBridge: true });

    // 2. Paths from Left Items to Left Hub
    Object.entries(leftItemRefs.current).forEach(([id, elem]) => {
      if (elem) {
        const itemRect = elem.getBoundingClientRect();
        const startX = itemRect.right - containerRect.left;
        const startY = itemRect.top + itemRect.height / 2 - containerRect.top;
        const endX = leftHubRect.left - containerRect.left;
        const endY = leftHubCenter.y;

        const controlX1 = startX + (endX - startX) * 0.5;
        const controlX2 = startX + (endX - startX) * 0.5;

        const d = `M ${startX} ${startY} C ${controlX1} ${startY}, ${controlX2} ${endY}, ${endX} ${endY}`;
        newPaths.push({ id, d });
      }
    });

    // 3. Paths from Right Hub to Right Items
    Object.entries(rightItemRefs.current).forEach(([id, elem]) => {
      if (elem) {
        const itemRect = elem.getBoundingClientRect();
        const startX = rightHubRect.right - containerRect.left;
        const startY = rightHubCenter.y;
        const endX = itemRect.left - containerRect.left;
        const endY = itemRect.top + itemRect.height / 2 - containerRect.top;

        const controlX1 = startX + (endX - startX) * 0.5;
        const controlX2 = startX + (endX - startX) * 0.5;

        const d = `M ${startX} ${startY} C ${controlX1} ${startY}, ${controlX2} ${endY}, ${endX} ${endY}`;
        newPaths.push({ id, d });
      }
    });

    setPaths(newPaths);
  };

  useEffect(() => {
    updatePaths();
    window.addEventListener("resize", updatePaths);
    return () => window.removeEventListener("resize", updatePaths);
  }, []);

  return (
    <section className="relative min-h-screen bg-[#0B1120] text-slate-200 py-20 px-4 md:px-12 flex flex-col items-center justify-center overflow-hidden">
      <motion.div
        ref={containerRef}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-7xl w-full mx-auto flex flex-col items-center relative z-10"
      >
        {/* SVG Path Connections (Visible on lg screens and up) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden lg:block">
          {paths.map((path) => (
            <motion.path
              key={path.id}
              d={path.d}
              fill="none"
              stroke="#FFFFFF"
              strokeWidth={path.isBridge ? "3" : "2"}
              strokeDasharray={path.isBridge ? "6 6" : "none"}
              variants={pathVariants}
              className="opacity-70"
            />
          ))}
        </svg>

        {/* Section Title */}
        <motion.div variants={itemVariants} className="mb-14">
          <span className="inline-block px-6 py-2.5 rounded-full text-[#2a8aba] font-bold text-sm tracking-wider">
            Our Partners
          </span>
        </motion.div>

        {/* Main Diagram Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 w-full items-center justify-between gap-10 lg:gap-4 relative z-10">
          
          {/* Left Column */}
          <div className="lg:col-span-4 flex flex-col gap-6 items-center lg:items-start">
            <motion.div
              ref={(el) => {
                leftItemRefs.current["ideas"] = el;
              }}
              variants={itemVariants}
              whileHover={{ scale: 1.03, x: 5 }}
              className="flex items-center gap-3 bg-white text-[#2a8aba] px-6 py-3 rounded-full shadow-lg w-64 backdrop-blur-md"
            >
              <div className="w-8 h-8 rounded-full flex items-center justify-center">
                <Lightbulb className="w-4 h-4" />
              </div>
              <span className="text-sm font-semibold tracking-wide">Ideas</span>
            </motion.div>

            <motion.div
              ref={(el) => {
                leftItemRefs.current["courage"] = el;
              }}
              variants={itemVariants}
              whileHover={{ scale: 1.03, x: 5 }}
              className="flex items-center gap-3 bg-white text-[#2a8aba] px-6 py-3 rounded-full shadow-lg w-64 backdrop-blur-md"
            >
              <div className="w-8 h-8 rounded-full flex items-center justify-center">
                <Mountain className="w-4 h-4" />
              </div>
              <span className="text-sm font-semibold tracking-wide">
                Courage
              </span>
            </motion.div>

            <motion.div
              ref={(el) => {
                leftItemRefs.current["skills"] = el;
              }}
              variants={itemVariants}
              whileHover={{ scale: 1.03, x: 5 }}
              className="flex items-center gap-3 bg-white text-[#2a8aba] px-6 py-3 rounded-full shadow-lg w-64 backdrop-blur-md"
            >
              <div className="w-8 h-8 rounded-full flex items-center justify-center">
                <Settings className="w-4 h-4" />
              </div>
              <span className="text-sm font-semibold tracking-wide">
                Skills
              </span>
            </motion.div>
          </div>

          {/* Center Column - Central Hubs */}
          <div className="lg:col-span-4 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0 lg:gap-0 my-6 lg:my-0">
            <motion.div
              ref={leftHubRef}
              variants={itemVariants}
              className="relative h-48 w-48 sm:h-56 sm:w-56 rounded-full border-2 border-slate-600 bg-[#0B1120] flex flex-col items-center justify-center p-4 text-center z-10"
            >
              <h3 className="text-xs sm:text-sm font-bold tracking-widest text-[#2a8aba] uppercase">
                ICT CLUB OF
              </h3>
              <h2 className="text-sm sm:text-base font-extrabold text-white tracking-wider">
                KALIKA
              </h2>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center px-2 py-3 border-y border-slate-600 my-4 md:my-0 z-10 bg-[#0B1120]"
            >
              <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] text-white uppercase">
                COLLABORATION
              </span>
            </motion.div>

            <motion.div
              ref={rightHubRef}
              variants={itemVariants}
              className="relative h-48 w-48 sm:h-56 sm:w-56 rounded-full border-2 border-slate-600 bg-[#0B1120] flex flex-col items-center justify-center p-4 text-center z-10"
            >
              <div className="text-[#2a8aba] mb-1">
                <Handshake className="w-8 h-8" />
              </div>
              <h3 className="text-xs sm:text-sm font-extrabold tracking-widest text-white uppercase mt-1">
                INDUSTRY
              </h3>
              <h3 className="text-xs sm:text-sm font-extrabold tracking-widest text-white uppercase">
                PARTNERS
              </h3>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-4 flex flex-col gap-6 items-center lg:items-end">
            <motion.div
              ref={(el) => {
                rightItemRefs.current["funding"] = el;
              }}
              variants={itemVariants}
              whileHover={{ scale: 1.03, x: -5 }}
              className="flex items-center justify-end gap-3 bg-white text-[#2a8aba] px-6 py-3 rounded-full shadow-lg w-64 backdrop-blur-md"
            >
              <span className="text-sm font-semibold tracking-wide">
                Funding
              </span>
              <div className="w-8 h-8 rounded-full bg-[#05F2DB]/10 flex items-center justify-center">
                <Coins className="w-4 h-4" />
              </div>
            </motion.div>

            <motion.div
              ref={(el) => {
                rightItemRefs.current["tools"] = el;
              }}
              variants={itemVariants}
              whileHover={{ scale: 1.03, x: -5 }}
              className="flex items-center justify-end gap-3 bg-white text-[#2a8aba] px-6 py-3 rounded-full shadow-lg w-64 backdrop-blur-md"
            >
              <span className="text-sm font-semibold tracking-wide">
                Tools & Technology
              </span>
              <div className="w-8 h-8 rounded-full bg-[#05F2DB]/10 flex items-center justify-center">
                <Laptop className="w-4 h-4" />
              </div>
            </motion.div>

            <motion.div
              ref={(el) => {
                rightItemRefs.current["experience"] = el;
              }}
              variants={itemVariants}
              whileHover={{ scale: 1.03, x: -5 }}
              className="flex items-center justify-end gap-3 bg-white text-[#2a8aba] px-6 py-3 rounded-full shadow-lg w-64 backdrop-blur-md"
            >
              <span className="text-sm font-semibold tracking-wide">
                Industry Experience
              </span>
              <div className="w-8 h-8 rounded-full bg-[#05F2DB]/10 flex items-center justify-center">
                <Factory className="w-4 h-4" />
              </div>
            </motion.div>

            <motion.div
              ref={(el) => {
                rightItemRefs.current["mentorship"] = el;
              }}
              variants={itemVariants}
              whileHover={{ scale: 1.03, x: -5 }}
              className="flex items-center justify-end gap-3 bg-white text-[#2a8aba] px-6 py-3 rounded-full shadow-lg w-64 backdrop-blur-md"
            >
              <span className="text-sm font-semibold tracking-wide">
                Mentorship
              </span>
              <div className="w-8 h-8 rounded-full bg-[#05F2DB]/10 flex items-center justify-center">
                <Users className="w-4 h-4" />
              </div>
            </motion.div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
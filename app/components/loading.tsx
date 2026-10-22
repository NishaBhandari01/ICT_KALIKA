
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function LoadingPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <main
      role="status"
      aria-label="Loading ICT Club of Kalika"
      className="fixed inset-0 z-[99999] flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#070C18] text-white"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(5,242,219,0.08),transparent_55%)]" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center justify-center px-4 text-center"
      >
        {/* Animated logo */}
        <motion.div
          variants={itemVariants}
          className="relative flex h-[260px] w-[260px] items-center justify-center sm:h-[340px] sm:w-[340px]"
        >
          {/* Outer orbit */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-[230px] w-[230px] rounded-full border border-dotted border-[#3bb6d5]/30 sm:h-[300px] sm:w-[300px]"
          />

          {/* Inner orbit */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-[190px] w-[190px] rounded-full border border-dashed border-[#05F2DB]/40 sm:h-[250px] sm:w-[250px]"
          />

          {/* Glow */}
          <motion.div
            animate={{
              scale: [0.9, 1.1, 0.9],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute h-36 w-36 rounded-full bg-[#05F2DB]/20 blur-2xl sm:h-44 sm:w-44"
          />

          {/* Logo */}
          <motion.div
            animate={{ scale: [1, 1.03, 1] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative h-32 w-32 overflow-hidden rounded-full border-2 border-[#05F2DB]/60 bg-[#0B1120] p-2 shadow-[0_0_40px_rgba(5,242,219,0.3)] sm:h-40 sm:w-40"
          >
            <Image
              src="/logo.avif"
              alt="ICT Club of Kalika logo"
              fill
              priority
              sizes="(max-width: 640px) 128px, 160px"
              className="rounded-full object-contain p-1"
            />
          </motion.div>
        </motion.div>

        {/* Club name */}
        <motion.h1
          variants={itemVariants}
          className="mt-2 bg-gradient-to-r from-[#05F2DB] via-[#3bb6d5] to-[#4d9bcf] bg-clip-text text-2xl font-bold uppercase tracking-wider text-transparent drop-shadow-sm sm:text-3xl"
        >
          ICT Club of Kalika
        </motion.h1>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="mt-3 flex items-center gap-2 text-sm font-medium tracking-wide text-gray-300 sm:text-base"
        >
          <span>Innovate</span>
          <span className="text-[#05F2DB]">•</span>
          <span>Educate</span>
          <span className="text-[#05F2DB]">•</span>
          <span>Inspire</span>
        </motion.p>

        {/* Loading indicator */}
        <motion.div
          variants={itemVariants}
          className="mt-8 flex flex-col items-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "linear",
            }}
            className="h-10 w-10 rounded-full border-2 border-transparent border-r-[#3bb6d5] border-t-[#05F2DB]"
          />

          <motion.p
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mt-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#3bb6d5]"
          >
            Loading...
          </motion.p>
        </motion.div>
      </motion.div>
    </main>
  );
}

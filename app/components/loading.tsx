
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


      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center justify-center px-4 text-center"
      >

        <motion.div
          variants={itemVariants}
          className="relative flex h-[280px] w-[280px] items-center justify-center sm:h-[360px] sm:w-[360px]"
        >
    

          {[0, 120, 240].map((angle, index) => (
            <motion.div
              key={angle}
              className="absolute h-[230px] w-[230px] sm:h-[295px] sm:w-[295px]"
              animate={{ rotate: 360 }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
                delay: index * -6,
              }}
            >
              <div
                className={`absolute left-1/2 top-0 h-1.5 w-1.5 rounded-full ${index === 1 ? "bg-cyan-300" : "bg-blue-300"
                  }`}
              />
            </motion.div>
          ))}


          <motion.div
            className="relative z-10 h-32 w-32 overflow-hidden rounded-full  bg-[#0B1120] sm:h-40 sm:w-40"
            animate={{
              boxShadow: [
                "0 0 20px rgba(59,130,246,0.15)",
                "0 0 38px rgba(6,182,212,0.3)",
                "0 0 20px rgba(59,130,246,0.15)",
              ],
              y: [0, -4, 0],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src="/logo.avif"
              alt="ICT Club of Kalika logo"
              fill
              priority
              sizes="(max-width: 640px) 128px, 160px"
              className="rounded-full object-contain "
            />
          </motion.div>
        </motion.div>


        <motion.h1
          variants={itemVariants}
          className="mt-2 bg-white bg-clip-text text-2xl font-bold uppercase tracking-wider text-transparent drop-shadow-sm sm:text-3xl"
        >
          ICT Club of Kalika
        </motion.h1>


        <motion.p
          variants={itemVariants}
          className="mt-3 flex items-center gap-2 text-sm font-medium tracking-wide text-[#105F58] sm:text-base"
        >
         Innovate. Inspire. Impact
        </motion.p>

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
            className="h-10 w-10 rounded-full border-2 border-transparent border-r-gray-400 border-t-white"
          />

          <motion.p
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mt-4 text-xs font-semibold uppercase tracking-[0.25em] text-white"
          >
            Loading...
          </motion.p>
        </motion.div>
      </motion.div>
    </main>
  );
}

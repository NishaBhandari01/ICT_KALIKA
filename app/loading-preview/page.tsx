"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

export default function LoadingPreviewPage() {

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
        },
    },
};

    return (
        <main className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#070C18] text-white">



            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 flex flex-col items-center justify-center px-4 text-center"
            >

                <motion.div variants={itemVariants} className="relative flex h-[300px] w-[300px] sm:h-[360px] sm:w-[360px] items-center justify-center">
                    

                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        className="absolute h-[210px] w-[210px] sm:h-[250px] sm:w-[250px] rounded-full border border-dashed border-[#05F2DB]/30"
                    />
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        className="absolute h-[250px] w-[250px] sm:h-[300px] sm:w-[300px] rounded-full border border-dotted border-[#3bb6d5]/20"
                    />


                    <motion.div
                        animate={{ scale: [0.95, 1.05, 0.95], opacity: [0.4, 0.7, 0.4] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute h-36 w-36 sm:h-44 sm:w-44 rounded-full bg-[#05F2DB]/20 blur-xl"
                    />


                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="relative h-32 w-32 sm:h-40 sm:w-40 overflow-hidden rounded-full bg-[#0B1120] p-2 shadow-[0_0_40px_rgba(5,242,219,0.3)] backdrop-blur-md"
                    >
                        <Image
                            src="/logo.avif"
                            alt="ICT Club of Kalika logo"
                            fill
                            priority
                            sizes="160px"
                            className="rounded-full object-contain p-1"
                        />
                    </motion.div>
                </motion.div>


                <motion.h1 
                    variants={itemVariants}
                    className="mt-2 text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#05F2DB] via-[#3bb6d5] to-[#4d9bcfaa] tracking-wider uppercase drop-shadow-sm"
                >
                    ICT Club of Kalika
                </motion.h1>

                <motion.p 
                    variants={itemVariants}
                    className="mt-3 text-sm sm:text-base font-medium tracking-wide text-gray-300 flex items-center gap-2"
                >
                    <span>Innovate</span>
                    <span className="text-[#05F2DB]">•</span>
                    <span>Educate</span>
                    <span className="text-[#05F2DB]">•</span>
                    <span>Inspire</span>
                </motion.p>

                <motion.div variants={itemVariants} className="mt-8 flex flex-col items-center">
                    <div className="relative flex items-center justify-center">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
                            className="h-10 w-10 rounded-full border-2 border-transparent border-t-[#05F2DB] border-r-[#3bb6d5]"
                        />

                    </div>
                    <motion.h2
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                        className="mt-4 text-xs tracking-widest uppercase font-semibold text-[#3bb6d5]"
                    >
                        Loading...
                    </motion.h2>
                </motion.div>
            </motion.div>
        </main>
    );
}
"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Lightbulb, Mountain, Settings, Coins, Laptop, Factory, Users, Handshake } from "lucide-react";

export default function CollaborationDiagram() {
    // Animation variants
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
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
        },
    };

    return (
        <section className="relative min-h-screen bg-[#0B1120] text-slate-200 py-20 px-4 md:px-12 flex flex-col items-center justify-center overflow-hidden">



            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="max-w-7xl w-full mx-auto flex flex-col items-center relative z-10"
            >
   
                <motion.div variants={itemVariants} className="mb-14">
                    <span className="inline-block px-6 py-2.5 rounded-full bg-[#0B1120] border border-[#05F2DB]/30 text-white font-bold text-sm tracking-wider shadow-[0_0_20px_rgba(5,242,219,0.15)]">
                        Our Partners
                    </span>
                </motion.div>

         
                <div className="grid grid-cols-1 lg:grid-cols-12 w-full items-center justify-between gap-10 lg:gap-4">
                    
                    <div className="lg:col-span-4 flex flex-col gap-6 items-center lg:items-start">

                        <motion.div variants={itemVariants} whileHover={{ scale: 1.03, x: 5 }} className="flex items-center gap-3 bg-[#0B1120]/90 border border-slate-700/80 px-6 py-3 rounded-full shadow-lg w-64 backdrop-blur-md">
                            <div className="w-8 h-8 rounded-full bg-[#05F2DB]/10 flex items-center justify-center text-[#05F2DB]">
                                <Lightbulb className="w-4 h-4" />
                            </div>
                            <span className="text-sm font-semibold tracking-wide text-white">Ideas</span>
                        </motion.div>


                        <motion.div variants={itemVariants} whileHover={{ scale: 1.03, x: 5 }} className="flex items-center gap-3 bg-[#0B1120]/90 border border-slate-700/80 px-6 py-3 rounded-full shadow-lg w-64 backdrop-blur-md">
                            <div className="w-8 h-8 rounded-full bg-[#05F2DB]/10 flex items-center justify-center text-[#05F2DB]">
                                <Mountain className="w-4 h-4" />
                            </div>
                            <span className="text-sm font-semibold tracking-wide text-white">Courage</span>
                        </motion.div>

                     
                        <motion.div variants={itemVariants} whileHover={{ scale: 1.03, x: 5 }} className="flex items-center gap-3 bg-[#0B1120]/90 border border-slate-700/80 px-6 py-3 rounded-full shadow-lg w-64 backdrop-blur-md">
                            <div className="w-8 h-8 rounded-full bg-[#05F2DB]/10 flex items-center justify-center text-[#05F2DB]">
                                <Settings className="w-4 h-4" />
                            </div>
                            <span className="text-sm font-semibold tracking-wide text-white">Skills</span>
                        </motion.div>
                    </div>

     
                    <div className="lg:col-span-4 flex flex-col md:flex-row items-center justify-center gap-4 my-6 lg:my-0">
  
                        <motion.div 
                            variants={itemVariants}
                            className="relative h-48 w-48 sm:h-56 sm:w-56 rounded-full border-2 border-[#05F2DB]/40 bg-[#0B1120] flex flex-col items-center justify-center p-4 shadow-[0_0_40px_rgba(5,242,219,0.2)] text-center"
                        >
                            <h3 className="text-xs sm:text-sm font-bold tracking-widest text-[#05F2DB] uppercase">ICT CLUB OF</h3>
                            <span className="text-xs text-slate-400 font-semibold my-1">ESTD • 2079</span>
                            <h2 className="text-sm sm:text-base font-extrabold text-white tracking-wider">KALIKA</h2>
                        </motion.div>

                        <motion.div variants={itemVariants} className="flex flex-col items-center px-2 py-3 bg-gradient-to-r from-[#05F2DB]/10 via-[#05F2DB]/20 to-[#05F2DB]/10 border-y border-[#05F2DB]/40 my-4 md:my-0">
                            <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] text-[#05F2DB] uppercase">
                                COLLABORATION
                            </span>
                        </motion.div>

                        <motion.div 
                            variants={itemVariants}
                            className="relative h-48 w-48 sm:h-56 sm:w-56 rounded-full border-2 border-[#3bb6d5]/40 bg-[#0B1120] flex flex-col items-center justify-center p-4 shadow-[0_0_40px_rgba(59,182,213,0.2)] text-center"
                        >
                          
                            <div className="text-[#05F2DB] mb-1">
                                <Handshake className="w-8 h-8" />
                            </div>
                            <h3 className="text-xs sm:text-sm font-extrabold tracking-widest text-white uppercase mt-1">INDUSTRY</h3>
                            <h3 className="text-xs sm:text-sm font-extrabold tracking-widest text-white uppercase">PARTNERS</h3>
                        </motion.div>
                    </div>

                    <div className="lg:col-span-4 flex flex-col gap-6 items-center lg:items-end">
                        <motion.div variants={itemVariants} whileHover={{ scale: 1.03, x: -5 }} className="flex items-center justify-end gap-3 bg-[#0B1120]/90 border border-slate-700/80 px-6 py-3 rounded-full shadow-lg w-64 backdrop-blur-md">
                            <span className="text-sm font-semibold tracking-wide text-white">Funding</span>
                            <div className="w-8 h-8 rounded-full bg-[#05F2DB]/10 flex items-center justify-center text-[#05F2DB]">
                                <Coins className="w-4 h-4" />
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants} whileHover={{ scale: 1.03, x: -5 }} className="flex items-center justify-end gap-3 bg-[#0B1120]/90 border border-slate-700/80 px-6 py-3 rounded-full shadow-lg w-64 backdrop-blur-md">
                            <span className="text-sm font-semibold tracking-wide text-white">Tools & Technology</span>
                            <div className="w-8 h-8 rounded-full bg-[#05F2DB]/10 flex items-center justify-center text-[#05F2DB]">
                                <Laptop className="w-4 h-4" />
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants} whileHover={{ scale: 1.03, x: -5 }} className="flex items-center justify-end gap-3 bg-[#0B1120]/90 border border-slate-700/80 px-6 py-3 rounded-full shadow-lg w-64 backdrop-blur-md">
                            <span className="text-sm font-semibold tracking-wide text-white">Industry Experience</span>
                            <div className="w-8 h-8 rounded-full bg-[#05F2DB]/10 flex items-center justify-center text-[#05F2DB]">
                                <Factory className="w-4 h-4" />
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants} whileHover={{ scale: 1.03, x: -5 }} className="flex items-center justify-end gap-3 bg-[#0B1120]/90 border border-slate-700/80 px-6 py-3 rounded-full shadow-lg w-64 backdrop-blur-md">
                            <span className="text-sm font-semibold tracking-wide text-white">Mentorship</span>
                            <div className="w-8 h-8 rounded-full bg-[#05F2DB]/10 flex items-center justify-center text-[#05F2DB]">
                                <Users className="w-4 h-4" />
                            </div>
                        </motion.div>
                    </div>

                </div>
            </motion.div>
        </section>
    );
}
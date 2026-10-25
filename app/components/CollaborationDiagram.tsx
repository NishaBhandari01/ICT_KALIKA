"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Lightbulb, Mountain, Settings, Coins, Laptop, Factory, Users, Handshake } from "lucide-react";

export default function CollaborationDiagram() {
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
                    <span className="inline-block px-6 py-2.5 rounded-full bg-white text-[#2a8aba] font-bold text-sm tracking-wider ">
                        Our Partners
                    </span>
                </motion.div>


                <div className="grid grid-cols-1 lg:grid-cols-12 w-full items-center justify-between gap-10 lg:gap-4">

                    <div className="lg:col-span-4 flex flex-col gap-6 items-center lg:items-start">

                        <motion.div variants={itemVariants} whileHover={{ scale: 1.03, x: 5 }} className="flex items-center gap-2 bg-white text-[#2a8aba] px-6 py-3 rounded-full shadow-lg w-64 backdrop-blur-md">
                            <div className="w-8 h-8 rounded-full  flex items-center justify-center ">
                                <Lightbulb className="w-4 h-4" />
                            </div>
                            <span className="text-sm font-semibold tracking-wide ">Ideas</span>
                        </motion.div>


                        <motion.div variants={itemVariants} whileHover={{ scale: 1.03, x: 5 }} className="flex items-center gap-3 bg-white text-[#2a8aba] px-6 py-3 rounded-full shadow-lg w-64 backdrop-blur-md">
                            <div className="w-8 h-8 rounded-full flex items-center justify-center ">
                                <Mountain className="w-4 h-4" />
                            </div>
                            <span className="text-sm font-semibold tracking-wide ">Courage</span>
                        </motion.div>


                        <motion.div variants={itemVariants} whileHover={{ scale: 1.03, x: 5 }} className="flex items-center gap-3 bg-white text-[#2a8aba]bg-white text-[#2a8aba] px-6 py-3 rounded-full shadow-lg w-64 backdrop-blur-md">
                            <div className="w-8 h-8 rounded-full  flex items-center justify-center ">
                                <Settings className="w-4 h-4" />
                            </div>
                            <span className="text-sm font-semibold tracking-wide">Skills</span>
                        </motion.div>
                    </div>


                    <div className="lg:col-span-4 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0 lg:gap-0 my-6 lg:my-0">

                        <motion.div
                            variants={itemVariants}
                            className="relative h-48 w-48 sm:h-56 sm:w-56 rounded-full border-2 border-slate-600 bg-[#0B1120] flex flex-col items-center justify-center p-4 text-center"
                        >
                            <h3 className="text-xs sm:text-sm font-bold tracking-widest text-[#2a8aba] uppercase">ICT CLUB OF</h3>
                            <h2 className="text-sm sm:text-base font-extrabold text-white tracking-wider">KALIKA</h2>
                         
                        </motion.div>

                        <motion.div variants={itemVariants} className="flex flex-col items-center px-2 py-3 border-y border-slate-600 my-4 md:my-0">
                            <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] text-white uppercase">
                                COLLABORATION
                            </span>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="relative h-48 w-48 sm:h-56 sm:w-56 rounded-full border-2 border-slate-600 bg-[#0B1120] flex flex-col items-center justify-center p-4  text-center"
                        >

                            <div className="text-[#2a8aba] mb-1">
                                <Handshake className="w-8 h-8" />
                            </div>
                            <h3 className="text-xs sm:text-sm font-extrabold tracking-widest text-white uppercase mt-1">INDUSTRY</h3>
                            <h3 className="text-xs sm:text-sm font-extrabold tracking-widest text-white uppercase">PARTNERS</h3>
                        </motion.div>
                    </div>

                    <div className="lg:col-span-4 flex flex-col gap-6 items-center lg:items-end">
                        <motion.div variants={itemVariants} whileHover={{ scale: 1.03, x: -5 }} className="flex items-center justify-end gap-3 bg-white text-[#2a8aba] px-6 py-3 rounded-full shadow-lg w-64 backdrop-blur-md">
                            <span className="text-sm font-semibold tracking-wide ">Funding</span>
                            <div className="w-8 h-8 rounded-full bg-[#05F2DB]/10 flex items-center justify-center ">
                                <Coins className="w-4 h-4" />
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants} whileHover={{ scale: 1.03, x: -5 }} className="flex items-center justify-end gap-3 bg-white text-[#2a8aba] px-6 py-3 rounded-full shadow-lg w-64 backdrop-blur-md">
                            <span className="text-sm font-semibold tracking-wide ">Tools & Technology</span>
                            <div className="w-8 h-8 rounded-full bg-[#05F2DB]/10 flex items-center justify-center ">
                                <Laptop className="w-4 h-4" />
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants} whileHover={{ scale: 1.03, x: -5 }} className="flex items-center justify-end gap-3 bg-white text-[#2a8aba] px-6 py-3 rounded-full shadow-lg w-64 backdrop-blur-md">
                            <span className="text-sm font-semibold tracking-wide ">Industry Experience</span>
                            <div className="w-8 h-8 rounded-full bg-[#05F2DB]/10 flex items-center justify-center ">
                                <Factory className="w-4 h-4" />
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants} whileHover={{ scale: 1.03, x: -5 }} className="flex items-center justify-end gap-3 bg-white text-[#2a8aba] px-6 py-3 rounded-full shadow-lg w-64 backdrop-blur-md">
                            <span className="text-sm font-semibold tracking-wide ">Mentorship</span>
                            <div className="w-8 h-8 rounded-full bg-[#05F2DB]/10 flex items-center justify-center ">
                                <Users className="w-4 h-4" />
                            </div>
                        </motion.div>
                    </div>

                </div>
            </motion.div>
        </section>
    );
}
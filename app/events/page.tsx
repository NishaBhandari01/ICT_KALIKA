"use client"
import React from 'react'
import Image from 'next/image';
import { ArrowUpRight, MapPin, } from 'lucide-react';
import { clubEvents } from '@/data/event-card-data';
import { useRouter } from 'next/navigation';
import { motion, Variants } from "framer-motion";
import { Users, Calendar, Trophy, GraduationCap, Code, BookOpen } from "lucide-react";

interface NodeCardProps {
    label: string;
    icon: React.ReactNode;
}


const IctKalikaNetwork = () => {
    const router = useRouter();

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.1,
            },
        },
    };

    const centerLogoVariants: Variants = {
        hidden: { opacity: 0, scale: 0.5 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
        },
    };

    const topNodeVariants: Variants = {
        hidden: { opacity: 0, y: -30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    const bottomNodeVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    const leftNodeVariants: Variants = {
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    const rightNodeVariants: Variants = {
        hidden: { opacity: 0, x: 30 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <div className='bg-[#0B1120]'>
            <section className="mb-10 text-[#ebe6e2] px-4 py-20 overflow-hidden bg-[#0B1120]">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="relative w-full max-w-4xl mx-auto min-h-[auto] md:min-h-[450px] flex flex-col md:flex-row items-center justify-center p-4 text-white rounded-2xl"
                >
            
                    <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block"
                        viewBox="0 0 800 600"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M 400 300 C 380 200, 280 140, 220 140"
                            stroke="#FFFFFF"
                            strokeWidth="1.5"
                            strokeDasharray="4 4"
                            className="opacity-40"
                        />
                        <path
                            d="M 400 300 C 400 220, 400 130, 400 90"
                            stroke="#FFFFFF"
                            strokeWidth="1.5"
                            strokeDasharray="4 4"
                            className="opacity-40"
                        />
                        <path
                            d="M 400 300 C 420 200, 520 140, 580 140"
                            stroke="#FFFFFF"
                            strokeWidth="1.5"
                            strokeDasharray="4 4"
                            className="opacity-40"
                        />
                        <path
                            d="M 400 300 C 300 350, 220 400, 220 440"
                            stroke="#FFFFFF"
                            strokeWidth="1.5"
                            strokeDasharray="4 4"
                            className="opacity-40"
                        />
                        <path
                            d="M 400 300 C 400 380, 400 440, 400 480"
                            stroke="#FFFFFF"
                            strokeWidth="1.5"
                            strokeDasharray="4 4"
                            className="opacity-40"
                        />
                        <path
                            d="M 400 300 C 500 350, 580 400, 580 440"
                            stroke="#FFFFFF"
                            strokeWidth="1.5"
                            strokeDasharray="4 4"
                            className="opacity-40"
                        />
                    </svg>

                    <div className="flex md:hidden flex-col items-center gap-5 w-full py-6">
                        <motion.div variants={topNodeVariants} className="flex flex-wrap justify-center gap-3 w-full">
                            <NodeCard label="Community" icon={<Users className="w-4 h-4" />} />
                            <NodeCard label="Events" icon={<Calendar className="w-4 h-4" />} />
                            <NodeCard label="Hackathons" icon={<Trophy className="w-4 h-4" />} />
                        </motion.div>

                        <motion.div variants={centerLogoVariants} className="relative h-32 w-32 overflow-hidden rounded-full bg-[#0B1120] border-2 border-[#05F2DB]/60 shadow-[0_0_35px_rgba(5,242,219,0.3)] my-2">
                            <Image
                                src="/logo.avif"
                                alt="ICT Club of Kalika logo"
                                fill
                                priority
                                sizes="128px"
                                className="rounded-full object-contain p-2"
                            />
                        </motion.div>

                        <motion.div variants={bottomNodeVariants} className="flex flex-wrap justify-center gap-3 w-full">
                            <NodeCard label="Mentorship" icon={<GraduationCap className="w-4 h-4" />} />
                            <NodeCard label="Open Source" icon={<Code className="w-4 h-4" />} />
                            <NodeCard label="Workshops" icon={<BookOpen className="w-4 h-4" />} />
                        </motion.div>
                    </div>


                    <div className="hidden md:block relative w-full h-[500px]">
                        <motion.div variants={leftNodeVariants} className="absolute top-[18%] left-[16%] transform -translate-y-1/2">
                            <NodeCard label="Events" icon={<Calendar className="w-4 h-4" />} />
                        </motion.div>

                        <motion.div variants={topNodeVariants} className="absolute top-[8%] left-1/2 transform -translate-x-1/2">
                            <NodeCard label="Community" icon={<Users className="w-4 h-4" />} />
                        </motion.div>

                        <motion.div variants={rightNodeVariants} className="absolute top-[18%] right-[16%] transform -translate-y-1/2">
                            <NodeCard label="Hackathons" icon={<Trophy className="w-4 h-4" />} />
                        </motion.div>

                        <motion.div variants={centerLogoVariants} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                            <div className="relative h-44 w-44 overflow-hidden rounded-full bg-[#0B1120]  flex items-center justify-center ">
                                <Image
                                    src="/logo.avif"
                                    alt="ICT Club of Kalika logo"
                                    fill
                                    priority
                                    sizes="176px"
                                    className="rounded-full object-contain p-2.5"
                                />
                            </div>
                        </motion.div>

                        <motion.div variants={leftNodeVariants} className="absolute bottom-[18%] left-[16%] transform translate-y-1/2">
                            <NodeCard label="Mentorship" icon={<GraduationCap className="w-4 h-4" />} />
                        </motion.div>

                        <motion.div variants={bottomNodeVariants} className="absolute bottom-[8%] left-1/2 transform -translate-x-1/2">
                            <NodeCard label="Open Source" icon={<Code className="w-4 h-4" />} />
                        </motion.div>

                        <motion.div variants={rightNodeVariants} className="absolute bottom-[18%] right-[16%] transform translate-y-1/2">
                            <NodeCard label="Workshops" icon={<BookOpen className="w-4 h-4" />} />
                        </motion.div>
                    </div>
                </motion.div>
            </section>

            <section className='bg-[#0B1120] text-[#ebe6e2] px-6 py-4 pb-20'>
                <div className="max-w-7xl mx-auto space-y-26 relative z-10">

                    <div className="flex flex-col items-center gap-4 text-center">
                        <h2 className="text-3xl font-bold  tracking-tight sm:text-3xl md:text-4xl">
                            Events Organized by ICT Club of Kalika
                        </h2>

                        <p className="max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg">
                            Join us for exciting events, workshops, and competitions throughout the year.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {clubEvents.map((event) => (
                            <div key={event.id}
                                className="group relative rounded-2xl bg-[#0F172A]/70 hover:bg-[#0F172A]/95  backdrop-blur-md transition-all duration-300 hover:-translate-y-2 shadow-xl   flex flex-col justify-between overflow-hidden"
                            >
                                <div>

                                    <div className="relative w-full h-52 overflow-hidden bg-slate-900 ">
                                        <Image
                                            src={event.image}
                                            alt={event.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                                        />

                                        <div className="absolute top-3 right-3 bg-white text-gray-800 text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-md flex items-center gap-1.5 shadow-md">
                                            <Calendar className="w-4 h-4" />
                                            <span>{event.date}</span>
                                        </div>
                                    </div>


                                    <div className="p-6 space-y-4">
                                        <h3 className="text-xl font-bold capitalize text-white  transition-colors leading-snug">
                                            {event.title}
                                        </h3>

                                        <p className="text-slate-300 text-sm font-normal  line-clamp-2">
                                            {event.description}
                                        </p>

                                        <div className="space-y-4 pt-2  text-xs text-slate-400">
                                            <div className="flex items-center gap-2">
                                                <MapPin className="w-6 h-6 text-gray-400 shrink-0" />
                                                <span className="truncate text-sm font-semibold">{event.location}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Users className="w-6 h-6 text-gray-400 shrink-0" />
                                                <span className="truncate text-sm font-semibold">{event.participants}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="px-6 pb-6 pt-0">
                                    <div onClick={() => router.push(`/events/${event.id}`)} className="w-full flex items-center justify-between pt-4  text-xs font-semibold text-[#1157D7] transition-colors">
                                        <span>View Details</span>
                                        <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </div>
    )
}

export default IctKalikaNetwork


const NodeCard: React.FC<NodeCardProps> = ({ label, icon }) => {
    return (
        <div  className="flex items-center gap-1 px-4 py-2 rounded-full bg-white  backdrop-blur-md cursor-pointer  transition-all duration-300">
            <div className="w-8 h-8 rounded-lg  flex items-center justify-center text-[#2a8aba] ">
                {icon}
            </div>
            <span className="text-sm font-semibold tracking-wide text-[#2a8aba]  transition-colors">
                {label}
            </span>
        </div>
    );
};
import React from 'react'
import Image from 'next/image';
import { ArrowUpRight, Calendar, MapPin, Users } from 'lucide-react';
import { clubEvents } from '@/data/event-card-data';



const IctKalikaNetwork = () => {
    return (
        <div className='bg-[#0B1120]'>
     <section className='mb-15 text-[#ebe6e2] px-4'>
            {/* Outer wrapper: uses a responsive flex column on mobile, and a constrained relative box on md+ screens */}
            <div className="relative w-full max-w-4xl mx-auto min-h-[auto] md:min-h-[500px] flex flex-col md:flex-row items-center justify-center p-4 text-white rounded-2xl overflow-hidden">

                {/* SVG Connecting Lines (Hidden on mobile where grid layout takes over, visible on md+ screens) */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block"
                    viewBox="0 0 800 600"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M 400 300 C 380 200, 280 140, 220 140"
                        stroke="#94a3b8"
                        strokeWidth="1.5"
                        strokeDasharray="4 4"
                        className="opacity-60"
                    />
                    <path
                        d="M 400 300 C 400 220, 400 130, 400 90"
                        stroke="#94a3b8"
                        strokeWidth="1.5"
                        strokeDasharray="4 4"
                        className="opacity-60"
                    />
                    <path
                        d="M 400 300 C 420 200, 520 140, 580 140"
                        stroke="#94a3b8"
                        strokeWidth="1.5"
                        strokeDasharray="4 4"
                        className="opacity-60"
                    />
                    <path
                        d="M 400 300 C 300 350, 220 400, 220 440"
                        stroke="#94a3b8"
                        strokeWidth="1.5"
                        strokeDasharray="4 4"
                        className="opacity-60"
                    />
                    <path
                        d="M 400 300 C 400 380, 400 440, 400 480"
                        stroke="#94a3b8"
                        strokeWidth="1.5"
                        strokeDasharray="4 4"
                        className="opacity-60"
                    />
                    <path
                        d="M 400 300 C 500 350, 580 400, 580 440"
                        stroke="#94a3b8"
                        strokeWidth="1.5"
                        strokeDasharray="4 4"
                        className="opacity-60"
                    />
                </svg>

                {/* Mobile Layout: Clean Grid / Flex stack so cards never mix together */}
                <div className="flex md:hidden flex-col items-center gap-6 w-full py-6">
                    {/* Top Row Cards */}
                    <div className="flex flex-wrap justify-center gap-3 w-full">
                        <NodeCard label="Community" />
                        <NodeCard label="Events" />
                        <NodeCard label="Hackathons" />
                    </div>

                    {/* Center Logo on Mobile */}
                    <div className="relative h-32 w-32 overflow-hidden animate-pulse rounded-full bg-[#0B1120] border-2 border-cyan-500/40 shadow-[0_0_35px_#05F2DB25] my-2">
                        <Image
                            src="/logo.avif"
                            alt="ICT Club of Kalika logo"
                            fill
                            priority
                            sizes="128px"
                            className="rounded-full object-contain"
                        />
                    </div>

                    {/* Bottom Row Cards */}
                    <div className="flex flex-wrap justify-center gap-3 w-full">
                        <NodeCard label="Mentorship" />
                        <NodeCard label="Open Source" />
                        <NodeCard label="Workshops" />
                    </div>
                </div>

                {/* Desktop Layout: Your Original Absolute Positioned Network (Visible only on md+ screens) */}
                <div className="hidden md:block relative w-full h-[500px]">
                    <div className="absolute top-[18%] left-[15%] transform -translate-y-1/2">
                        <NodeCard label="Events" />
                    </div>

                    <div className="absolute top-[8%] left-1/2 transform -translate-x-1/2">
                        <NodeCard label="Community" />
                    </div>

                    <div className="absolute top-[18%] right-[15%] transform -translate-y-1/2">
                        <NodeCard label="Hackathons" />
                    </div>

                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                        <div className="relative h-44 w-44 overflow-hidden animate-pulse rounded-full bg-[#0B1120] border-2 border-cyan-500/40 shadow-[0_0_35px_#05F2DB25]">
                            <Image
                                src="/logo.avif"
                                alt="ICT Club of Kalika logo"
                                fill
                                priority
                                sizes="176px"
                                className="rounded-full object-contain"
                            />
                        </div>
                    </div>

                    <div className="absolute bottom-[18%] left-[15%] transform translate-y-1/2">
                        <NodeCard label="Mentorship" />
                    </div>

                    <div className="absolute bottom-[8%] left-1/2 transform -translate-x-1/2">
                        <NodeCard label="Open Source" />
                    </div>

                    <div className="absolute bottom-[18%] right-[15%] transform translate-y-1/2">
                        <NodeCard label="Workshops" />
                    </div>
                </div>

            </div>
        </section>
            <section className='bg-[#0B1120] text-[#ebe6e2] px-6 py-4 pb-20'>
                <div className="max-w-7xl mx-auto space-y-26 relative z-10">

                    <div className="flex flex-col items-center gap-4 text-center">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                            Events Organized by ICT Club of Kalika
                        </h2>

                        <p className="max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg">
                            Join us for exciting events, workshops, and competitions throughout the year.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {clubEvents.map((event) => (
                            <div
                                key={event.id}
                                className="group relative rounded-2xl bg-[#0F172A]/70 hover:bg-[#0F172A]/95  backdrop-blur-md transition-all duration-300 hover:-translate-y-2 shadow-xl  flex flex-col justify-between overflow-hidden"
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
                                        <h3 className="text-xl font-bold capitalize text-white group-hover:text-cyan-300 transition-colors leading-snug">
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
                                                <span  className="truncate text-sm font-semibold">{event.participants}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="px-6 pb-6 pt-0">
                                    <div className="w-full flex items-center justify-between pt-4  text-xs font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors">
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


const NodeCard: React.FC<{ label: string }> = ({ label }) => {
    return (
        <div className="relative group bg-white/95 text-slate-800 border border-slate-200/80 rounded-full px-8 py-2.5 shadow-md hover:shadow-blue-500/20 hover:border-blue-400 transition-all duration-300 cursor-pointer text-center min-w-[140px]">
            <span className="font-semibold text-sm md:text-base text-slate-800 group-hover:text-blue-600 transition-colors">
                {label}
            </span>
        </div>
    );
};
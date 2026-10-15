"use client"

import React from 'react'
import Image from 'next/image'
import {
    Award, Eye, Target,
    Users,
    ArrowRight,
    Calendar
} from 'lucide-react';
import Link from 'next/link';
import { motion } from "framer-motion";


const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1,
        },
    },
};


const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1] as const,
        },
    },
}

interface FoundationCard {
    id: string;
    title: string;
    icon: React.ReactNode;
    description: string;

}

interface ActivityItem {
    id: string;
    title: string;
    description: string;
    image: string;
    badge: string;
}

const foundationData: FoundationCard[] = [
    {
        id: 'mission',
        title: 'Our Mission',
        tagline: 'Empowering Through Tech',
        icon: <Target className="w-14 h-14 text-[#00F0FF]" />,
        description:
            'To foster innovation, inspire creativity, and create a lasting impact through technology. We provide a platform for students to explore, learn, and excel in various fields of ICT while building a strong community of tech enthusiasts.',
        accentGradient: 'from-[#00F0FF] to-[#059669]',
    },
    {
        id: 'vision',
        title: 'Our Vision',
        tagline: 'Leading Digital Future',
        icon: <Eye className="w-14 h-14 text-[#3B82F6]" />,
        description: 'To be the leading technology club that empowers students to become innovative leaders in the digital world. We envision a future where our members contribute significantly to Nepal’s technological advancement and global tech community.',
        accentGradient: 'from-[#2563EB] to-[#00F0FF]',
    },
    {
        id: 'values',
        title: 'Our Values',
        tagline: 'Core Principles',
        icon: <Award className="w-14 h-14 text-[#8B5CF6]" />,
        description:
            'Innovation, collaboration, excellence, and inclusivity. We believe in continuous learning, ethical technology use, and creating opportunities for all students regardless of their background or current skill level.',
        accentGradient: 'from-[#8B5CF6] to-[#2563EB]',
    },
];

export const activities: ActivityItem[] = [
    {
        id: 'workshops',
        title: 'Workshops & Training',
        description: 'Regular hands-on sessions on modern programming languages, web development, AI/ML, and emerging software technologies.',
        image: "/workshop.png",
        badge: 'Skill Building',
    },
    {
        id: 'competitions',
        title: 'Competitions & Hackathons',
        description: 'Organizing and participating in competitive coding contests, intense hackathons, and regional tech challenges.',
        image: "/competition.png",
        badge: 'Competitive',
    },
    {
        id: 'projects',
        title: 'Project Development',
        description: 'Collaborative real-world projects that solve actual problems while building production-ready engineering skills.',
        image: "/project_development.png",
        badge: 'Hands-on',
    },
    {
        id: 'industry',
        title: 'Industry Connections',
        description: 'Exclusive networking events with tech professionals, alumni interactions, and guest lectures from industry leaders.',
        image: "/users.png",
        badge: 'Networking',
    },
    {
        id: 'research',
        title: 'Research & Innovation',
        description: 'Supporting student-led research initiatives, experimental prototyping, and fostering an inventive engineering mindset.',
        image: "/research.png",
        badge: 'R&D',
    },
    {
        id: 'community',
        title: 'Community Outreach',
        description: 'Tech awareness bootcamps, open-source workshops, and digital literacy initiatives empowering the local community.',
        image: "/community.png",
        badge: 'Impact',
    },
];

const page = () => {
    return (
        <div className='bg-[#0B1120]'>

            <section className="relative flex min-h-screen items-center justify-center overflow-hidden  px-6 py-16 text-slate-200 md:px-16">
                <Image
                    src="/kmss-ground.jpg"
                    alt="Technology background"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                />

                <div className="absolute inset-0 z-[1] bg-[#0B1120]/75" />


                <div className="absolute left-6 top-6 z-10 md:left-16 md:top-10">
                    <Image
                        src="/logo.avif"
                        alt="ICT Club logo"
                        width={80}
                        height={80}
                        className="h-38 w-38 object-contain md:h-40 md:w-40"
                    />
                </div>

                <div className="absolute right-6 top-6 z-10 md:right-16 md:top-10">
                    <Image
                        src="/school-logo.png"
                        alt="School logo"
                        width={120}
                        height={120}
                        className="h-38 w-38 object-contain md:h-40 md:w-40"
                    />
                </div>

                <motion.div
                    className="relative z-10 mx-auto max-w-4xl text-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1
                        variants={itemVariants}
                        className="bg-gradient-to-r from-[#05F2DB] to-[#2563EB] bg-clip-text text-4xl font-extrabold text-transparent sm:text-6xl"
                    >
                        ICT Club of Kalika
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg"
                    >
                        Innovating the future through technology and collaboration
                    </motion.p>
                </motion.div>
            </section>

            <section className="relative overflow-hidden  px-6 py-20 text-slate-200 sm:py-24 md:px-16">
                <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
                    <div>

                        <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
                            Why We{" "}
                            <span className="bg-[#05F2DB] bg-clip-text text-transparent">
                                Exist?
                            </span>
                        </h2>

                        <p className="mt-8 text-base leading-8 text-slate-400 sm:text-lg">
                            We believe every student has the potential to create something
                            extraordinary through technology. Our purpose is to turn curiosity
                            into knowledge, ideas into innovation, and learners into future
                            technology leaders.
                        </p>


                        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">

                            <div className="rounded-xl  bg-white/[0.03] p-5 transition-all duration-200 flex flex-col justify-center items-center  hover:bg-blue-500/[0.04]">
                                <div className="mb-5 flex h-24 w-24 items-center justify-center">
                                    <Image
                                        src="/learn.png"
                                        alt="Learn and explore"
                                        width={86}
                                        height={86}
                                        className="object-contain"
                                    />
                                </div>

                                <h3 className="text-lg font-bold text-white">
                                    Learn & Explore
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-slate-400">
                                    Discover new technologies and develop practical skills beyond the classroom.
                                </p>
                            </div>

                            <div className=" rounded-xl  bg-white/3 p-5 transition-all duration-200  flex flex-col justify-center items-center hover:bg-blue-500/4">
                                <div className="mb-5 flex h-24 w-24 items-center justify-center ">
                                    <Image
                                        src="/built.png"
                                        alt="Build and innovate"
                                        width={86}
                                        height={86}
                                        className="object-contain"
                                    />
                                </div>

                                <h3 className="text-lg font-bold text-white">
                                    Build & Innovate
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-slate-400">
                                    Collaborate on meaningful projects and transform creative ideas into reality.
                                </p>
                            </div>
                        </div>
                    </div>


                    <div className="relative">

                        <div className="relative overflow-hidden rounded-3xl  bg-[#111a2c]/90 p-7 shadow-2xl shadow-black/20 sm:p-10">

                            <span className="text-3xl font-semibold text-[#05F2DB]">
                                Our Story
                            </span>

                            <div className="mt-8 space-y-6 text-sm leading-7 text-slate-400 sm:text-base">
                                <p>
                                    Established in <span className="font-semibold text-white">2079</span>,
                                    the ICT Club of Kalika brings together technology enthusiasts,
                                    innovators, and future leaders to learn, create, and grow together.
                                </p>

                                <p>
                                    What began as a vision to make technology more accessible has
                                    grown into a community where students share knowledge, explore
                                    emerging technologies, and turn their ideas into practical projects.
                                </p>

                                <p>
                                    Through workshops, seminars, competitions, and collaborative
                                    projects, we bridge the gap between classroom learning and
                                    real-world application.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section className="relative  text-slate-200 py-24 px-6 md:px-16 overflow-hidden">
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                        <div className="inline-flex items-center gap-2 px-3  text-xs ">
                            <span className='font-semibold text-2xl text-gray-600'>Core Pillars</span>
                        </div>
                        <h2 className="text-4xl md:text-4xl font-extrabold tracking-tight text-white">
                            Our <span className="bg-[#05F2DB] bg-clip-text text-transparent">Foundation</span>
                        </h2>
                        <p className="text-slate-400 text-base md:text-lg leading-relaxed">
                            The principles that guide our journey and shape our impact as a community.
                        </p>
                    </div>

                   <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {foundationData.map((item) => (
                <div 
                    key={item.id}
                    className="group relative rounded-2xl bg-[#121a2c]/80 border border-slate-800/80 p-8 backdrop-blur-sm transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
              
                    <div  className={`absolute top-0 left-0 h-1 bg-[#aaa] opacity-90 group-hover:opacity-100 transition-opacity duration-300 animate-fill-bar`}  />

                    <div className='relative'>
                        <div className="w-full h-34 rounded-xl bg-[#182237] relative left-1/3 p-4 flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 group-hover:border-[#00F0FF]/50 transition-all duration-300">
                            {item.icon}
                        </div>

        
                        <h3 className="text-2xl font-bold text-white mt-1 mb-4">
                            {item.title}
                        </h3>

                        <p className="text-slate-400 text-sm md:text-base leading-relaxed relative z-10">
                            {item.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
                </div>
            </section>

            <section className="relative  text-slate-200 py-24 px-6 md:px-16 overflow-hidden">
                <div className="max-w-7xl mx-auto relative z-10">

                    <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">

                        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                            What <span className=" bg-[#00F0FF] bg-clip-text text-transparent">We Do</span>
                        </h2>

                        <p className="text-slate-400 text-base md:text-lg leading-relaxed">
                            Discover the various activities and programs that make our club unique and impact-driven.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {activities.map((item) => (
                            <div
                                key={item.id}
                                className="group relative rounded-2xl bg-[#121a2c]/90 border border-slate-800/80 pt-0 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-slate-700 hover:shadow-xl hover:shadow-cyan-500/10 flex flex-col justify-between overflow-hidden"
                            >
                                <div className="relative flex items-center justify-between mb-6">

                                    <div className="w-24 h-24 relative rounded-tl-xl rounded-br-3xl bg-[#182237] flex items-center p-2 justify-center overflow-hidden transition-all duration-300 border-r border-b border-slate-700/50">
                                        {item.image ? (
                                            <Image
                                                src={item.image}
                                                alt={item.title ?? "Activity image"}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-300"
                                            />
                                        ) : (""
                                        )}
                                    </div>

                                    <span className="text-[11px] pr-5 font-semibold tracking-wide uppercase px-2.5 py-1 rounded-md text-slate-400 group-hover:text-slate-200 transition-colors">
                                        {item.badge}
                                    </span>
                                </div>

                                <div className="pb-7 pr-7">
                                    <h3 className="text-xl font-bold text-white mb-2.5 pl-7 group-hover:text-[#00F0FF] transition-colors duration-200">
                                        {item.title}
                                    </h3>

                                    <p className="text-slate-400 text-sm leading-relaxed pl-7">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            <section className="relative  text-slate-200 py-24 px-6 md:px-16 overflow-hidden">

                <div className="max-w-4xl mx-auto relative z-10 text-center">

                    <div className="rounded-3xl bg-[#121a2c]/80 border border-slate-800/80 p-8 md:p-14 backdrop-blur-md shadow-2xl shadow-cyan-500/5 relative overflow-hidden">

                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full  text-xs font-medium text-[#00F0FF] mb-6">
                            <span className='font-semibold text-2xl'>Get Involved</span>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
                            Join Us and <span className="bg-gradient-to-r from-[#37deea] to-[#2563EB] bg-clip-text text-transparent">Move Together</span>
                        </h2>

                        <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                            Ready to be part of something bigger? Explore our team, discover upcoming events, and see how you can contribute to our mission of technological innovation.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/team"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-white bg-[#2563EB] hover:opacity-95 transition-all duration-200  cursor-pointer"
                            >
                                <Users className="w-4 h-4" />
                                <span>Meet Our Team</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                            </Link>


                            <Link
                                href="/events"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-slate-200 bg-[#162032] border border-slate-700/80 hover:bg-[#1f2b42] hover:text-white hover:border-slate-600 transition-all duration-200 cursor-pointer"
                            >
                                <Calendar className="w-4 h-4 text-[#00F0FF]" />
                                <span>Explore Events</span>
                            </Link>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default page
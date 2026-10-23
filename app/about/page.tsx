"use client"

import React from 'react'
import Image from 'next/image'
import {
    Users,
    ArrowRight,
    Calendar
} from 'lucide-react';
import Link from 'next/link';
import { motion, Variants } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { foundationData, activities } from '@/data/activities';

interface AboutHeroProps {
    containerVariants?: Variants;
    itemVariants?: Variants;
}


const AboutSection = ({ containerVariants,
    itemVariants
}: AboutHeroProps) => {

    const defaultContainer: Variants = containerVariants || {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.1 },
        },
    };

    const defaultItem: Variants = itemVariants || {
        hidden: { opacity: 0, y: 25 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
        },
    };

    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
        },
    };

    return (
        <div className='bg-[#0B1120]'>

            <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-16 text-slate-200 md:px-16">
                <Image
                    src="/kmss-ground.jpg"
                    alt="Technology background"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                />

                <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#0B1120]/80 via-[#0B1120]/70 to-[#0B1120]/90" />

                <motion.div
                    initial={{ opacity: 0, x: -30, y: -20 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="absolute left-6 top-6 z-10 md:left-12 md:top-10"
                >
                    <div className="rounded-2xl bg-[#0B1120]/60 p-2.5 backdrop-blur-md border border-white/10 shadow-xl hover:border-[#05F2DB]/40 transition-colors">
                        <Image
                            src="/logo.avif"
                            alt="ICT Club logo"
                            width={90}
                            height={90}
                            className="h-20 w-20 object-contain md:h-28 md:w-28"
                        />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30, y: -20 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                    className="absolute right-6 top-6 z-10 md:right-12 md:top-10"
                >
                    <div className="rounded-2xl bg-[#0B1120]/60 p-2.5 backdrop-blur-md border border-white/10 shadow-xl hover:border-[#3bb6d5]/40 transition-colors">
                        <Image
                            src="/school-logo.png"
                            alt="School logo"
                            width={90}
                            height={90}
                            className="h-20 w-20 object-contain md:h-28 md:w-28"
                        />
                    </div>
                </motion.div>


                <motion.div
                    className="relative z-10 mx-auto max-w-4xl text-center space-y-6"
                    variants={defaultContainer}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div variants={defaultItem} className="flex justify-center">
                        <span className="inline-flex items-center gap-2  bg-[#05F2DB]/5 px-4 py-1.5 text-xs sm:text-sm font-semibold tracking-wider text-[#05F2DB]  backdrop-blur-sm shadow-[0_0_20px_rgba(5,242,219,0.15)]">
                            Kalika Manavgyan Secondary School
                        </span>
                    </motion.div>

                    <motion.h1
                        variants={defaultItem}
                        className="bg-gradient-to-r from-[#05F2DB] via-[#3bb6d5] to-[#2563EB] bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl md:text-5xl tracking-tight pb-2"
                    >
                        ICT Club of Kalika
                    </motion.h1>


                    <motion.p
                        variants={defaultItem}
                        className="mx-auto max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg md:text-xl font-light"
                    >
                        Innovating the future through technology, hands-on learning, and collaborative student leadership.
                    </motion.p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: [0, 8, 0] }}
                    transition={{ opacity: { duration: 1 }, y: { repeat: Infinity, duration: 2, ease: "easeInOut" } }}
                    className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-1 text-slate-400 text-xs tracking-widest uppercase"
                >
                    <span>Scroll Down</span>
                    <ChevronDown className="w-4 h-4 text-[#05F2DB]" />
                </motion.div>
            </section>

            <section className="relative overflow-hidden px-6 py-20 text-slate-200 sm:py-24 md:px-16">
                <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
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
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="rounded-xl bg-white/[0.03] p-5 transition-all duration-200 flex flex-col justify-center items-center hover:bg-blue-500/[0.04]"
                            >
                                <div className="mb-5 flex h-24 w-24 items-center justify-center">
                                    <Image
                                        src="/learn1.png"
                                        alt="Learn and explore"
                                        width={86}
                                        height={86}
                                        className="object-contain"
                                    />
                                </div>

                                <h3 className="text-lg font-bold text-white">
                                    Learn & Explore
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-slate-400 text-center">
                                    Discover new technologies and develop practical skills beyond the classroom.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="rounded-xl bg-white/3 p-5 transition-all duration-200 flex flex-col justify-center items-center hover:bg-blue-500/4"
                            >
                                <div className="mb-5 flex h-24 w-24 items-center justify-center">
                                    <Image
                                        src="/programming.png"
                                        alt="Build and innovate"
                                        width={86}
                                        height={86}
                                        className="object-contain"
                                    />
                                </div>

                                <h3 className="text-lg font-bold text-white">
                                    Build & Innovate
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-slate-400 text-center">
                                    Collaborate on meaningful projects and transform creative ideas into reality.
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative overflow-hidden rounded-3xl bg-[#111a2c]/90 p-7 shadow-2xl shadow-black/20 sm:p-10">
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
                    </motion.div>

                </div>
            </section>

            <section className="relative overflow-hidden  px-6 py-24 text-slate-200 md:px-16">
                <div className="relative mx-auto max-w-7xl z-10">

                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mx-auto mb-16 max-w-2xl text-center space-y-3"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#05F2DB]">
                            <span>Core Pillars</span>
                        </div>

                        <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
                            Our <span className="bg-gradient-to-r from-[#05F2DB] to-[#3bb6d5] bg-clip-text text-transparent">Foundation</span>
                        </h2>

                        <p className="text-base text-slate-400 md:text-lg leading-relaxed">
                            The principles that guide our journey and shape our impact as a technology community.
                        </p>
                    </motion.div>

    
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="grid grid-cols-1 gap-8 md:grid-cols-3"
                    >
                        {foundationData.map((item) => (
                            <motion.div
                                key={item.id}
                                variants={cardVariants}
                                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-800/80 bg-[#121a2c]/80 p-8 backdrop-blur-md transition-all duration-300 hover:border-[#05F2DB]/40"
                            >
                     
                                <div className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#05F2DB] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                                <div className="relative">
                
                                    <div className="relative mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-xl bg-[#182237] p-4 shadow-inner transition-all duration-300 group-hover:border-[#00F0FF]/50">
                                        {item.icon}
                                    </div>

                                    <h3 className="mb-3 text-2xl font-bold text-white transition-colors group-hover:text-[#05F2DB]">
                                        {item.title}
                                    </h3>

                                    <p className="relative z-10 text-sm text-slate-400 md:text-base leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                </div>
            </section>

            <section className="relative  text-slate-200 py-24 px-6 md:px-16 overflow-hidden">
                <div className="max-w-7xl mx-auto relative z-10">

                    <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">

                        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
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

      <section className="relative overflow-hidden px-6 py-24 text-slate-200 md:px-16">
      <div className="relative mx-auto max-w-4xl z-10 text-center">
        
        {/* Main Card with Scale & Fade-up Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl border border-slate-800/80 bg-[#121a2c]/80 p-8 shadow-2xl shadow-cyan-500/5 backdrop-blur-md md:p-14"
        >
          <div className="mb-2 inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-medium text-gray-500">
            <span className="text-xl font-semibold">Get Involved</span>
          </div>

          <h2 className="mb-6 text-2xl font-extrabold tracking-tight text-white md:text-4xl leading-tight">
            Join Us and <span className="bg-[#37deea] bg-clip-text text-transparent">Move Together</span>
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-base text-slate-400 md:text-lg leading-relaxed">
            Ready to be part of something bigger? Explore our team, discover upcoming events, and see how you can contribute to our mission of technological innovation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/team"
              className="group inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-xl bg-[#1b696f] px-7 py-3.5 font-semibold text-white transition-all duration-200 hover:opacity-95 cursor-pointer"
            >
              <Users className="h-4 w-4" />
              <span>Meet Our Team</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/events"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-xl border border-slate-700/80 bg-[#162032] px-7 py-3.5 font-semibold text-slate-200 transition-all duration-200 hover:bg-[#1f2b42] hover:border-slate-600 hover:text-white cursor-pointer"
            >
              <Calendar className="h-4 w-4 text-[#00F0FF]" />
              <span>Explore Events</span>
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
        </div>
    )
}

export default AboutSection
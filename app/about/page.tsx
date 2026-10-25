"use client"

import React from 'react'
import Image from 'next/image'
import {
    Users,
    ArrowRight,
    Calendar,
    ImageOff
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
                    className="absolute left-6 top-40 z-10 md:left-12 md:top-10"
                >
                    <div className="">
                        <Image
                            src="/logo.avif"
                            alt="ICT Club logo"
                            width={90}
                            height={90}
                            className="h-24 w-24 object-contain md:h-32 md:w-32"
                        />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30, y: -20 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                    className="absolute right-6 top- z-10 md:right-12 md:top-10"
                >
                    <div className="">
                        <Image
                            src="/school-logo.png"
                            alt="School logo"
                            width={90}
                            height={90}
                            className="h-20 w-20 object-cover rounded-full md:h-28 md:w-28"
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
                        <span className=" text-sm sm:text-xl font-semibold tracking-wider text-[#304489] ">
                            Kalika Manavgyan Secondary School
                        </span>
                    </motion.div>

                    <motion.h1
                        variants={defaultItem}
                        className="bg-white bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl md:text-5xl tracking-tight pb-2"
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
                    <ChevronDown className="w-4 h-4 text-[#2174EE]" />
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
                            Why We Exist

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
                                className="rounded-xl  p-5 transition-all duration-200 flex flex-col justify-center items-center "
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
                                className="rounded-xl p-5 transition-all duration-200 flex flex-col justify-center items-center "
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
                        <div className="relative overflow-hidden rounded-3xl bg-[#e9e1e1] p-7 shadow-2xl shadow-black/20 sm:p-10">
                            <span className="text-3xl font-semibold text-gray-600">
                                Our Story
                            </span>

                            <div className="mt-8 space-y-6 text-sm leading-7 text-slate-600 sm:text-base">
                                <p>
                                    Established in 2079,
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

                        <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
                            Our <span className="bg-white bg-clip-text text-transparent">Foundation</span>
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
                                className="group relative rounded-2xl bg-[#0F172A]/70 hover:bg-[#0F172A]/95  backdrop-blur-md transition-all duration-300 hover:-translate-y-2 shadow-xl p-5  flex flex-col justify-between overflow-hidden "
                            >

                                <div className="relative">

                                    <div className="relative mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-xl  p-4 shadow-inner transition-all duration-300 group-hover:border-[#00F0FF]/50">
                                        {item.icon}
                                    </div>

                                    <h3 className="mb-3 text-2xl font-bold text-white transition-colors ">
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

                        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                            What We Do
                        </h2>

                        <p className="text-slate-400 text-base md:text-lg leading-relaxed">
                            Discover the various activities and programs that make our club unique and impact-driven.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {activities.map((item) => (
                            <div
                                key={item.id}
                                className="group relative flex flex-col overflow-hidden rounded-2xl  bg-[#121a2c]/80 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl "
                            >
                                <div className="relative flex h-52 items-center justify-center overflow-hidden bg-[#121a2c] p-5">

                                    {item.image ? (
                                        <div className="relative h-40 w-40 overflow-hidden ">
                                            <Image
                                                src={item.image}
                                                alt={item.title ?? "Activity thumbnail"}
                                                fill
                                                sizes="(max-width: 768px) 80vw, (max-width: 1024px) 40vw, 240px"
                                                className="object-contain transition-transform duration-500 ease-out group-hover:scale-105"
                                            />
                                        </div>
                                    ) : (
                                        <div className="relative flex h-40 w-40 items-center justify-center rounded-2xl border border-slate-700 bg-[#182237] text-slate-500">
                                            <ImageOff className="h-10 w-10 stroke-[1.5]" />
                                        </div>
                                    )}

                      
                                    {item.badge && (
                                        <span className="absolute right-2 top-4 z-10 inline-flex items-center rounded-full bg-white px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-[#60A5FA] backdrop-blur-md">
                                            {item.badge}
                                        </span>
                                    )}
                                </div>

                                <div className="flex flex-1 flex-col p-6">
                                    <h3 className="text-lg font-bold text-white ">
                                        {item.title}
                                    </h3>

                                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-400 transition-colors duration-300 group-hover:text-slate-300">
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

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="relative overflow-hidden rounded-3xl border-1 border-gray-600 bg-[#121a2c]/80 p-8 shadow-2xl  md:p-14"
                    >
                        <div className="mb-2 inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-medium text-gray-500">
                            <span className="text-xl font-semibold">Get Involved</span>
                        </div>

                        <h2 className="mb-6 text-2xl font-extrabold tracking-tight text-white md:text-4xl leading-tight">
                            Join Us and Move Together
                        </h2>

                        <p className="mx-auto mb-10 max-w-2xl text-base text-slate-400 md:text-lg leading-relaxed">
                            Ready to be part of something bigger? Explore our team, discover upcoming events, and see how you can contribute to our mission of technological innovation.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/team"
                                className="group inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-xl bg-white text-[#2a8aba] px-7 py-3.5 font-semibold  transition-all duration-200 hover:opacity-95 cursor-pointer"
                            >
                                <Users className="h-4 w-4" />
                                <span>Meet Our Team</span>
                                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                            </Link>

                            <Link
                                href="/events"
                                className="inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-xl border border-slate-700/80 bg-[#162032] px-7 py-3.5 font-semibold text-slate-200 transition-all duration-200 hover:bg-[#1f2b42] hover:border-slate-600 hover:text-white cursor-pointer"
                            >
                                <Calendar className="h-4 w-4 " />
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
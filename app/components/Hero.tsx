"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
} as const;

const iconVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1] as const,
        },
    },
};

const Hero = () => {

    const text = "A community of curious minds and passionate learners. Together, we learn beyond the classroom, turn imagination into innovation, and create opportunities to grow, inspire, and make an impact.";
    const words = text.split(" ");

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.03,
                delayChildren: 0.1,
            },
        },
    };

    const wordVariants: Variants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: "easeOut" },
        },
    };

    return (
        <section className="min-h-screen bg-[#0B1120] text-[#ebe6e2] overflow-hidden">

            <div className="mx-auto flex w-full max-w-7xl flex-col  items-end justify-between gap-12 px-4 sm:px-6 pt-16 md:flex-row md:items-start md:gap-8 lg:gap-12">
                <motion.div
                    id="social-media"
                    className="order-3 md:order-1 flex w-full md:w-auto flex-row items-center justify-center gap-6 md:flex-col md:gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.a
                        variants={iconVariants}
                        whileHover={{ y: -3, scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="https://www.instagram.com/ictkalika/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit our Instagram page"
                        className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5 border border-white/10 hover:border-[#05F2DB]/50 transition-all duration-300"
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5" aria-hidden="true">
                            <rect x="3" y="3" width="18" height="18" rx="5" />
                            <circle cx="12" cy="12" r="4" />
                            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                        </svg>
                    </motion.a>

                    <motion.a
                        variants={iconVariants}
                        whileHover={{ y: -3, scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="https://github.com/ictkalika"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit our GitHub page"
                        className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5 border border-white/10 hover:border-[#05F2DB]/50 transition-all duration-300"
                    >
                        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                            <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.31-3.76-1.31-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.7 1.15 1.7 1.15.99 1.7 2.6 1.21 3.23.92.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.51 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.06 1.14a10.65 10.65 0 0 1 5.57 0c2.12-1.44 3.06-1.14 3.06-1.14.61 1.54.23 2.68.11 2.96.72.78 1.15 1.77 1.15 2.99 0 4.28-2.62 5.22-5.11 5.5.4.35.75 1.02.75 2.06v3.08c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
                        </svg>
                    </motion.a>

                    <motion.a
                        variants={iconVariants}
                        whileHover={{ y: -3, scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="https://www.linkedin.com/company/ictkalika/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit our LinkedIn page"
                        className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5 border border-white/10 hover:border-[#05F2DB]/50 transition-all duration-300"
                    >
                        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM7.119 20.452H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
                        </svg>
                    </motion.a>

                    <motion.a
                        variants={iconVariants}
                        whileHover={{ y: -3, scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="https://www.facebook.com/ictkalika"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit our Facebook page"
                        className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5 border border-white/10 hover:border-[#05F2DB]/50 transition-all duration-300"
                    >
                        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                            <path d="M13.4 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.4-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.3V13h2.8v8h3.3Z" />
                        </svg>
                    </motion.a>
                </motion.div>

                <div className="order-2 md:order-2 flex flex-col items-center justify-center">
                    <div className="relative flex h-[300px] w-[300px] sm:h-[360px] sm:w-[360px] items-center justify-center">
                        <div className="absolute h-[260px] w-[260px] sm:h-[310px] sm:w-[310px] animate-[spin_12s_linear_infinite] rounded-full border border-[#05F2DB]/30 rotate-[-25deg]">
                            <div className="absolute -top-5 left-1/2 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full border border-[#05F2DB]/40 bg-[#0B1120] shadow-[0_0_15px_#05F2DB40]">
                                <Image src="/cpu.png" alt="CPU" width={20} height={20} className="h-5 w-5 object-contain" />
                            </div>
                            <div className="absolute right-0 top-1/2 flex h-9 w-9 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#05F2DB]/40 bg-[#0B1120] text-sm font-bold text-[#05F2DB] shadow-[0_0_15px_#05F2DB40]">
                                {'</>'}
                            </div>
                            <div className="absolute bottom-0 left-1/2 flex h-9 w-9 -translate-x-1/2 translate-y-1/2 items-center justify-center rounded-full border border-[#05F2DB]/40 bg-[#0B1120] shadow-[0_0_15px_#05F2DB40]">
                                <Image src="/rocket.png" alt="Rocket" width={20} height={20} className="h-5 w-5 object-contain" />
                            </div>
                            <div className="absolute left-0 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#05F2DB]/40 bg-[#0B1120] shadow-[0_0_15px_#05F2DB40]">
                                <Image src="/inn.png" alt="Innovation" width={20} height={20} className="h-5 w-5 object-contain" />
                            </div>
                        </div>

                        <div className="absolute h-[190px] w-[190px] sm:h-[230px] sm:w-[230px] animate-[spin_8s_linear_infinite_reverse] rounded-full border border-dashed border-[#05F2DB]/20">
                            <div className="absolute -top-3 left-1/2 h-5 w-5 -translate-x-1/2 rounded-full bg-[#05F2DB] shadow-[0_0_20px_#05F2DB]" />
                            <div className="absolute bottom-6 left-8 h-2.5 w-2.5 rounded-full bg-cyan-200 shadow-[0_0_15px_#05F2DB]" />
                        </div>

                        <div className="relative h-32 w-32 sm:h-40 sm:w-40 overflow-hidden rounded-full border-2 border-[#05F2DB]/50 bg-[#0B1120] shadow-[0_0_35px_#05F2DB25]">
                            <Image
                                src="/logo.avif"
                                alt="ICT Club of Kalika logo"
                                fill
                                priority
                                sizes="160px"
                                className="rounded-full object-contain"
                            />
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 35 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="flex flex-col items-center mt-4"
                    >
                        <h1 className="text-center text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-[#00F0FF] to-[#2563EB] bg-clip-text text-transparent">
                            ICT Club of Kalika
                        </h1>
                        <p className="mt-2 max-w-sm text-center text-sm leading-6 text-gray-400">
                            Innovating, collaborating, and building a smarter digital future.
                        </p>
                    </motion.div>
                </div>


                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 1,
                        delay: 0.2,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="order-1 md:order-3 flex max-w-sm flex-col gap-1 text-center md:items-start md:text-left"
                >
                    <h2 className="mt-2 text-2xl sm:text-3xl font-bold leading-tight">
                        Turning Ideas Into{" "}
                        <span className="text-[#05F2DB]">Innovation.</span>
                    </h2>

                    <span className="my-3 text-lg sm:text-xl font-semibold text-[#559499]">
                        Innovate. Inspire. Impact.
                    </span>

                    <motion.p
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="text-sm sm:text-base leading-5 text-[#949DAB] flex flex-wrap gap-x-[0.25rem] gap-y-1"
                    >
                        {words.map((word, index) => (
                            <motion.span key={index} variants={wordVariants} className="inline-block">
                                {word}
                            </motion.span>
                        ))}
                    </motion.p>



                    <motion.a
                        href="/events"
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="mt-5 inline-flex items-center rounded-3xl bg-[#05F2DB] px-6 py-3 font-semibold text-[#0B1120] transition-shadow duration-300 hover:shadow-lg hover:shadow-[#05F2DB]/20"
                    >
                        Explore Events →
                    </motion.a>
                </motion.div>


            </div>

            <div className="mt-16 sm:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto px-4 pb-12 items-center">
                <div className="flex flex-col items-center justify-center p-6 text-center transition-transform duration-300 hover:-translate-y-1">
                    <div className="relative h-16 w-16 mb-4">
                        <Image src="/active-members.png" alt="Active members" fill sizes="48px" className="object-contain" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#05F2DB]">83+</h3>
                    <p className="mt-1 text-xs sm:text-sm text-gray-400 tracking-wider font-semibold">Active Members</p>
                </div>

                <div className="flex flex-col items-center justify-centerp-6 text-center transition-transform duration-300 hover:-translate-y-1">
                    <div className="relative h-16 w-16 mb-4">
                        <Image src="/calendar.png" alt="Events held" fill sizes="48px" className="object-contain" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#05F2DB]">50+</h3>
                    <p className="mt-1 text-xs sm:text-sm text-gray-400 tracking-wider  font-semibold">Events Held</p>
                </div>

                <div className="flex flex-col items-center justify-center p-6 text-center transition-transform duration-300 hover:-translate-y-1">
                    <div className="relative h-16 w-16 mb-4">
                        <Image src="/goal.png" alt="Students impacted" fill sizes="48px" className="object-contain" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#05F2DB]">500+</h3>
                    <p className="mt-1 text-xs sm:text-sm text-gray-400 tracking-wider font-semibold">Students Impacted</p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
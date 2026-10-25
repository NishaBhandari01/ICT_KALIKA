"use client"
import members from "@/data/member";
import { MemberShowcase } from "../components/MemberCard";

import { motion, Variants } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1] as const,
        },
    },
};


const page = () => {
    return (

        <div className="bg-[#0B1120]">
            <section className="relative  text-slate-200 py-20 px-6 md:px-16 overflow-hidden">
                <motion.div
                    className="max-w-4xl mx-auto text-center relative z-10 space-y-4"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h2 variants={itemVariants} className="text-4xl md:text-4xl font-semibold tracking-tight text-white uppercase">
                        Our Team
                    </motion.h2>

                    <motion.p variants={itemVariants} className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
                    >
                        Meet the passionate individuals who drive innovation and excellence in the ICT Club. Our diverse team brings together unique skills, perspectives, and experiences to create an inspiring learning environment.
                    </motion.p>
                </motion.div>
            </section>
            <main className="min-h-screen">
                <MemberShowcase membersData={members} />
            </main>
        </div>
    )
}

export default page
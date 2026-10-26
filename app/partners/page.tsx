"use client";

import { motion } from "framer-motion";
import Image from 'next/image';
import CollaborationDiagram from '../components/CollaborationDiagram';

import {
  GraduationCap,
  Users,
  Award,
  ExternalLink,
  Handshake,
  ArrowRight,
  Mail,
} from "lucide-react";
import CollaborationDiagramMobile from "../components/CollaborationDiagramMob";



const stats = [
  { icon: <Users className="w-5 h-5 text-[#2a8aba]" />, count: "7000+", label: "Students" },
  { icon: <Award className="w-5 h-5 text-[#2a8aba]" />, count: "50+", label: "Years of Excellence" },
  { icon: <Handshake className="w-5 h-5 text-[#2a8aba]" />, count: "100%", label: "Alumni Success" },
  { icon: <GraduationCap className="w-5 h-5 text-[#2a8aba]" />, count: "10+", label: "Academic Programs" },
];

interface Benefit {
  imageSrc: string;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    imageSrc: "/skill.png",
    title: "State-of-the-Art Facilities",
    description: "Access to advanced computer labs, high-speed internet, and modern technology equipment for hands-on learning and project development.",
  },
  {
    imageSrc: "/coach (1).png",
    title: "Expert Guidance",
    description: "Mentorship from experienced faculty members with expertise across various fields of information and communication technology.",
  },
  {
    imageSrc: "/graduation-cap.png",
    title: "Academic Integration",
    description: "Seamless integration of club activities with academic curriculum, providing practical application of classroom learning.",
  },
  {
    imageSrc: "/resource-allocation.png",
    title: "Resource Support",
    description: "Financial and logistical support for organizing events, technical workshops, hackathons, and other club activities.",
  },
  {
    imageSrc: "/community-i.png",
    title: "Community Engagement",
    description: "Opportunities to engage with the wider school community and showcase technological innovations and achievements.",
  },
  {
    imageSrc: "/success.png",
    title: "Career Development",
    description: "Career counseling, college application support, and connections to alumni network for future academic and professional growth.",
  },
];

const Page = () => {
  return (
    <div className="bg-[#0B1120] min-h-screen">
      <section className="text-white relative overflow-hidden pb-10 sm:pb-14">


  
        <div className="block lg:hidden">
          <CollaborationDiagramMobile />
        </div>


        <div className="hidden lg:block">
          <CollaborationDiagram />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 lg:space-y-20 -mt-16 sm:-mt-24">

          <div className="flex flex-col justify-center items-center text-center gap-3 max-w-3xl mx-auto py-4">


            <h2 className="text-2xl mt-20 sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Empowering Dreams,{" "}   Anchored in Trust
            </h2>

            <p className="text-gray-300 text-xs sm:text-base md:text-lg leading-relaxed max-w-2xl font-normal">
              Building bridges between education and industry through strategic partnerships that empower our members with real-world experience, cutting-edge resources, and career opportunities.
            </p>
          </div>


          <div className="relative group rounded-3xl bg-gradient-to-b from-[#0F172A]/90 to-[#0F172A]/70 p-6 sm:p-8 md:p-12 backdrop-blur-xl shadow-2xl transition-all duration-500">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-6">

              <div className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-2xl bg-white/95 p-4 shadow-xl border border-white/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <Image
                  src="/kmss.jpg"
                  alt="Kalika Manavgyan Secondary School"
                  fill
                  sizes="(max-width: 640px) 160px, (max-width: 768px) 224px, 256px"
                  className="object-contain p-2"
                />
              </div>


              <div className="space-y-2">
                <span className="inline-block px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-widest text-gray-400 ">
                  Founding Partner
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-wide text-[#304488] uppercase">
                  Kalika Manavgyan Secondary School
                </h2>
              </div>


              <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">
                Our founding institution providing educational excellence and innovative learning solutions.{" "}
                <strong className="text-white">Kalika Manavgyan Secondary School</strong> has been instrumental in establishing and supporting the ICT Club, providing resources, guidance, and opportunities for students to excel in information and communication technology.
              </p>


              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full pt-4">
                {stats.map((stat, idx) => (
                  <div key={idx} className="p-3 sm:p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 flex flex-col items-center space-y-1">
                    <div className="p-2 rounded-lg bg-gray-950/80">
                      {stat.icon}
                    </div>
                    <span className="text-base sm:text-xl md:text-2xl font-black text-white">{stat.count}</span>
                    <span className="text-[10px] sm:text-[11px] font-semibold text-slate-400 uppercase tracking-wider text-center">{stat.label}</span>
                  </div>
                ))}
              </div>


              <div className="pt-2">
                <a
                  href="https://kalikaschool.edu.np"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-white text-[#2a8aba] text-sm sm:text-base font-semibold shadow-lg  transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <span>Visit School Website</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

            </div>
          </div>


          <div className="space-y-8 sm:space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-center space-y-3 max-w-2xl mx-auto"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white">
                Partnership Benefits
              </h2>
              <p className="text-gray-400 text-xs sm:text-sm md:text-base">
                How our strategic partnership with <span className=" text-[#2a8aba] font-medium">Kalika Manavgyan Secondary School</span> empowers our members.
              </p>
            </motion.div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, idx) => {
                const isFeatured = idx === 0 || idx === 3;

                return (
                  <div
                    key={idx}
                    className={`group relative rounded-2xl p-6 sm:p-7 backdrop-blur-md  transition-all duration-300 hover:-translate-y-1.5 shadow-xl flex flex-col justify-between ${isFeatured
                      ? "md:col-span-2 bg-gradient-to-br from-[#0F172A] via-[#0F172A]/90 to-cyan-950/30"
                      : "col-span-1 bg-[#0F172A]/70 hover:bg-[#0F172A]/90"
                      }`}
                  >
                    {isFeatured && (
                      <div className="absolute top-0 right-0 text-[10px] bg-white text-[#2a8aba] py-1.5 px-3 sm:px-4 rounded-tr-2xl rounded-bl-2xl font-bold uppercase tracking-wider ">
                        Key Benefit
                      </div>
                    )}

                    <div className="space-y-4">
                      <div className="relative h-18 w-18 rounded-xl  p-2 overflow-hidden flex items-center justify-center shadow-md">
                        <Image
                          src={benefit.imageSrc}
                          alt={benefit.title}
                          fill
                          sizes="68px"
                          className="object-contain p-1.5"
                        />
                      </div>

                      <h3 className={`font-bold text-white  transition-colors text-lg sm:text-xl`}>
                        {benefit.title}
                      </h3>

                      <p className={`text-slate-400 leading-relaxed ${isFeatured ? "text-sm sm:text-base md:text-lg max-w-2xl" : "text-xs sm:text-sm"}`}>
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative rounded-3xl bg-[#0F172A]/90 to-slate-900/80  p-6 sm:p-8 md:p-12 text-center overflow-hidden shadow-2xl backdrop-blur-xl">
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white">
                Become Our Partner
              </h2>

              <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">
                Interested in partnering with the ICT Club? We welcome collaborations with educational institutions, technology companies, and organizations that share our vision of empowering students through technology.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white text-[#2a8aba] text-sm sm:text-base font-semibold shadow-lg shadow-cyan-500/25 transition-all duration-300"
                >
                  <Mail className="w-4 h-4" />
                  <span>Contact Us</span>
                </a>

                <a
                  href="#about"
                  className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-slate-800/80 hover:bg-slate-700/80 border border-slate-600 text-gray-200 hover:text-white text-sm sm:text-base font-semibold transition-all duration-300"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Page;
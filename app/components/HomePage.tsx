"use client"
import Hero from "./Hero";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { activities } from '@/data/activities';
import MajorAchievements from "./MajorAchivement";
import { ImageOff } from "lucide-react";
import { motion } from "framer-motion";

interface Program {
  title: string;
  description: string;
}

const programs: Program[] = [
  {
    title: "Coding Workshops",
    description: "Learn Python, JavaScript, web development & more",

  },
  {
    title: "Robotics Training",
    description: "Hands-on experience with robotics and automation",

  },
  {
    title: "AI Sessions",
    description: "AI Guff workshops with industry experts",

  },
  {
    title: "IT Competitions",
    description: "IT Fest champions and regional winners",

  },
  {
    title: "Career Guidance",
    description: "Resume building and tech career workshops",

  },
  {
    title: "Leadership Development",
    description: "Annual installation ceremonies and board election",
  },
];

export default function HomePage() {

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="min-h-screen bg-[#0B1120]">
      <Hero />

   <section className="relative overflow-hidden px-4 py-24 text-white md:px-8">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-wide text-[#29abd6] md:text-3xl">
              ICT CLUB OF KALIKA - Butwal&apos;s Leading IT Club
            </h2>
            <span className="inline-block text-sm font-semibold tracking-widest text-gray-600">
              Innovate. Inspire. Impact.
            </span>
          </div>

          <p className="text-sm leading-relaxed text-gray-300 md:text-base">
            ICT Club of Kalika is Butwal&apos;s leading IT club and premier student-led technology organization. Founded in 2022 at Kalika Manavgyan Secondary School, we are a vibrant community of over 50 active members passionate about technology, innovation, and digital transformation across Nepal.
          </p>

          <p className="text-sm leading-relaxed text-gray-300 md:text-base">
            Located in Rupandehi district, Lumbini Province, our club serves as the hub for IT education and innovation in Western Nepal. Through our flagship Digital Horizon program, we bring technology education to rural areas across Nepal, while organizing coding workshops, robotics training, AI sessions, and IT competitions throughout Butwal and beyond.
          </p>
        </motion.div>


        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="flex flex-col items-center space-y-4"
        >
          <div className="h-[300px] w-full overflow-hidden rounded-2xl border border-blue-900/50 bg-blue-950 shadow-2xl sm:h-[380px]">
            <Image
              src="/team.avif"
              alt="ICT club of kalika installation"
              width={600}
              height={400}
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <h3 className="text-xl font-semibold tracking-wide text-[#3bb6d5] uppercase text-center">
            ICT Club of Kalika Installation 2025
          </h3>
        </motion.div>

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

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {activities.map((item) => (
              <div
                key={item.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-800/80 bg-[#121a2c]/80 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/30 hover:bg-[#121a2c] hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                
                <div className="relative flex items-start justify-between">
        
                  <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-tl-2xl rounded-br-3xl border-b border-r border-slate-700/50 bg-[#182237] transition-colors duration-300 group-hover:border-cyan-500/40">
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.title ?? "Activity thumbnail"}
                        fill
                        sizes="(max-width: 768px) 100vw, 96px"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-slate-500 transition-colors group-hover:text-cyan-400">
                        <ImageOff className="h-7 w-7 stroke-[1.5]" />
                      </div>
                    )}
                  </div>

                  {/* Badge Tag */}
                  {item.badge && (
                    <div className="p-4">
                      <span className="inline-flex items-center rounded-full border border-slate-700/60 bg-slate-800/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-slate-300 transition-colors duration-200 group-hover:border-cyan-500/30 group-hover:text-cyan-300">
                        {item.badge}
                      </span>
                    </div>
                  )}
                </div>

                {/* Card Body Content */}
                <div className="flex flex-1 flex-col justify-between p-6 pt-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-slate-100 transition-colors duration-200 group-hover:text-[#00F0FF]">
                      {item.title}
                    </h3>

                    <p className="line-clamp-3 text-sm leading-relaxed text-slate-400 transition-colors duration-200 group-hover:text-slate-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="py-12 px-4  text-white">
        <div className="w-full max-w-3xl mx-auto space-y-4">

          <h3 className="text-xl md:text-2xl font-bold text-blue-100 text-center mb-8 tracking-wide">
            Additional Programs in <span className="text-[#00F0FF]">Butwal</span>
          </h3>

          {programs.map((program, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index}
                className="bg-[#0F172A]/70 hover:bg-[#0F172A]/90 border border-slate-700/50 hover:border-blue-500/50 rounded-xl overflow-hidden backdrop-blur-md transition-all duration-300 shadow-lg"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-5 text-left cursor-pointer group"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-base md:text-lg text-gray-100 group-hover:text-blue-300 transition-colors">
                    {program.title}
                  </span>

                  <span className={`transform transition-transform duration-300 text-gray-400 group-hover:text-white ${isOpen ? "rotate-90 text-blue-400" : ""}`}>
                    <ChevronRight className="w-5 h-5" />
                  </span>
                </button>


                <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <div className="px-5 pb-5 pt-1 text-sm md:text-base text-gray-300 leading-relaxed border-t border-slate-800/80">
                      <p className="mt-3">{program.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <MajorAchievements />

      

      <section className=" px-6 py-16 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              Visit <span className="text-[#05F2DB]">ICT Club</span>  of Kalika
            </h2>
            <p className="mt-3 text-gray-400">
              Find us on Google Maps and plan your visit.
            </p>
          </div>

          <div className="grid gap-6 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 md:grid-cols-2 md:p-6">

            <div className="min-h-[450px] overflow-hidden rounded-xl">
              <iframe
                title="ICT Club of Kalika location"
                src="https://maps.google.com/maps?q=Kalika%20Manavgyan%20Secondary%20School%2C%20Butwal&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ minHeight: "450px", border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="flex flex-col justify-center p-4 md:p-8">
              <h3 className="text-2xl font-semibold">
                ICT Club of Kalika
              </h3>

              <p className="mt-3 leading-7 text-gray-400">
                Kalika Manavgyan Secondary School,
                Butwal, Rupandehi, Nepal.
              </p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Kalika+Manavgyan+Secondary+School+Butwal"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-lg bg-[#4ea4cb] px-5 py-3 font-medium transition hover:bg-[#417993] "
              >
                Open in Google Maps
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}


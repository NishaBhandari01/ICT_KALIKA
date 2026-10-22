"use client"
import Hero from "./Hero";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
interface Program {
  title: string;
  description: string;
 
}
import {  activities } from '@/data/activities';
import MajorAchievements from "./MajorAchivement";
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
      
      <section className="py-24 px-4 md:px-8  text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-bold tracking-wide text-blue-100">
                ICT CLUB OF KALIKA - Butwal&apos;s Leading IT Club
              </h2>
              <span className="inline-block text-blue-400 font-semibold tracking-widest text-sm ">
                Innovate. Inspire. Impact.
              </span>
            </div>

            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              ICT Club of Kalika is Butwal&apos;s leading IT club and premier student-led technology organization. Founded in 2022 at Kalika Manavgyan Secondary School, we are a vibrant community of over 50 active members passionate about technology, innovation, and digital transformation across Nepal.
            </p>

            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Located in Rupandehi district, Lumbini Province, our club serves as the hub for IT education and innovation in Western Nepal. Through our flagship Digital Horizon program, we bring technology education to rural areas across Nepal, while organizing coding workshops, robotics training, AI sessions, and IT competitions throughout Butwal and beyond.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <div className="w-full h-[300px] sm:h-[380px] rounded-2xl overflow-hidden border border-blue-900/50 shadow-2xl bg-blue-950">
              <Image
                src="/team.avif"
                alt="ICT club of kalika installation"
                width={600}
                height={400}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="text-xl  font-semibold text-[#3bb6d5] text-center tracking-wide uppercase">
              ICT Club of Kalika Installation 2025
            </h3>
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
                    ) : ( "" 
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


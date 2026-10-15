import React from 'react'
import Image from 'next/image'

import {
  GraduationCap,
  Users,
  Award,
  Building2,
  ExternalLink,
  Monitor,
  Compass,
  BookOpen,
  Handshake,
  Sparkles,
  Rocket,
  ArrowRight,
  Mail
} from "lucide-react";


interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const stats = [
  { icon: <Users className="w-5 h-5 text-cyan-400" />, count: "7000+", label: "Students" },
  { icon: <Award className="w-5 h-5 text-blue-400" />, count: "50+", label: "Years of Excellence" },
  { icon: <Handshake className="w-5 h-5 text-indigo-400" />, count: "100%", label: "Alumni Success" },
  { icon: <GraduationCap className="w-5 h-5 text-purple-400" />, count: "10+", label: "Academic Programs" },
];

const benefits: Benefit[] = [
  {
    icon: <Monitor className="w-6 h-6 text-cyan-400" />,
    title: "State-of-the-Art Facilities",
    description: "Access to advanced computer labs, high-speed internet, and modern technology equipment for hands-on learning and project development.",
  },
  {
    icon: <Compass className="w-6 h-6 text-blue-400" />,
    title: "Expert Guidance",
    description: "Mentorship from experienced faculty members with expertise across various fields of information and communication technology.",
  },
  {
    icon: <BookOpen className="w-6 h-6 text-indigo-400" />,
    title: "Academic Integration",
    description: "Seamless integration of club activities with academic curriculum, providing practical application of classroom learning.",
  },
  {
    icon: <Sparkles className="w-6 h-6 text-amber-400" />,
    title: "Resource Support",
    description: "Financial and logistical support for organizing events, technical workshops, hackathons, and other club activities.",
  },
  {
    icon: <Building2 className="w-6 h-6 text-purple-400" />,
    title: "Community Engagement",
    description: "Opportunities to engage with the wider school community and showcase technological innovations and achievements.",
  },
  {
    icon: <Rocket className="w-6 h-6 text-pink-400" />,
    title: "Career Development",
    description: "Career counseling, college application support, and connections to alumni network for future academic and professional growth.",
  },
];

const page = () => {
  return (
    <div className='bg-[#0B1120]'>
      <section className="text-white relative overflow-hidden pb-8">
        <div className="relative h-[500px] hover:scale-105 w-full overflow-hidden pointer-events-none">
          <Image
            src="/partership.jpg"
            alt="Partnership"
            fill
            priority
            sizes="100vw"
            className="object-content  object-center "
          />
        </div>
        <div className="pointer-events-none absolute inset-0 z-10 bg-[#080d1e]/50" />

        <div className="relative z-10 mx-auto max-w-6xl space-y-20">
          <div className="flex flex-col justify-center items-center text-center gap-2 max-w-3xl mx-auto px-4 py-8">

            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-2xl font-semibold capitalize text-gray-500 tracking-wide ">
              Our Partners
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Empowering Dreams,{" "}
              <span className=" bg-cyan-400 bg-clip-text text-transparent">
                Anchored in Trust
              </span>
            </h2>

            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl font-normal">
              Building bridges between education and industry through strategic partnerships that empower our members with real-world experience, cutting-edge resources, and career opportunities.
            </p>
          </div>

          <div className="relative group rounded-3xl bg-gradient-to-b from-[#0F172A]/90 to-[#0F172A]/70 border border-gray-700 p-8 md:p-12 backdrop-blur-xl shadow-2xl  transition-all duration-500">

            <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-6">
              <div className="relative w-128 h-128 md:w-72 md:h-72 rounded-2xl bg-white/95 p-3 shadow-xl border border-white/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">

                <Image
                  src="/kmss.jpg"
                  alt="Kalika Manavgyan Secondary School"
                  width={200}
                  height={200}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="space-y-2">
                <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest  text-cyan-400">
                  Founding Partner
                </span>
                <h2 className="text-2xl md:text-4xl font-extrabold tracking-wide text-white uppercase">
                  Kalika Manavgyan Secondary School
                </h2>
              </div>

              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                Our founding institution providing educational excellence and innovative learning solutions. <strong className="text-white">Kalika Manavgyan Secondary School</strong> has been instrumental in establishing and supporting the ICT Club, providing resources, guidance, and opportunities for students to excel in information and communication technology.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-4 ">
                {stats.map((stat, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-900/50 border border-slate-800 flex flex-col items-center space-y-1">
                    <div className="p-2 rounded-lg bg-gray-950/60 ">
                      {stat.icon}
                    </div>
                    <span className="text-lg md:text-2xl font-black text-white">{stat.count}</span>
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider text-center">{stat.label}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <a
                  href="https://kalikaschool.edu.np"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-cyan-600  hover:bg-cyan-500 text-white font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <span>Visit School Website</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

            </div>
          </div>

          <div className="space-y-10">

            <div className="text-center space-y-3 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
                Partnership Benefits
              </h2>
              <p className="text-gray-400 text-sm md:text-base">
                How our strategic partnership with <span className="text-cyan-400 font-medium">Kalika Manavgyan Secondary School</span> empowers our members.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, idx) => {
                const isFeatured = idx === 0 || idx === 3;

                return (
                  <div
                    key={idx}
                    className={`group relative rounded-2xl p-7 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 shadow-xl flex flex-col justify-between  ${isFeatured
                      ? "md:col-span-2 lg:col-span-2 bg-gradient-to-br from-[#0F172A] via-[#0F172A]/90 to-cyan-950/30 "
                      : "col-span-1 bg-[#0F172A]/70 hover:bg-[#0F172A]/90 "
                      }`}
                  >
                    {isFeatured && (
                      <div className="absolute top-0 right-0 text-[10px] bg-gray-600 py-2 px-4 rounded-tr-2xl rounded-bl-2xl hover:scale-105 transition-all font-bold capitalize tracking-wider  text-cyan-400 ">
                        Key Benefit
                      </div>
                    )}

                    <div className="space-y-4">
                      <h3 className={`font-bold text-white group-hover:text-cyan-300 transition-colors ${isFeatured ? "text-2xl md:text-3xl" : "text-xl"}`}>
                        {benefit.title}
                      </h3>

                      <p className={`text-slate-400 leading-relaxed ${isFeatured ? "text-base md:text-lg max-w-2xl" : "text-sm"}`}>
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          <div className="relative rounded-3xl hover:animate-pulse  from-blue-950/80 via-[#0F172A]/90 to-slate-900/80 border border-blue-800/50 p-8 md:p-12 text-center overflow-hidden shadow-2xl backdrop-blur-xl">

            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white">
                Become Our Partner
              </h2>

              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                Interested in partnering with the ICT Club? We welcome collaborations with educational institutions, technology companies, and organizations that share our vision of empowering students through technology.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-cyan-400 hover:bg-cyan-500 text-white font-semibold shadow-lg shadow-cyan-500/25 transition-all duration-300"
                >
                  <Mail className="w-4 h-4" />
                  <span>Contact Us</span>
                </a>

                <a
                  href="#about"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-slate-800/80 hover:bg-slate-700/80 border border-slate-600 text-gray-200 hover:text-white font-semibold transition-all duration-300"
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
  )
}

export default page
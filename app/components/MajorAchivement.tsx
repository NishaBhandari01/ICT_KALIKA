import React from "react";
import Image from "next/image";

interface Achievement {
  image: string;
  tag: string;
  title: string;
  description: string;
  stat?: string;
}

const achievements: Achievement[] = [
  {
    image: "/digital-horizons.png", 
    tag: "Flagship Initiative",
    title: "Digital Horizon Program",
    description: "Successfully conducted 3-day technology mentorship programs in Syangja and Palpa, bringing IT education to rural areas of Nepal.",
    stat: "Rural Outreach"
  },
  {
    image: "/IT FEST.avif",
    tag: "Competition",
    title: "IT Fest Champions",
    description: "Won the championship title at IT Fest 2082 organized by the Interact Club of Valmiki.",
    stat: "Champions"
  },
  {
    image: "/AI GUFF.avif",
    tag: "Tech Session",
    title: "AI Guff Workshop",
    description: "Hosted an exclusive AI career roadmap session featuring industry expert Er. Sanjok Gyawali.",
    stat: "200+ Participants"
  },
  {
    image: "/resume-building.avif",
    tag: "Development",
    title: "Resume Building Workshop",
    description: "Partnered with the NextGen Innovator Club for professional career and skill-building workshops.",
    stat: "Skill Training"
  },
  {
    image: "/team.avif",
    tag: "Leadership",
    title: "Installation Ceremony 2025",
    description: "Successfully transitioned and installed new leadership under President Siddhant Panthi.",
    stat: "New Board"
  },
  {
    image: "/student-reach.png",
    tag: "Community",
    title: "Student Reach",
    description: "Expanded our technological footprint, reaching eager students across Butwal and various regions of Nepal.",
    stat: "500+ Students"
  },
];

export default function MajorAchievements() {
  return (
    <section className="py-20 px-4 md:px-8 text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-16 relative z-10">

        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
            Major Achievements <br/>  <span className="text-[#05F2DB]">& Impact</span>
          </h2>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            As Butwal&apos;s leading IT club, we&apos;ve driven significant technological transformation and community impact across Nepal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, index) => {
            const isFeatured = index === 0;

            return (
              <div 
                key={index}
                className={`group relative bg-[#0F172A]/70 hover:bg-[#0F172A]/90 hover:scale-105 hover:rotate-1 rounded-2xl p-6 transition-all duration-300 shadow-xl flex flex-col justify-between overflow-hidden ${
                  isFeatured ? "md:col-span-2 lg:col-span-2 bg-gradient-to-br from-[#0F172A]/90 via-[#0F172A]/70 to-blue-950/40" : ""
                }`}
              >
                <div>
                  <div className="text-[12px] mb-4 absolute bg-white rounded-tr-xl right-0 top-0 py-2 px-4 rounded-bl-2xl font-semibold text-[#0F172A]/70 tracking-wide z-10">
                    {item.tag}
                  </div>

                  <div className="w-full h-44 rounded-xl overflow-hidden mb-4 relative bg-blue-950 border border-slate-700/50">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={500}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {item.stat && (
                    <div className="flex justify-end mb-2">
                      <span className="text-xs font-semibold tracking-wide text-gray-400 border-l border-slate-700 pl-3 py-0.5">
                        {item.stat}
                      </span>
                    </div>
                  )}

                  <div className="space-y-1 mb-3 relative">
                    <h3 className="text-lg md:text-xl font-bold text-teal-300 group-hover:text-white tracking-wide">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}



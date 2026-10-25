"use client"

import React, { useState } from "react";
import { X as CloseIcon } from "lucide-react";
import Image from "next/image";


export type Socials = {
    github?: string;
    linkedin?: string;
    facebook?: string;
    instagram?: string;
    youtube?: string;
    email?: string;
    x?: string;
    website?: string;
};

export type Member = {
    name?: string;
    role?: string;
    image?: string;
    socials?: Socials;
    bio?: string;
    skills?: string[];
};

export type MemberCategory = {
    category: string;
    tag?: string;
    members: Member[];
};

interface CardProps {
    membersData: MemberCategory[];
}

export const MemberShowcase: React.FC<CardProps> = ({ membersData }) => {
    const [selectedMember, setSelectedMember] = useState<Member | null>(null);


    const renderSocialIcon = (platform: string, url: string) => {
        if (!url) return null;
        const finalUrl = platform === "email" ? `mailto:${url}` : url;

        switch (platform) {
            case "instagram":
                return (
                    <a
                        key={platform}
                        href={finalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit Instagram page"
                        className="flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-blue-400 hover:bg-white/5 transition-all duration-300"
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5" aria-hidden="true">
                            <rect x="3" y="3" width="18" height="18" rx="5" />
                            <circle cx="12" cy="12" r="4" />
                            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                        </svg>
                    </a>
                );

            case "github":
                return (
                    <a
                        key={platform}
                        href={finalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit GitHub page"
                        className="flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-blue-400 hover:bg-white/5 transition-all duration-300"
                    >
                        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                            <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.31-3.76-1.31-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.7 1.15 1.7 1.15.99 1.7 2.6 1.21 3.23.92.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.51 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.06 1.14a10.65 10.65 0 0 1 5.57 0c2.12-1.44 3.06-1.14 3.06-1.14.61 1.54.23 2.68.11 2.96.72.78 1.15 1.77 1.15 2.99 0 4.28-2.62 5.22-5.11 5.5.4.35.75 1.02.75 2.06v3.08c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
                        </svg>
                    </a>
                );


            case "linkedin":
                return (
                    <a
                        key={platform}
                        href={finalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit LinkedIn page"
                        className="flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-blue-400 hover:bg-white/5 transition-all duration-300"
                    >
                        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM7.119 20.452H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
                        </svg>
                    </a>
                );


            case "facebook":
                return (
                    <a
                        key={platform}
                        href={finalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit Facebook page"
                        className="flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-blue-400 hover:bg-white/5 transition-all duration-300"
                    >
                        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                            <path d="M13.4 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.4-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.3V13h2.8v8h3.3Z" />
                        </svg>
                    </a>
                );


            case "x":
                return (
                    <a
                        key={platform}
                        href={finalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit X profile"
                        className="flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-blue-400 hover:bg-white/5 transition-all duration-300"
                    >
                        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                    </a>
                );

            case "email":
                return (
                    <a
                        key={platform}
                        href={finalUrl}
                        aria-label="Send Email"
                        className="flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-blue-400 hover:bg-white/5 transition-all duration-300"
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5" aria-hidden="true">
                            <rect width="20" height="16" x="2" y="4" rx="2" />
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                    </a>
                );


            case "website":
        
        
            case "web":
                return (
                    <a
                        key={platform}
                        href={finalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit Website"
                        className="flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-blue-400 hover:bg-white/5 transition-all duration-300"
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5" aria-hidden="true">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                            <path d="M2 12h20" />
                        </svg>
                    </a>
                );


            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-[#0B1120] text-white p-6 md:p-12">
            <div className="max-w-6xl mx-auto space-y-12">
                {membersData.map((cat, idx) => (
                    <div key={idx} className="space-y-6">

                        <h2 className="text-2xl md:text-3xl font-bold text-center capitalize tracking-wide text-white">
                            {cat.category.replace(/_/g, " ")}
                        </h2>

                        <p className="max-w-2xl text-center mx-auto text-gray-400">{cat?.tag}</p>

                        <div className="flex flex-wrap justify-center gap-4">
                            {cat.members.map((member, mIdx) => (
                                <div
                                    key={mIdx}
                                    onClick={() => setSelectedMember(member)}
                                    className="w-full sm:w-[calc(50%-8px)] md:w-[calc(33.333%-11px)] lg:w-[calc(25%-12px)] bg-[#0F172A]/70 hover:bg-[#0F172A]/90 border border-slate-700/50 hover:border-slate-500/80 backdrop-blur-md hover:backdrop-blur-xl rounded-xl p-5 text-center cursor-pointer transform hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-black/50 hover:shadow-2xl flex flex-col items-center justify-center space-y-2 group"
                                >

                                    <div className="w-20 h-20 rounded-full overflow-hidden bg-blue-950 flex items-center justify-center text-lg font-bold border border-white/10 group-hover:border-blue-400/40 transition-colors duration-300">
                                        {member.image ? (
                                            <Image
                                                src={member.image}
                                                alt={member.name ?? "Team member"}
                                                width={500}
                                                height={500}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <span>{member.name ? member.name.charAt(0) : "M"}</span>
                                        )}
                                    </div>

                                    <div>
                                        <h3 className="font-semibold md:text-base text-gray-100 capitalize tracking-wide group-hover:text-white transition-colors duration-200">
                                            {member.name}
                                        </h3>
                                        <p className="text-[11px] text-[#aaa] font-semibold mt-0.5 tracking-wide group-hover:text-blue-300 transition-colors duration-200">
                                            {member.role || "Member"}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>


            {selectedMember && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
                    <div className="relative w-full max-w-md bg-gray-900 border border-black rounded-2xl p-6 text-center text-white shadow-2xl space-y-5">
                        <button
                            onClick={() => setSelectedMember(null)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-white p-1 rounded-full hover:bg-white/10 transition"
                        >
                            <CloseIcon className="w-5 h-5" />
                        </button>


                        <div className="w-44 h-44    mx-auto rounded-full overflow-hidden border-2 border-white/50 shadow-md bg-blue-950 flex items-center justify-center text-2xl font-bold">
                            {selectedMember.image ? (
                                <Image
                                    src={selectedMember.image}
                                    alt={selectedMember.name ?? "Team member"}
                                    width={500}
                                    height={500}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <span>{selectedMember.name ? selectedMember.name.charAt(0) : "M"}</span>
                            )}
                        </div>

                        <div>
                            <h2 className="text-xl md:text-2xl font-bold tracking-wide uppercase">
                                {selectedMember.name}
                            </h2>
                            <p className="text-blue-400 font-semibold text-sm  mt-1">
                                {selectedMember.role || "Member"}
                            </p>
                        </div>

                        {selectedMember.bio && (
                            <p className="text-gray-300 text-sm font-semibold leading-relaxed px-2">
                                {selectedMember.bio}
                            </p>
                        )}


                        {selectedMember.skills && selectedMember.skills.length > 0 && (
                            <div className="space-y-2 pt-2">
                                <h4 className="text-[16px] font-semibold capitalize tracking-wide text-gray-400">
                                    Skills
                                </h4>
                                <div className="flex flex-wrap justify-center gap-2">
                                    {selectedMember.skills.map((skill, index) => (
                                        <span key={index} className="px-3 py-1 text-xs font-semibold tracking-wide bg-[#726f6f] text-gray-300 rounded-full">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}


                        {selectedMember.socials && Object.keys(selectedMember.socials).length > 0 && (
                            <div className="flex flex-wrap justify-center items-center gap-2 pt-3">
                                {Object.entries(selectedMember.socials).map(([platform, url]) =>
                                    url ? renderSocialIcon(platform, url) : null
                                )}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};
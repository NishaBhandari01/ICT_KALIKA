"use client";

import { useParams, useRouter } from "next/navigation";
import { eventDetailsData } from "@/data/even-details";
import EventGalleryCarousel from '@/app/components/carousel'
import {
    Calendar,
    MapPin,
    Users,
    ArrowLeft,
    CheckCircle2,
} from "lucide-react";

export default function EventDetailPage() {
    const params = useParams();
    const router = useRouter();

    const id = params?.id as string;
    const event = id ? eventDetailsData[id] : null;

    if (!event) {
        return (
            <div className="min-h-screen bg-[#080d1e] text-white flex flex-col items-center justify-center p-6 space-y-4">
                <h1 className="text-2xl font-bold text-red-400">Event Not Found</h1>
                <p className="text-gray-400 text-sm">The event you are looking for does not exist or has been removed.</p>
                <button
                    onClick={() => router.back()}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-cyan-600 hover:bg-cyan-500 text-white font-semibold transition-all shadow-lg shadow-cyan-500/20"
                >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Go Back</span>
                </button>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-[#080d1e] text-white py-12 px-4 md:px-8 relative overflow-hidden">

            <div className="max-w-5xl mx-auto space-y-10 relative z-10">

                <div className="space-y-4 text-center md:text-left">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white uppercase leading-tight">
                        {event.title}
                    </h1>
                </div>

                {event.galleryImages && event.galleryImages.length > 0 && (
                    <div className="space-y-3">
                        <EventGalleryCarousel images={event.galleryImages} altPrefix={event.title} />
                    </div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    <div className="lg:col-span-2 space-y-6  p-6 md:p-8 rounded-3xl backdrop-blur-xl shadow-xl">
                        <div>
                            <h2 className="text-xl font-bold text-white border-b-2 border-slate-800 pb-3">
                                About the Event
                            </h2>

                            <div className="space-y-4 mt-4 text-slate-300 text-sm md:text-base leading-relaxed">
                                {event.fullDescription.map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col items-start justify-center md:justify-start gap-3 pt-2 text-xs sm:text-sm font-medium">
                            <span className="flex items-center gap-6  text-cyan-600 ">
                                <Calendar className="w-6 h-6 text-gray-400" />
                                {event.date}
                            </span>
                            <span className="flex items-center gap-6  text-cyan-600">
                                <MapPin className="w-6 h-6 text-gray-400" />
                                {event.location}
                            </span>
                            <span className="flex items-center gap-6  text-cyan-600 ">
                                <Users className="w-6 h-6 text-gray-400" />
                                {event.participants}
                            </span>
                        </div>

                    </div>


                    <div className="space-y-6 bg-[#0F172A]/70  p-6 md:p-8 rounded backdrop-blur-xl shadow-xl flex flex-col justify-between">
                        <div>
                            <h2 className="text-xl font-bold text-white border-b-2 border-slate-800 pb-3 mb-4">
                                Key Highlights
                            </h2>

                            <ul className="space-y-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                                {event.keyHighlights.map((highlight, index) => (
                                    <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                                        <span className="leading-snug">{highlight}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="w-full h-[2px] bg-amber-50"></div>

                        <div className=" text-center">
                            <span className="text-xs text-cyan-500 font-semibold">
                                ICT Club of Kalika {" - "} <span className="text-slate-400">Executive Tenure</span>
                            </span>
                        </div>
                    </div>

                </div>

            </div>
        </main>
    );
}
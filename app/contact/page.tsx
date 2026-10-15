"use client";

import React, { useState } from 'react';
import { Mail, MapPin, ChevronUp, Loader2, ArrowBigLeft, ArrowLeft, ArrowRight } from 'lucide-react';
import { toast } from 'react-hot-toast';

interface FormDataState {
    name: string;
    email: string;
    phone: string;
    message: string;
}

export default function ContactSection() {
    const [loading, setLoading] = useState<boolean>(false);
    const [formData, setFormData] = useState<FormDataState>({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        if (name === 'message' && value.length > 1000) return;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        console.log(
            "i am running"
        )
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (!res.ok) {
                toast.error(data.message || "Failed to send message. Please try again.");
                return;
            }

            toast.success("Message sent successfully!");

            setFormData({
                name: "",
                email: "",
                phone: "",
                message: "",
            });
        } catch (error) {
            console.error(error);
            toast.error("Unable to send message.");
        } finally {
            setLoading(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="bg-[#0B1120]">
            <section className="relative text-slate-200 py-16 px-6 md:px-16 min-h-screen flex items-center justify-center">
                <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <div className="space-y-6">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-[#00F0FF] to-[#2563EB] bg-clip-text text-transparent">
                            Let&apos;s connect
                        </h2>
                        <p className="text-slate-400 text-base md:text-lg max-w-md leading-relaxed">
                            Have an exciting idea or just want to say hello? We&apos;re here to collaborate and create something amazing together.
                        </p>

                        <p className="text-sm text-slate-400 font-medium">Choose your preferred way to reach us</p>

                        <div className="space-y-4 pt-2">
                            <div className="flex items-center space-x-4">
                                <div className="w-10 h-10 rounded-lg bg-[#162032] flex items-center justify-center text-slate-300">
                                    <Mail className="w-5 h-5 text-slate-400" />
                                </div>
                                <a
                                    href="mailto:ictkalika82@gmail.com"
                                    className="inline-flex items-center gap-2 rounded-lg py-3 text-white hover:text-[#00F0FF] transition-colors"
                                >
                                    ictkalika82@gmail.com
                                </a>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="w-10 h-10 rounded-lg bg-[#162032] flex items-center justify-center text-slate-300">
                                    <MapPin className="w-5 h-5 text-slate-400" />
                                </div>
                                <span className="text-slate-300 text-sm md:text-base">Butwal, Nepal</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#121a2c]  rounded-2xl p-6 md:p-8 shadow-2xl relative">
                        <form onSubmit={handleSubmit} className="space-y-5">

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label className="block text-xs font-semibold text-slate-300">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        placeholder="Your name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full bg-[#182237] border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#35787c] transition-colors"
                                    />
                                </div>

                                <div className="space-y-1.5">
                                    <label className="block text-xs font-semibold text-slate-300">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        placeholder="you@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full bg-[#182237] border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#35787c] transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label className="block text-xs font-semibold text-slate-300">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="+977 98XXXXXXXX"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full bg-[#182237] border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#35787c] transition-colors"
                                />
                            </div>

                            <div className="space-y-1.5 relative">
                                <label className="block text-xs font-semibold text-slate-300">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    required
                                    rows={4}
                                    placeholder="Your message here..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-[#182237] border border-slate-800 rounded-lg p-3 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#35787c] transition-colors resize-none"
                                />
                                <span className="absolute right-3 bottom-3 text-[11px] text-slate-500 pointer-events-none">
                                    {formData.message.length}/1000
                                </span>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-3 px-6 rounded-lg font-semibold text-white bg-[#319097] hover:opacity-95 transition-opacity shadow-lg shadow-blue-500/10 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                        <span>Sending...</span>
                                    </>
                                ) : (
                                    <>
                                        <span>Send Message</span>
                                        <ArrowRight className="w-4 h-4 text-black/90 " />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>

                </div>

                <button
                    onClick={scrollToTop}
                    aria-label="Scroll to top"
                    className="fixed bottom-6 right-6 w-10 h-10 rounded-xl bg-[#162032] border border-slate-800 flex items-center justify-center text-slate-300 hover:bg-[#1f2b42] transition-colors shadow-lg cursor-pointer"
                >
                    <ChevronUp className="w-5 h-5" />
                </button>
            </section>

            <section className="px-6 py-16 text-white">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-8 text-center">
                        <h2 className="text-3xl font-bold md:text-4xl">
                            Visit ICT Club of Kalika
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
                                className="mt-6 inline-flex w-fit items-center gap-2 rounded-lg bg-[#4ea4cb] px-5 py-3 font-medium transition hover:bg-[#417993]"
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
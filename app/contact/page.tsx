"use client"

import React, { useState } from 'react';
import { Mail, MapPin, ChevronUp } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        if (name === 'message' && value.length > 1000) return;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div>
            <Navbar />
            <section className="relative bg-[#0d1322] text-slate-200 py-16 px-6 md:px-16 min-h-screen flex items-center justify-center">
                <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Column: Info */}
                    <div className="space-y-6">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-[#00F0FF] to-[#2563EB] bg-clip-text text-transparent">
                            Let's Connect
                        </h2>
                        <p className="text-slate-400 text-base md:text-lg max-w-md leading-relaxed">
                            Have an exciting idea or just want to say hello? We're here to collaborate and create something amazing together.
                        </p>

                        <div className="space-y-4 pt-2">
                            <div className="flex items-center space-x-4">
                                <div className="w-10 h-10 rounded-lg bg-[#162032] flex items-center justify-center text-slate-300">
                                    <Mail className="w-5 h-5 text-slate-400" />
                                </div>
                                <span className="text-slate-300 text-sm md:text-base">ictkalika82@gmail.com</span>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="w-10 h-10 rounded-lg bg-[#162032] flex items-center justify-center text-slate-300 ">
                                    <MapPin className="w-5 h-5 text-slate-400" />
                                </div>
                                <span className="text-slate-300 text-sm md:text-base">Butwal, Nepal</span>
                            </div>
                        </div>
                    </div>


                    <div className="bg-[#121a2c] border border-slate-800/80 rounded-2xl p-6 md:p-8 shadow-2xl relative">
                        <form onSubmit={handleSubmit} className="space-y-5">


                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label className="block text-xs font-medium text-slate-300">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        placeholder="Your name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full bg-[#182237] border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#00F0FF] transition-colors"
                                    />
                                </div>

                                <div className="space-y-1.5">
                                    <label className="block text-xs font-medium text-slate-300">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        placeholder="you@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full bg-[#182237] border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#00F0FF] transition-colors"
                                    />
                                </div>
                            </div>


                            <div className="space-y-1.5">
                                <label className="block text-xs font-medium text-slate-300">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="+977 98XXXXXXXX"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full bg-[#182237] border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#00F0FF] transition-colors"
                                />
                            </div>


                            <div className="space-y-1.5 relative">
                                <label className="block text-xs font-medium text-slate-300">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    required
                                    rows={4}
                                    placeholder="Your message here..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-[#182237] border border-slate-800 rounded-lg p-3 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#00F0FF] transition-colors resize-none"
                                />
                                <span className="absolute right-3 bottom-3 text-[11px] text-slate-500 pointer-events-none">
                                    {formData.message.length}/1000
                                </span>
                            </div>


                            <button
                                type="submit"
                                className="w-full py-3 px-6 rounded-lg font-semibold text-white bg-gradient-to-r from-[#2563EB] to-[#319097] hover:opacity-95 transition-opacity shadow-lg shadow-blue-500/10 cursor-pointer"
                            >
                                Send Message
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
            <Footer />

        </div>

    );
}
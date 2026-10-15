
"use client";

import Image from "next/image";

const Hero = () => {
    return (
        <section className="min-h-screen bg-[#0B1120] text-[#ebe6e2]">
            <div className="mx-auto flex  w-full max-w-7xl flex-col items-start justify-start gap-22 px-6 pt-20 md:flex-row md:gap-26">

                <div id="social-media" className="flex flex-row w-[1/4] items-center justify-center  gap-6 md:flex-col md:gap-8">

                    <a
                        href="https://www.instagram.com/ictkalika/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit our Instagram page"
                        className="flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300  "
                    >
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            className="h-6 w-6"
                            aria-hidden="true"
                        >
                            <rect x="3" y="3" width="18" height="18" rx="5" />
                            <circle cx="12" cy="12" r="4" />
                            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                        </svg>
                    </a>

                    <a
                        href="https://github.com/ictkalika"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit our GitHub page"
                        className="flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300 "
                    >
                        <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-6 w-6"
                            aria-hidden="true"
                        >
                            <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.31-3.76-1.31-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.7 1.15 1.7 1.15.99 1.7 2.6 1.21 3.23.92.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.51 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.06 1.14a10.65 10.65 0 0 1 5.57 0c2.12-1.44 3.06-1.14 3.06-1.14.61 1.54.23 2.68.11 2.96.72.78 1.15 1.77 1.15 2.99 0 4.28-2.62 5.22-5.11 5.5.4.35.75 1.02.75 2.06v3.08c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
                        </svg>
                    </a>

                    <a
                        href="https://www.linkedin.com/company/ictkalika/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit our LinkedIn page"
                        className="flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-6 w-6"
                            aria-hidden="true"
                        >
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM7.119 20.452H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
                        </svg>
                    </a>

                    <a
                        href="https://www.facebook.com/ictkalika"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit our Facebook page"
                        className="flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300 "
                    >
                        <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-6 w-6"
                            aria-hidden="true"
                        >
                            <path d="M13.4 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.4-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.3V13h2.8v8h3.3Z" />
                        </svg>
                    </a>
                </div>

                <div className="flex flex-col items-center justify-center">

                    <div className="relative flex h-80 w-80 items-center justify-center">
                        <div className="absolute h-72 w-72 animate-[spin_12s_linear_infinite] rounded-full border border-[#05F2DB]/30 rotate-[-25deg] ">

                            <div className="absolute -top-5 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-[#05F2DB]/40 bg-[#0B1120] shadow-[0_0_15px_#05F2DB40]">
                                <Image
                                    src="/cpu.png"
                                    alt="CPU"
                                    width={24}
                                    height={24}
                                    className="h-6 w-6 object-contain"
                                />
                            </div>

            
                            <div className="absolute right-0 top-1/2 flex h-10 w-10 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#05F2DB]/40 bg-[#0B1120] text-xl shadow-[0_0_15px_#05F2DB40]">
                                {'</>'}
                            </div>

                            <div className="absolute bottom-0 left-1/2 flex h-10 w-10 -translate-x-1/2 translate-y-1/2 items-center justify-center rounded-full border border-[#05F2DB]/40 bg-[#0B1120] shadow-[0_0_15px_#05F2DB40]">
                                <Image
                                    src="/rocket.png"
                                    alt="Rocket"
                                    width={24}
                                    height={24}
                                    className="h-6 w-6 object-contain"
                                />
                            </div>

                  
                            <div className="absolute left-0 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#05F2DB]/40 bg-[#0B1120] shadow-[0_0_15px_#05F2DB40]">
                                <Image
                                    src="/innovation.png"
                                    alt="Innovation"
                                    width={24}
                                    height={24}
                                    className="h-6 w-6 object-contain"
                                />
                            </div>

                        </div>

                        <div className="absolute h-56 w-56 animate-[spin_8s_linear_infinite_reverse] rounded-full border border-dashed border-[#05F2DB]/20">

                            <div className="absolute -top-3 left-1/2 h-6 w-6 -translate-x-1/2 rounded-full bg-[#05F2DB] shadow-[0_0_20px_#05F2DB]" />

                            <div className="absolute bottom-8 -right-5 h-3 w-3 rounded-full bg-cyan-200 shadow-[0_0_15px_#05F2DB]" />
                        </div>

                        <div className="relative h-40 w-40 overflow-hidden rounded-full border-2 border-[#05F2DB]/50 bg-[#0B1120] shadow-[0_0_35px_#05F2DB25] sm:h-44 sm:w-44">
                            <Image
                                src="/logo.avif"
                                alt="ICT Club of Kalika logo"
                                fill
                                priority
                                sizes="176px"
                                className="rounded-full object-contain"
                            />
                        </div>

                    </div>

                    <h1 className="mt-6 text-center text-4xl font-extrabold tracking-tight bg-gradient-to-r from-[#00F0FF] to-[#2563EB] bg-clip-text text-transparent sm:text-5xl">
                        ICT Club of Kalika
                    </h1>

                    <p className="mt-3 max-w-md text-center text-sm leading-7 text-gray-400 sm:text-base">
                        Innovating, collaborating, and building a smarter digital future.
                    </p>
                </div>

                <div className="flex max-w-sm flex-col items-center text-center md:items-start md:text-left ">

                    <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">
                        Turning Ideas Into{" "}
                        <span className="text-[#05F2DB]">Innovation.</span>
                    </h2>

                    <span className=" my-4 text-xl text-[#949DAB]">
                        Innovate. Inspire. Impact.
                    </span>




                    <a href="/events" className="mt-4 inline-flex items-center rounded-3xl bg-[#05F2DB] px-6 py-3 font-semibold text-[#0B1120] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#05F2DB]/20">
                        Explore  Events →
                    </a>



                </div>

            </div>
            <div className="mt-12 flex  gap-32 justify-center sm:grid-cols-3 max-w-7xl mx-auto ">

                <div className="flex flex-col items-center justify-center rounded-xl p-4 text-center transition-transform duration-300 hover:-translate-y-1">
                    <div className="relative h-16 w-16">
                        <Image
                            src="/users.png"
                            alt="Active members"
                            fill
                            sizes="64px"
                            className="object-contain"
                        />
                    </div>
                    <h2 className="mt-3 text-2xl font-bold text-[#05F2DB]">83+</h2>
                    <p className="mt-1 text-sm text-gray-400 uppercase">Active Members</p>
                </div>

                <div className="flex flex-col items-center  justify-center rounded-xl p-4 text-center transition-transform duration-300 hover:-translate-y-1">
                    <div className="relative h-16 w-16">
                        <Image
                            src="/event.png"
                            alt="Events held"
                            fill
                            sizes="64px"
                            className="object-contain"
                        />
                    </div>
                    <h2 className="mt-3 text-2xl font-bold text-[#05F2DB]">50+</h2>
                    <p className="mt-1 text-sm text-gray-400 uppercase">Events Held</p>
                </div>


                <div className="flex flex-col items-center justify-center rounded-xl p-4 text-center transition-transform duration-300 hover:-translate-y-1">
                    <div className="relative h-16 w-16">
                        <Image
                            src="/impact.png"
                            alt="Students impacted"
                            fill
                            sizes="64px"
                            className="object-contain"
                        />
                    </div>
                    <h2 className="mt-3 text-2xl font-bold text-[#05F2DB]">500+</h2>
                    <p className="mt-1 text-sm text-gray-400 uppercase">Students Impacted</p>
                </div>

            </div>

        </section>
    );
};

export default Hero;

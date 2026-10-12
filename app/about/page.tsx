import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image from 'next/image'

const page = () => {
    return (
        <div>
            <Navbar />

            <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0d1322] px-6 py-16 text-slate-200 md:px-16">
                <Image
                    src="/kmss-ground.jpg"
                    alt="Technology background"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                />

                <div className="absolute inset-0 z-[1] bg-[#0B1120]/75" />


                <div className="absolute left-6 top-6 z-10 md:left-16 md:top-10">
                    <Image
                        src="/logo.avif"
                        alt="ICT Club logo"
                        width={80}
                        height={80}
                        className="h-38 w-38 object-contain md:h-40 md:w-40"
                    />
                </div>

                <div className="absolute right-6 top-6 z-10 md:right-16 md:top-10">
                    <Image
                        src="/school-logo.png"
                        alt="School logo"
                        width={120}
                        height={120}
                        className="h-38 w-38 object-contain md:h-40 md:w-40"
                    />
                </div>

                <div className="relative z-10 mx-auto max-w-4xl text-center">
                    <h1 className="bg-gradient-to-r from-[#05F2DB] to-[#2563EB] bg-clip-text text-4xl font-extrabold text-transparent sm:text-6xl">
                        ICT Club of Kalika
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                        Innovating the future through technology and collaboration
                    </p>
                </div>
            </section>

            <section className="relative overflow-hidden bg-[#0d1322] px-6 py-20 text-slate-200 sm:py-24 md:px-16">
                <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-[#05F2DB]/5 blur-[100px]" />
                <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-blue-600/10 blur-[100px]" />

                <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
                    <div>

                        <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                            Why We{" "}
                            <span className="bg-gradient-to-r from-[#05F2DB] to-[#2563EB] bg-clip-text text-transparent">
                                Exist?
                            </span>
                        </h2>

                        <p className="mt-8 text-base leading-8 text-slate-400 sm:text-lg">
                            We believe every student has the potential to create something
                            extraordinary through technology. Our purpose is to turn curiosity
                            into knowledge, ideas into innovation, and learners into future
                            technology leaders.
                        </p>
             

                        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
                       
                            <div className="rounded-xl  bg-white/[0.03] p-5 transition-all duration-200 flex flex-col justify-center items-center  hover:bg-blue-500/[0.04]">
                                <div className="mb-5 flex h-24 w-24 items-center justify-center">
                                    <Image
                                        src="/learn.png"
                                        alt="Learn and explore"
                                        width={86}
                                        height={86}
                                        className="object-contain"
                                    />
                                </div>

                                <h3 className="text-lg font-bold text-white">
                                    Learn & Explore
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-slate-400">
                                    Discover new technologies and develop practical skills beyond the classroom.
                                </p>
                            </div>

                            <div className=" rounded-xl  bg-white/3 p-5 transition-all duration-200  flex flex-col justify-center items-center hover:bg-blue-500/4">
                                <div className="mb-5 flex h-24 w-24 items-center justify-center ">
                                    <Image
                                        src="/built.png"
                                        alt="Build and innovate"
                                        width={86}
                                        height={86}
                                        className="object-contain"
                                    />
                                </div>

                                <h3 className="text-lg font-bold text-white">
                                    Build & Innovate
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-slate-400">
                                    Collaborate on meaningful projects and transform creative ideas into reality.
                                </p>
                            </div>
                        </div>
                    </div>


                    <div className="relative">

                        <div className="relative overflow-hidden rounded-3xl  bg-[#111a2c]/90 p-7 shadow-2xl shadow-black/20 sm:p-10">

                            <span className="text-3xl font-semibold text-[#05F2DB]">
                                Our Story
                            </span>

                            <div className="mt-8 space-y-6 text-sm leading-7 text-slate-400 sm:text-base">
                                <p>
                                    Established in <span className="font-semibold text-white">2079</span>,
                                    the ICT Club of Kalika brings together technology enthusiasts,
                                    innovators, and future leaders to learn, create, and grow together.
                                </p>

                                <p>
                                    What began as a vision to make technology more accessible has
                                    grown into a community where students share knowledge, explore
                                    emerging technologies, and turn their ideas into practical projects.
                                </p>

                                <p>
                                    Through workshops, seminars, competitions, and collaborative
                                    projects, we bridge the gap between classroom learning and
                                    real-world application.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default page

import members from "@/data/member";
import { MemberShowcase } from "../components/MemberCard";


const page = () => {
    return (

        <div className="bg-[#0B1120]">
            <section className="relative  text-slate-200 py-20 px-6 md:px-16 overflow-hidden">

                <div className="max-w-4xl mx-auto text-center relative z-10 space-y-4">


                    <h2 className="text-4xl md:text-4xl font-semibold tracking-tight text-white uppercase">
                        Our <span className="bg-[#00F0FF]  bg-clip-text text-transparent">Team</span>
                    </h2>

                    <div className="inline-flex items-center gap-2   text-xs font-semibold text-[#74797a]  tracking-wider">
                        <span>United to Grow Together</span>
                    </div>
                    <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                        Meet the passionate individuals who drive innovation and excellence in the ICT Club. Our diverse team brings together unique skills, perspectives, and experiences to create an inspiring learning environment.
                    </p>
                </div>
            </section>
            <main className="min-h-screen">
                <MemberShowcase membersData={members} />
            </main>
        </div>
    )
}

export default page
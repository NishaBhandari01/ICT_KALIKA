"use client";

import  { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

interface FAQItem {
    question: string;
    answer: string;
}

const faqData: FAQItem[] = [
    {
        question: 'How can i join the ICT Club ?',
        answer: 'You can join the ICT Club by attending our orientation sessions held at the beginning of each semester. Simply fill out the membership form at membership.ictkalika.tech and participate in our activities. We welcome students from all backgrounds who are passionate about technology.',
    },
    {
        question: 'What activities does the club organize?',
        answer: 'We organize a wide range of activities including workshops on programming languages, web development seminars, AI/ML sessions, coding competitions, hackathons, tech talks by industry experts, and collaborative projects. We also participate in inter-college competitions and organize annual tech fests.',
    },
    {
        question: 'Do i need prior programming experience to join?',
        answer: 'Not at all! We welcome members of all skill levels, from complete beginners to advanced programmers. Our club provides learning opportunities for everyone, with mentorship programs and beginner-friendly workshops to help you get started.',
    },
    {
        question: 'What are the membership fees?',
        answer: 'The annual membership fee is minimal and covers club activities, resources, and event participation.',
    },
    {
        question: "How often does the club meet ?",
        answer: 'We have regular weekly meetings on the 1st and 3rd Friday of each month, along with special sessions for workshops and events. The schedule is flexible and announced in advance through our communication channels.',
    },
    {
        question: 'Can i propose my own project or workshop?',
        answer: 'We encourage members to propose their own projects, workshop topics, or event ideas. Our club thrives on member initiatives and we provide support and resources to help bring your ideas to life.',
    },
    {
        question: 'What career opportunities does the club provide?',
        answer: 'The club offers networking opportunities with alumni working in top tech industries, internship referrals, career guidance sessions, resume building workshops, and connections with industry professionals. Many of our alumni have secured positions at leading technology companies.',
    },
    {
        question: "How can i stay updated with club activities ?",
        answer: 'You can stay updated through our official email list (ictkalika82@gmail.com), social media channels, and our club website. We also have a discord server for members and send regular newsletters about upcoming events and opportunities.',
    },
];


export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const toggleItem = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (

        <div className='bg-[#0B1120]'>
            <section className=' text-slate-200 min-h-screen py-10 px-4 md:px-16'>
                <div className='text-center mb-12'>
                    <h2 className='text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-3'>Frequently Asked Questions</h2>
                </div>
                <div className='max-w-4xl space-y-4 mx-auto w-full'>
                    {
                        faqData.map((faq, index) => {
                            const isOpen = openIndex === index;
                            return (
                                <div key={index} className=' border border-slate-800/80 rounded-2xl'>
                                    <button onClick={() => toggleItem(index)} className='flex items-center justify-between py-4 px-2 w-full'>
                                        <span className="text-sm md:text-base font-semibold text-slate-200">
                                            {faq.question}
                                        </span>
                                        <ChevronDown className={`w-5 h-5 text-blue-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
                                    </button>
                                    <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 pb-5 px-4' : 'grid-rows-[0fr] opacity-0 px-4'}`}>
                                        <div className='overflow-hidden'>
                                            <p className="text-sm md:text-base text-slate-400 leading-relaxed pt-2 border-slate-800/60">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='flex flex-col justify-center items-center gap-4 mt-14'>
                    <h2 className='text-2xl font-semibold'>Still have questions?</h2>
                    <p className='text-gray-400'>Feel free to reach out to us directly. We're here to help!</p>

                    <Link href="/contact" className="flex min-w-0 items-center gap-3">
                        <button className='py-2 px-4 rounded-3xl border border-slate-500 bg-[#1DBED3]/10'>Contact Us</button>
                    </Link>

                </div>
            </section>
        </div>
    )
}
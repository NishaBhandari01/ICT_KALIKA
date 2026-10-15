
import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#1a1b1b] bg-[#0B1120] text-[#ebe6e2]">
      <div className="relative mx-auto max-w-7xl px-6 py-14 sm:px-8 sm:py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">

          <div className="lg:col-span-2">
            <Link
              href="/"
              aria-label="ICT Club of Kalika home"
              className="group inline-flex items-center gap-4"
            >
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full  bg-white/5 transition-all duration-300 ">
                <Image
                  src="/logo.avif"
                  alt="ICT Club of Kalika logo"
                  fill
                  sizes="64px"
                  className="object-contain p-1"
                />
              </div>

              <div>
                <h2 className="text-lg font-extrabold tracking-wide text-[#05F2DB]">
                  ICT Club of  Kalika
                </h2>
              </div>
            </Link>

            <p className="mt-6 max-w-md text-sm leading-7 text-slate-400">
              Innovating the future through technology. We empower students
              to explore ICT, develop practical skills, collaborate on ideas,
              and create a meaningful impact through innovation.
            </p>

            <div id="social-media" className="flex flex-row w-[1/4] items-center justify-start mt-10 gap-6 md:gap-8">

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

          </div>


          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase  text-white">
              Explore
            </h3>

            <ul className="flex flex-col gap-4 text-sm text-slate-400">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Events", href: "/events" },
                { label: "Teams", href: "/team" },
                { label: "Partners", href: "/partners" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1 transition-colors duration-200 hover:text-[#05F2DB]"
                  >
                    {item.label}
                    <ArrowUpRight
                      size={13}
                      className="opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase  text-white">
              Get in Touch
            </h3>

            <div className="flex flex-col gap-5 text-sm text-slate-400">

              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ">
                  <MapPin size={24} className="text-[#05F2DB]" />
                </div>
                <div className="pt-1">
                  <p className="text-xs text-slate-500">Location</p>
                  <p className="mt-1 text-slate-300">Butwal, Nepal</p>
                </div>
              </div>

              <a
                href="mailto:ictkalika82@gmail.com"
                className="group flex items-start gap-3 transition-colors hover:text-[#05F2DB]"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ">
                  <Mail size={24} className="text-[#05F2DB]" />
                </div>
                <div className="min-w-0 pt-1">
                  <p className="text-xs text-slate-500">Email</p>

                  <p>ictkalika82@gmail.com</p>

                </div>
              </a>

              <a
                href="tel:+9779748703502"
                className="group flex items-start gap-3 transition-colors hover:text-[#05F2DB]"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ">
                  <Phone size={24} className="text-[#05F2DB]" />
                </div>
                <div className="pt-1">
                  <p className="text-xs text-slate-500">Phone</p>
                  <p className="mt-1 text-slate-300">+977 9748703502</p>
                </div>
              </a>

            </div>
          </div>
        </div>


        <div className="mt-8 border-t border-white/10 pt-7">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">

            <p className="text-xs leading-6 text-slate-500 sm:text-sm">
              © 2026{" "}
              <span className=" text-slate-300">
                ICT Club of Kalika.
              </span>{" "}
              All rights reserved.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}


"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { X, Menu } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Teams", href: "/teams" },
  { label: "Partners", href: "/partners" },
  { label: "FAQs", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const closeMobileNav = () => setMobileNavOpen(false);

  return (
    <header className="relative z-50 bg-[#0B1120]">
      <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          onClick={closeMobileNav}
          className="flex min-w-0 shrink items-center gap-2 sm:gap-3"
        >
          <Image
            src="/logo.avif"
            alt="ICT Club of Kalika logo"
            width={64}
            height={64}
            priority
            className="h-10 w-10 shrink-0 object-contain sm:h-12 sm:w-12"
          />

          <h1 className="truncate text-base font-bold tracking-tight text-[#05F2DB] sm:text-lg lg:text-xl">
            ICT Club of Kalika
          </h1>
        </Link>


        <div className="hidden items-center gap-5 lg:flex xl:gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-sm font-semibold text-[#ebe6e2] transition-colors duration-200 hover:text-[#05F2DB] xl:text-base"
            >
              {link.label}
            </Link>
          ))}
        </div>


        <button
          type="button"
          onClick={() => setMobileNavOpen(true)}
          className="ml-3 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-[#05F2DB] transition hover:bg-white/10 lg:hidden"
          aria-label="Open navigation menu"
          aria-expanded={mobileNavOpen}
        >
          <Menu className="h-6 w-6" />
        </button>
      </nav>


      <div onClick={closeMobileNav} className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${mobileNavOpen ? "visible opacity-100": "invisible opacity-0"
        }`}
        aria-hidden="true"
      />

      <aside
        id="mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!mobileNavOpen}
        className={`fixed right-0 top-0 z-[70] flex h-dvh w-[85%] max-w-sm flex-col border-l border-white/10 bg-[#0B1120] shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${
          mobileNavOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >

        <div className="flex h-20 shrink-0 items-center justify-between border-b border-white/10 px-5">
          <Link
            href="/"
            onClick={closeMobileNav}
            className="flex min-w-0 items-center gap-3"
          >
            <Image
              src="/logo.avif"
              alt="ICT Club of Kalika logo"
              width={48}
              height={48}
              className="h-10 w-10 shrink-0 object-contain"
            />

            <span className="truncate text-base font-bold text-[#05F2DB]">
              ICT Club of Kalika
            </span>
          </Link>

          <button
            type="button"
            onClick={closeMobileNav}
            className="ml-2 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[#ebe6e2] transition hover:bg-white/10 hover:text-[#05F2DB]"
            aria-label="Close navigation menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-6">
          <div className="flex flex-col gap-2">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMobileNav}
                style={{ transitionDelay: mobileNavOpen ? `${index * 35}ms` : "0ms" }}
                className={`rounded-xl border border-transparent px-4 py-3.5 font-semibold text-[#ebe6e2] transition-all duration-200 hover:border-[#05F2DB]/20 hover:bg-[#05F2DB]/10 hover:text-[#05F2DB] ${
                  mobileNavOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-4 opacity-0"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="shrink-0 border-t border-white/10 px-6 py-5">
          <p className="text-center text-sm text-white/50">
            ICT Club of Kalika
          </p>
          <p className="mt-1 text-center text-xs text-[#05F2DB]/70">
            Learn · Build · Innovate
          </p>
        </div>
      </aside>
    </header>
  );
}


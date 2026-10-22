
"use client";

import type React from "react";
import { useEffect, useState } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import LoadingPage from "@/app/components/loading";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-br from-[#041f66] via-[#0a2c7a] to-[#122d91]">
      <Navbar />

      <main className="relative z-10">
        {children}
      </main>

      <Footer />
    </div>
  );
}

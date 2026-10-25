"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Image  as ImageIcon } from "lucide-react";

interface EventGalleryCarouselProps {
  images: string[];
  altPrefix?: string;
}

export default function EventGalleryCarousel({
  images,
 altPrefix = "Event photo",
}: EventGalleryCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-12 rounded-2xl border border-slate-800 bg-[#0F172A]/40 text-slate-400">
        <ImageIcon className="w-10 h-10 mb-2 opacity-50" />
        <p className="text-sm">No gallery images available for this event.</p>
      </div>
    );
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const previousSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="w-full space-y-4">

      <div className="relative overflow-hidden rounded-2xl  bg-[#0F172A]/90 backdrop-blur-xl group shadow-xl">
        
        {images.length > 1 && (
          <button
            onClick={previousSlide}
            className="absolute left-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-slate-950/70 text-white border border-slate-700/80 transition-all duration-300 hover:bg-blue-600 hover:text-black "
            aria-label="Previous Image"
          >
            <ChevronLeft size={22} />
          </button>
        )}

        <div className="relative w-full aspect-[16/9] md:aspect-[16/8] overflow-hidden bg-slate-950">
          <Image
            key={images[currentIndex]}
            src={images[currentIndex]}
            alt={`${altPrefix}`}
            fill
            priority
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-contain object-center transition-all duration-500"
          />

          <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#080d1e]/80 to-transparent pointer-events-none" />

          <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-slate-950/80 border border-slate-800 text-xs font-semibold text-[#1157D5] backdrop-blur-md shadow-md">
            {currentIndex + 1} / {images.length}
          </div>
        </div>

        {images.length > 1 && (
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-slate-950/70 text-white border border-slate-700/80 transition-all duration-300 hover:bg-blue-600 hover:text-black "
            aria-label="Next Image"
          >
            <ChevronRight size={22} />
          </button>
        )}
      </div>
    </div>
  );
}
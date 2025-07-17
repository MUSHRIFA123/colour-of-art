'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function PaintingHero() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    if (searchTerm.trim()) {
      router.push(`/gallery?search=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <section className="relative min-h-[600px] flex items-center">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/hero.mp4.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

      </div>
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Explore Unique Art That Speaks to You
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Dive into a world of color, emotion, and creativity. Search original paintings by style, theme, or keyword.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/artist" className="text-white hover:text-rose-200 transition-colors flex items-center gap-2">
              👩‍🎨 About the Artist
            </Link>
            <Link href="/contact" className="text-white hover:text-rose-200 transition-colors flex items-center gap-2">
              📩 Contact
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

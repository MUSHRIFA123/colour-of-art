import Link from "next/link";
import { Outfit } from "next/font/google";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomeHero from "@/components/home/HomeHero";
import HomeBlogCards from "@/components/home/HomeBlogCards";
import HeadCommon from "@/components/HeadCommon";
import MetaOG from "@/components/MetaOG";

import ogData from "@/data/prod/json/ogData.json";
import PaintingShowcase from "@/components/home/PaintingShowcase";

const outfit = Outfit({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <head>
        <title>FurnitureStored - Find the Best Furniture Stores in the US</title>
        <meta name="description" content="Discover top-rated furniture stores, design inspiration, and expert buying guides. Find the perfect furniture store in your city." />
        <HeadCommon />
        <MetaOG ogData={ogData}/>
        <link rel="canonical" href="https://www.furniturestored.com" />
      </head>
      <body className={`${outfit.className} antialiased text-[rgba(0,0,0,0.95)]`}>
        <Navbar />

        {/* Hero Section */}
        <HomeHero />

        {/* Featured Stores */}
        <PaintingShowcase/>
        
          {/* Buying Guides */}
        <HomeBlogCards />

        {/* Leading Furniture Retailers Section */}
        {/* <section className="py-20 bg-gradient-to-b from-[#f8f4f0] to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-4xl font-extrabold text-[#5C4033] mb-3 tracking-tight">Art Resource Guides</h2>
              <p className="text-[#7a6c5d] max-w-2xl mx-auto text-lg">Your curated path to art tools, materials, and creative techniques.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {[
                {
                  name: "Brush Types & Uses",
                  img: "/img/guides/brushes.jpg",
                  desc: "Understand different brush shapes, bristles, and how each affects your strokes.",
                  tag: "Brush Guide"
                },
                {
                  name: "Choosing the Right Canvas",
                  img: "/img/guides/canvas.jpg",
                  desc: "A complete guide to canvas types, textures, and prepping surfaces for painting.",
                  tag: "Canvas Tips"
                },
                {
                  name: "Palette Essentials",
                  img: "/img/guides/palette.jpg",
                  desc: "Discover the different types of palettes and how to mix colors effectively.",
                  tag: "Color Mixing"
                },
                {
                  name: "Setting Up an Art Station",
                  img: "/img/guides/art-station.jpg",
                  desc: "Organize your creative space for better flow, comfort, and inspiration.",
                  tag: "Studio Setup"
                }
              ].map((retailer, index) => (
                <Link href="/" key={index} className="group block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-100 hover:no-underline">
                  <div className="aspect-w-16 aspect-h-10">
                    <img src={retailer.img} alt={retailer.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-5">
                    <h4 className="text-xl font-semibold text-[#3e2e24] mb-2 group-hover:text-[#8B5E3C] transition-colors">{retailer.name}</h4>
                    <p className="text-gray-600 text-sm mb-3">{retailer.desc}</p>
                    <span className="text-xs bg-[#ece2d0] text-[#5C4033] px-3 py-1 rounded-full">{retailer.tag}</span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-16">
              <Link href="/retailers" className="inline-flex items-center gap-2 text-[#5C4033] hover:text-[#8B5E3C] transition-colors text-sm font-medium">
                View All Art Retailers
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </Link>
            </div>
          </div>
        </section> */}


        <Footer />
      </body>
    </>
  );
}

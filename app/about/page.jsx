import Navbar from '@/components/Navbar'
import React from 'react'
import Footer from "@/components/Footer";
import Link from 'next/link';

export default function page() {
  return (
    <div>
        <>
  <Navbar/>
  {/* Hero Section */}
        <div className="relative w-full h-[420px]" id="home">
        <div className="absolute inset-0 opacity-90">
            <img
            src="/about-us/about-hero.jpg" // Replace with your actual image path
            alt="Beautiful Artwork"
            className="object-cover object-center w-full h-full"
            />
        </div>
        <div className="absolute inset-9 flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-4 md:mb-0">
            <h1 className="text-[#4b2e2e] font-semibold text-4xl md:text-5xl leading-tight mb-2">
                Aysha’s Painting World
            </h1>
            <p className="font-dark text-xl text-white mb-8 mt-4">
                Discover original hand-painted art that speaks to the soul
            </p>
            <a
                href="#contact"
                className="px-6 py-3 bg-[#a67c52] text-white font-medium rounded-full hover:bg-[#8b5e3c] transition duration-200"
            >
                Get in Touch
            </a>
            </div>
        </div>
        </div>

  {/* our services section */}
<section className="py-10" id="services">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Services</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

      {/* Nature’s Palette */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img
          src="/artlist/paint5.jpg"
          alt="Nature Painting"
          className="w-full h-80 object-cover"
        />
        <div className="p-6 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">🎨 Nature’s Palette</h3>
          <p className="text-gray-700 text-base">
            Explore techniques and tips for capturing the beauty of nature—flowers, landscapes, animals—in vibrant color and delicate sketches.
          </p>
        </div>
      </div>

      {/* Sketchbook Essentials */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97"
          alt="Sketchbook"
          className="w-full h-80 object-cover"
        />
        <div className="p-6 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">✏️ Sketchbook Essentials</h3>
          <p className="text-gray-700 text-base">
            Learn how to make the most out of your sketchbook papers with practical drawing and shading skills focused on nature and more.
          </p>
        </div>
      </div>

      {/* Tools of the Trade */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
          alt="Painting Tools"
          className="w-full h-80 object-cover"
        />
        <div className="p-6 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">🖌️ Tools of the Trade</h3>
          <p className="text-gray-700 text-base">
            Get a detailed guide on selecting the right brushes, paints, pencils, and other tools perfect for your style of natural and varied art.
          </p>
        </div>
      </div>

      {/* Paper & Canvas Choices */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img
          src="/about-us/our-services/canvas.jpg"
          alt="Paper and Canvas"
          className="w-full h-80 object-cover"
        />
        <div className="p-6 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">🌿 Paper & Canvas Choices</h3>
          <p className="text-gray-700 text-base">
            Understand which papers and canvases work best for watercolors, acrylics, and pencil sketches focused on natural subjects.
          </p>
        </div>
      </div>

      {/* Color & Brush Mastery (SPECIAL CARD) */}
      <div className="bg-gradient-to-tr from-yellow-200 to-pink-300 p-0.5 rounded-lg shadow-lg overflow-hidden min-h-full">
        <div className="text-center text-white font-medium bg-white py-2 rounded-t-lg">🎨 Color & Brush Mastery</div>
        <img
          src="https://images.unsplash.com/photo-1540206395-68808572332f"
          alt="Color Mixing"
          className="w-full h-64 object-cover"
        />
        <div className="p-6 bg-white text-center rounded-b-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Color & Brush Mastery</h3>
          <p className="text-gray-700 text-base">
            Master mixing colors and brush techniques to bring natural scenes to life with texture, depth, and harmony.
          </p>
        </div>
      </div>

      {/* Creative Inspirations */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1465311443234-276de9c82855"
          alt="Creative Inspiration"
          className="w-full h-80 object-cover"
        />
        <div className="p-6 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">🌳 Creative Inspirations</h3>
          <p className="text-gray-700 text-base">
            Discover ideas and prompts to spark creativity in your nature paintings and sketches, helping you build your own unique style.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

  {/* about us */}
<section className="bg-gray-100" id="aboutus">
  <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
      <div className="max-w-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          About Us
        </h2>
        <p className="mt-4 text-gray-600 text-lg">
          At <span className="text-rose-500 ml-2">Colour of Art </span>  we believe that art speaks when words fall short. We are passionate about making painting approachable, expressive, and full of discovery for every kind of art lover. Our services are tailored for those who enjoy nature-based themes, traditional techniques, and the freedom of exploring various mediums—from sketching in a notebook to painting on canvas.
        </p>
        <p className="mt-4 text-gray-600 text-lg">
          Whether you're new to painting or already holding a brush with confidence, our platform provides friendly guidance on materials, sketching basics, and color blending. We make sure that your artistic journey is joyful, informed, and beautifully personal.
        </p>

        {/* About the Artist Link */}
        <div className="flex flex-wrap gap-4 mt-6">
          <Link
            href="/artist"
            className="text-white bg-yellow-500 px-4 py-2 rounded-md hover:bg-rose-600 transition-colors flex items-center gap-2"
          >
            👩‍🎨 About the Artist
          </Link>
        </div>
      </div>
      <div className="mt-12 md:mt-0">
        <img
          src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
          alt="About Us Image"
          className="object-cover rounded-lg shadow-md"
        />
      </div>
    </div>
  </div>
</section>

  {/* why us */}
<section className="text-gray-700 body-font mt-10" id="whyus">
  <div className="flex justify-center text-3xl font-bold text-gray-800 text-center mb-4">
    Why <span className="text-rose-500 ml-2">Colour of Art?</span>
  </div>
  <div className="container px-5 py-12 mx-auto">
    <div className="flex flex-wrap text-center justify-center">

      {/* Nature-Inspired Creations */}
      <div className="p-4 md:w-1/4 sm:w-1/2">
        <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
          <div className="flex justify-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3039/3039431.png"
              className="w-32 mb-3"
              alt="Nature Art Icon"
            />
          </div>
          <h2 className="title-font font-regular text-2xl text-gray-900">
            Nature-Inspired Creations
          </h2>
        </div>
      </div>

      {/* Beginner-Friendly Guides */}
      <div className="p-4 md:w-1/4 sm:w-1/2">
        <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
          <div className="flex justify-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4221/4221419.png"
              className="w-32 mb-3"
              alt="Beginner Icon"
            />
          </div>
          <h2 className="title-font font-regular text-2xl text-gray-900">
            Beginner-Friendly Guides
          </h2>
        </div>
      </div>

      {/* Brush & Tool Knowledge */}
      <div className="p-4 md:w-1/4 sm:w-1/2">
        <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
          <div className="flex justify-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1995/1995542.png"
              className="w-32 mb-3"
              alt="Brush Tool Icon"
            />
          </div>
          <h2 className="title-font font-regular text-2xl text-gray-900">
            Brush & Tool Knowledge
          </h2>
        </div>
      </div>

      {/* Artist’s Personal Touch */}
      <div className="p-4 md:w-1/4 sm:w-1/2">
        <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
          <div className="flex justify-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3468/3468379.png"
              className="w-32 mb-3"
              alt="Personal Touch Icon"
            />
          </div>
          <h2 className="title-font font-regular text-2xl text-gray-900">
            Artist’s Personal Touch
          </h2>
        </div>
      </div>

    </div>
  </div>
</section>

  {/* gallery */}
  <section className="text-gray-700 body-font" id="gallery">
    <div className="flex justify-center text-3xl font-bold text-gray-800 text-center py-10">
      Gallery
    </div>
    <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      <div className="group relative">
        <img
          src="/artlist/painting.jpg"
          alt="Image 1"
          className="aspect-[2/3] h-80 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
        />
      </div>
      <div className="group relative">
        <img
          src="/artlist/paint2.jpg"
          alt="Image 1"
          className="aspect-[2/3] h-80 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
        />
      </div>
      <div className="group relative">
        <img
          src="/artlist/paint9.jpg"
          alt="Image 1"
          className="aspect-[2/3] h-80 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
        />
      </div>
      <div className="group relative">
        <img
          src="/artlist/paint3.jpg"
          alt="Image 1"
          className="aspect-[2/3] h-80 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
        />
      </div>
      {/* Repeat this div for each image */}
    </div>
  </section>
  {/* footer */}
  <Footer/>
</>

    </div>
  )
}

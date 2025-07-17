'use client';
import { useState, useEffect } from "react";

export default function PaintingShowcase() {
  const paintings = [
    { title: "Whispers of Nature", image: "/artlist/painting.jpg", link: "/gallery/nature-whispers" },
    { title: "Golden Dusk", image: "/artlist/paint2.jpg", link: "/gallery/golden-dusk" },
    { title: "Crimson Journey", image: "/artlist/paint3.jpg", link: "/gallery/floral-grace" },
    { title: "Solitude at Sunset", image: "/artlist/paint4.jpg", link: "/gallery/solitude-at-sunset" },
    { title: "Icy Horizons", image: "/artlist/paint9.jpg", link: "/gallery/serene-reflections" },
    { title: "Blossoms in the Breeze", image: "/artlist/paint6.jpg", link: "/gallery/blossoms-beneath-sky" },
    { title: "Lavender Dreams ", image: "/artlist/paint7.jpg", link: "/gallery/silent-bloom" },
    { title: "Echoes of the Forest", image: "/artlist/paint8.jpg", link: "/gallery/acrylic-symphony" }
  ];

  const [favorites, setFavorites] = useState({});

  // Load favorites from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('favoritePaintings');
    if (stored) {
      setFavorites(JSON.parse(stored));
    }
  }, []);

  // Toggle and save to localStorage
  const toggleFavorite = (title) => {
    const updated = {
      ...favorites,
      [title]: !favorites[title],
    };
    setFavorites(updated);
    localStorage.setItem('favoritePaintings', JSON.stringify(updated));
  };

  return (
    <section className="bg-[#fdfaf3] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-[#5c4033] mb-10 text-center">
          Paintings by Aysha Mushrifa
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {paintings.map((painting, index) => (
            <div
              key={index}
              className="group block rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 bg-white"
            >
              <a href={painting.link}>
                <div className="h-80 overflow-hidden">
                  <img
                    src={painting.image}
                    alt={painting.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </a>

              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-[#4b2e2e] group-hover:text-[#a0522d] transition">
                    {painting.title}
                  </h3>
                  <button
                    onClick={() => toggleFavorite(painting.title)}
                    className="text-2xl ml-3 focus:outline-none"
                    aria-label="Toggle Favorite"
                  >
                    {favorites[painting.title] ? "❤️" : "🤍"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/paintinggallery"
            className="inline-block bg-gradient-to-r from-[#f7ca77] to-[#d29c59] text-white font-semibold px-6 py-3 rounded-xl shadow hover:brightness-110 transition-all duration-300"
          >
            Explore more
          </a>
        </div>
      </div>
    </section>
  );
}

'use client';
import { useEffect, useState } from 'react';
import { FaHeart } from 'react-icons/fa';

export default function FavoritePage() {
  const allPaintings = [
    { title: "Whispers of Nature", image: "/artlist/painting.jpg", link: "/gallery/nature-whispers" },
    { title: "Golden Dusk", image: "/artlist/paint2.jpg", link: "/gallery/golden-dusk" },
    { title: "Crimson Journey", image: "/artlist/paint3.jpg", link: "/gallery/floral-grace" },
    { title: "Solitude at Sunset", image: "/artlist/paint4.jpg", link: "/gallery/solitude-at-sunset" },
    { title: "Icy Horizons", image: "/artlist/paint9.jpg", link: "/gallery/serene-reflections" },
    { title: "Blossoms in the Breeze", image: "/artlist/paint6.jpg", link: "/gallery/blossoms-beneath-sky" },
    { title: "Lavender Dreams ", image: "/artlist/paint7.jpg", link: "/gallery/silent-bloom" },
    { title: "Echoes of the Forest", image: "/artlist/paint8.jpg", link: "/gallery/acrylic-symphony" },
    { title: "Echoes of the Forest", image: "https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60", link: "/gallery/acrylic" }
  ];

  const [favoriteList, setFavoriteList] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('favoritePaintings');
    if (stored) {
      const favorites = JSON.parse(stored);
      const filtered = allPaintings.filter(p => favorites[p.title]);
      setFavoriteList(filtered);
    }
  }, []);

  const handleUnfavorite = (title) => {
    const stored = localStorage.getItem('favoritePaintings');
    if (stored) {
      const favorites = JSON.parse(stored);
      delete favorites[title];
      localStorage.setItem('favoritePaintings', JSON.stringify(favorites));

      const updatedList = favoriteList.filter(p => p.title !== title);
      setFavoriteList(updatedList);
    }
  };

  return (
    <>
      {favoriteList.length === 0 ? (
        <div
          className="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url("/article/landscape-inspirations.jpg")',
          }}
        >
          <div className="max-w-md mx-auto text-center bg-white bg-opacity-90 p-8 rounded-lg shadow-lg">
            <div className="text-6xl font-bold text-pink-600 mb-4">💖</div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              No Favorites Yet
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Looks like you haven't added any paintings to your favorites yet. Start exploring and add what you love!
            </p>
            <a
              href="/gallery"
              className="inline-block bg-pink-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-pink-700 transition-colors duration-300"
            >
              Explore Gallery
            </a>
          </div>
        </div>
      ) : (
        <section className="bg-[#ffd6e8] py-16 min-h-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-[#5c4033] mb-10 text-center">
              Favorite Paintings 💖
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {favoriteList.map((painting, index) => (
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
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold text-[#4b2e2e] group-hover:text-[#a0522d] transition">
                        {painting.title}
                      </h3>
                      <button
                        onClick={() => handleUnfavorite(painting.title)}
                        className="text-red-500 hover:text-gray-400 transition text-base"
                        aria-label="Unfavorite"
                      >
                        <FaHeart />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

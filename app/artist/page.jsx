'use client';

import React from 'react';

export default function page() {
  return (
    <div>
      <section className="w-full overflow-hidden dark:bg-gray-900">
        <div className="w-full mx-auto">
          {/* Cover Image */}
          <img
            src="https://images.unsplash.com/photo-1560697529-7236591c0066?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMHx8Y292ZXJ8ZW58MHwwfHx8MTcxMDQ4MTEwNnww&ixlib=rb-4.0.3&q=80&w=1080"
            alt="User Cover"
            className="w-full xl:h-[20rem] lg:h-[22rem] md:h-[16rem] sm:h-[13rem] h-[9.5rem]"
          />

          {/* Profile Image */}
          <div className="w-full mx-auto flex justify-center">
            <img
              src="/img/logo/logo.jpg"
              alt="Aysha Mushrifa"
              className="rounded-full object-cover xl:w-[16rem] xl:h-[16rem] lg:w-[16rem] lg:h-[16rem] md:w-[12rem] md:h-[12rem] sm:w-[10rem] sm:h-[10rem] w-[8rem] h-[8rem] outline outline-2 outline-offset-2 outline-yellow-500 shadow-xl relative xl:bottom-[7rem] lg:bottom-[8rem] md:bottom-[6rem] sm:bottom-[5rem] bottom-[4.3rem]"
            />
          </div>

          {/* Info Section */}
          <div className="xl:w-[80%] lg:w-[90%] md:w-[94%] sm:w-[96%] w-[92%] mx-auto flex flex-col gap-4 justify-center items-center relative xl:-top-[6rem] lg:-top-[6rem] md:-top-[4rem] sm:-top-[3rem] -top-[2.2rem]">
            <h1 className="text-center text-gray-800 dark:text-white text-4xl font-serif">
              Aysha Mushrifa
            </h1>
            <p className="w-full text-gray-700 dark:text-gray-400 text-md text-pretty sm:text-center text-justify">
              I'm Aysha Mushrifa, an engineering graduate working as a web developer and an independent artist. I built this website to share my artwork and also to provide helpful guides and content related to art and creativity. My goal is to combine my technical skills and creative interests to build meaningful and visually engaging experiences.
            </p>  

            {/* Social Icons */}
            <div className="px-2 flex rounded-sm bg-gray-200 text-gray-500 dark:bg-gray-700 dark:bg-opacity-30 dark:text-gray-700 hover:text-gray-600 hover:dark:text-gray-400">

              <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
                <div className="p-2 hover:text-pink-500 hover:dark:text-pink-400">
                  {/* Instagram (replace with Facebook if you prefer) */}
                  <svg className="w-8 h-8 text-gray-800 dark:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.054 1.95.24 2.42.4.59.2 1.01.44 1.46.89.45.45.69.87.89 1.46.16.47.35 1.25.4 2.42.06 1.27.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.95-.4 2.42-.2.59-.44 1.01-.89 1.46-.45.45-.87.69-1.46.89-.47.16-1.25.35-2.42.4-1.27.06-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.95-.24-2.42-.4-.59-.2-1.01-.44-1.46-.89-.45-.45-.69-.87-.89-1.46-.16-.47-.35-1.25-.4-2.42C2.212 15.584 2.2 15.2 2.2 12s.012-3.584.07-4.85c.054-1.17.24-1.95.4-2.42.2-.59.44-1.01.89-1.46.45-.45.87-.69 1.46-.89.47-.16 1.25-.35 2.42-.4C8.416 2.212 8.8 2.2 12 2.2Zm0 1.8c-3.157 0-3.52.012-4.76.07-1.02.048-1.57.217-1.94.362-.49.19-.84.42-1.21.79-.37.37-.6.72-.79 1.21-.145.37-.314.92-.362 1.94-.058 1.24-.07 1.603-.07 4.76s.012 3.52.07 4.76c.048 1.02.217 1.57.362 1.94.19.49.42.84.79 1.21.37.37.72.6 1.21.79.37.145.92.314 1.94.362 1.24.058 1.603.07 4.76.07s3.52-.012 4.76-.07c1.02-.048 1.57-.217 1.94-.362.49-.19.84-.42 1.21-.79.37-.37.6-.72.79-1.21.145-.37.314-.92.362-1.94.058-1.24.07-1.603.07-4.76s-.012-3.52-.07-4.76c-.048-1.02-.217-1.57-.362-1.94-.19-.49-.42-.84-.79-1.21-.37-.37-.72-.6-1.21-.79-.37-.145-.92-.314-1.94-.362-1.24-.058-1.603-.07-4.76-.07ZM12 6.6A5.4 5.4 0 1 1 6.6 12 5.407 5.407 0 0 1 12 6.6Zm0 1.8a3.6 3.6 0 1 0 3.6 3.6A3.604 3.604 0 0 0 12 8.4Z" />
                    <circle cx="18.4" cy="5.6" r="1.44" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

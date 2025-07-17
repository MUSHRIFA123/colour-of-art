<div className="relative h-[400px] mb-12 rounded-lg overflow-hidden" style={{ backgroundImage: 'linear-gradient(to top, #ff9a9e 0%, #fecfef 99%, #fecfef 100%)' }}>
                        <img
                            src="/img/bg/bg1.jpg"
                            alt="San Jose Cityscape"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                e.target.style.display = 'none';
                            }}
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                            <div className="text-center text-white">
                                <h1 className="text-4xl md:text-5xl font-bold mb-4">Furniture Stores in San Jose, CA</h1>
                                <p className="text-xl">Discover the best furniture shopping experience in Silicon Valley</p>
                            </div>
                        </div>
                    </div>


New Hero section 

{/* Hero Section */}
                    <section className="relative">
                        {/* Background with gradient and image overlay */}
                        <div className="absolute inset-0">
                            <div className="absolute inset-0 bg-gradient-to-t from-[#ff9a9e] to-[#fecfef] z-10"></div>
                            <img
                                src="/img/bg/bg1.jpg"
                                alt="San Jose Furniture Shopping"
                                className="w-full h-full object-cover mix-blend-overlay"
                            />
                        </div>

                        {/* Content Container */}
                        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="py-24 md:py-32">
                                {/* Text Content */}
                                <div className="max-w-3xl mx-auto text-center">
                                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                        Furniture Stores in San Jose, CA
                                    </h1>
                                    <p className="text-xl text-white/90 mb-8">
                                        Discover the best furniture shopping experience in Silicon Valley
                                    </p>

                                    {/* Search Bar */}
                                    <div className="mt-8">
                                        <div className="max-w-xl mx-auto bg-white/95 rounded-lg shadow-lg p-2">
                                            <div className="flex items-center">
                                                <input
                                                    type="text"
                                                    placeholder="Search for furniture stores..."
                                                    className="flex-1 p-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
                                                />
                                                <button className="ml-2 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors duration-200">
                                                    Search
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Quick Stats */}
                                    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                                        <div className="text-white">
                                            <div className="text-3xl font-bold">50+</div>
                                            <div className="text-sm text-white/80">Furniture Stores</div>
                                        </div>
                                        <div className="text-white">
                                            <div className="text-3xl font-bold">4.8</div>
                                            <div className="text-sm text-white/80">Average Rating</div>
                                        </div>
                                        <div className="text-white">
                                            <div className="text-3xl font-bold">1000+</div>
                                            <div className="text-sm text-white/80">Customer Reviews</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>



map  view full width 
                    {/* Map View Option */}
                    <Link 
                        href="/city-san-jose-ca/map"
                        className="block mb-12 relative h-[120px] rounded-lg overflow-hidden group"
                    >
                        <div 
                            className="absolute inset-0 bg-cover bg-center blur-[2px]" 
                            style={{ 
                                backgroundImage: 'url("/img/bg/map.png")',
                                transform: 'scale(1.1)' 
                            }}
                        ></div>
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
                        <div className="relative h-full flex items-center justify-center gap-3 text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                            <span className="text-xl font-semibold">View Map</span>
                        </div>
                    </Link>

                    {/* Store Listings */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Featured Stores</h2>
                        
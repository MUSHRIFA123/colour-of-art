{/* Featured Brands Section */}
                <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4">Premium Furniture & Decor Brands</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Discover exclusive furniture and decor brands that supply premium pieces to retailers across the United States.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {featuredBrands.map((brand, index) => (
                                <Link 
                                    key={index}
                                    href={`/brands/${brand.name.toLowerCase().replace(/\s+/g, '-')}`}
                                    className="group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow hover:no-underline"
                                >
                                    <div className="aspect-w-16 aspect-h-9">
                                        <img
                                            src={brand.image}
                                            alt={brand.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-start justify-between mb-2">
                                            <div>
                                                <h3 className="text-xl font-semibold mb-1 group-hover:text-blue-600 transition-colors">{brand.name}</h3>
                                                <span className="inline-block bg-gray-100 text-gray-700 text-sm px-2 py-1 rounded">
                                                    {brand.category}
                                                </span>
                                            </div>
                                            <span className="text-sm text-gray-500">{brand.retailers} retailers</span>
                                        </div>
                                        <p className="text-gray-600 text-sm mb-4">{brand.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {brand.specialties.map((specialty, idx) => (
                                                <span 
                                                    key={idx} 
                                                    className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full"
                                                >
                                                    {specialty}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        <div className="text-center mt-12">
                            <Link 
                                href="/brands"
                                className="inline-flex items-center gap-2 bg-white text-gray-800 px-6 py-3 rounded-lg font-semibold border hover:bg-gray-50 transition-colors"
                            >
                                View All Brands
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </section>
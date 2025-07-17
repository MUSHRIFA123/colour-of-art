import { Outfit } from "next/font/google";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const outfit = Outfit({ subsets: ["latin"] });

const brands = {
    meta: {
      title: "Explore Furniture Brands & Suppliers | FurnitureStores.com",
      description: "Discover 1,000+ furniture manufacturers, wholesalers, and boutique designers. Filter by product, style, price, and location."
    },
    hero: {
      title: "Explore 1,000+ Furniture Brands & Suppliers",
      subtitle: "Find manufacturers, wholesalers, and boutique designers for every style and budget.",
      search_placeholder: "Filter by product, style, or location (e.g. 'Patio furniture suppliers in Texas')",
      featured_brands: [
        {
          name: "Vermont Woods",
          slug: "vermont-woods",
          tagline: "Sustainable Solid Wood Furniture",
          image: "https://example.com/images/vermont-woods-hero.jpg",
          cta: "Explore Brand"
        },
        {
          name: "Luxury Living",
          slug: "luxury-living",
          tagline: "Italian Leather Sectionals",
          image: "https://example.com/images/luxury-living-hero.jpg",
          cta: "View 2025 Collection"
        }
      ]
    },
    filters: {
      by_category: [
        {
          name: "Patio Furniture",
          slug: "patio-furniture",
          count: 215,
          icon: "umbrella-beach"
        },
        {
          name: "Sofas & Sectionals",
          slug: "sofas",
          count: 342,
          icon: "couch"
        }
      ],
      by_style: [
        {
          name: "Mid-Century Modern",
          slug: "mid-century-modern",
          count: 178
        },
        {
          name: "Industrial",
          slug: "industrial",
          count: 92
        }
      ],
      by_price: [
        {
          range: "Under $500",
          slug: "under-500",
          count: 156
        },
        {
          range: "Premium ($5,000+)",
          slug: "premium",
          count: 67
        }
      ],
      by_business_type: [
        {
          name: "Manufacturers",
          slug: "manufacturers",
          count: 423
        },
        {
          name: "Wholesale Distributors",
          slug: "wholesalers",
          count: 198
        }
      ]
    },
    trending_sections: [
      {
        title: "Top 10 Outdoor Brands for Summer 2025",
        brands: [
          {
            name: "Outdoor Elegance",
            slug: "outdoor-elegance",
            specialty: "Weather-Resistant Wicker",
            price_range: "$$",
            image: "https://example.com/images/outdoor-elegance-thumb.jpg"
          },
          {
            name: "Teak Masters",
            slug: "teak-masters",
            specialty: "Sustainable Teak Patio Sets",
            price_range: "$$$",
            image: "https://example.com/images/teak-masters-thumb.jpg"
          }
        ],
        cta: "View All Outdoor Brands"
      },
      {
        title: "Newly Added Suppliers",
        brands: [
          {
            name: "Artisan Mirrors",
            slug: "artisan-mirrors",
            specialty: "Hand-Framed Decorative Mirrors",
            price_range: "$$-$$$",
            image: "https://example.com/images/artisan-mirrors-thumb.jpg"
          }
        ],
        cta: "Browse New Arrivals"
      }
    ],
    trust_signals: {
      stats: [
        {
          value: "10,000+",
          label: "Products Sourced"
        },
        {
          value: "500+",
          label: "Verified Suppliers"
        }
      ],
      badges: [
        {
          text: "Made in USA",
          icon: "flag-usa"
        },
        {
          text: "Sustainable Materials",
          icon: "leaf"
        }
      ]
    },
    seo_footer: {
      related_searches: [
        {
          text: "Best luxury sofa brands",
          url: "/brands/style/luxury/"
        },
        {
          text: "Office furniture suppliers near me",
          url: "/brands/category/office-furniture/"
        }
      ]
    }
  }

export default function BrandsPage() {
  return (
    <>
      <head>
        <title>{brands.meta.title}</title>
        <meta name="description" content={brands.meta.description} />
      </head>
      <body className={`${outfit.className} antialiased`}>
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">{brands.hero.title}</h1>
            <p className="text-xl text-gray-600 mb-8">{brands.hero.subtitle}</p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <input
                type="text"
                placeholder={brands.hero.search_placeholder}
                className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <svg 
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                />
              </svg>
            </div>

            {/* Featured Brands */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {brands.hero.featured_brands.map((brand, index) => (
                <Link 
                  key={brand.slug} 
                  href={`/brand/${brand.slug}`}
                  className="group relative overflow-hidden rounded-lg shadow-lg"
                >
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={`https://picsum.photos/800/600?random=${index}`}
                      alt={brand.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-6 flex flex-col justify-end">
                    <h3 className="text-white text-2xl font-bold mb-2">{brand.name}</h3>
                    <p className="text-white/90 mb-4">{brand.tagline}</p>
                    <span className="text-white font-medium">{brand.cta} →</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Browse by Attribute */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Browse by Attribute</h2>
            
            {/* Categories */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">By Product Category</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {brands.filters.by_category.map((category) => (
                  <Link
                    key={category.slug}
                    href={`/brands/category/${category.slug}`}
                    className="p-4 border rounded-lg hover:border-blue-500 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-gray-600">{category.name}</span>
                      <span className="text-sm text-gray-400">({category.count})</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Styles */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">By Style</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {brands.filters.by_style.map((style) => (
                  <Link
                    key={style.slug}
                    href={`/brands/style/${style.slug}`}
                    className="p-4 border rounded-lg hover:border-blue-500 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-gray-600">{style.name}</span>
                      <span className="text-sm text-gray-400">({style.count})</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Price Points */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">By Price Point</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {brands.filters.by_price.map((price) => (
                  <Link
                    key={price.slug}
                    href={`/brands/price/${price.slug}`}
                    className="p-4 border rounded-lg hover:border-blue-500 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-gray-600">{price.range}</span>
                      <span className="text-sm text-gray-400">({price.count})</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Business Types */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">By Business Type</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {brands.filters.by_business_type.map((type) => (
                  <Link
                    key={type.slug}
                    href={`/brands/type/${type.slug}`}
                    className="p-4 border rounded-lg hover:border-blue-500 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-gray-600">{type.name}</span>
                      <span className="text-sm text-gray-400">({type.count})</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Trending Sections */}
          <section className="mb-16">
            {brands.trending_sections.map((section, sectionIndex) => (
              <div key={section.title} className="mb-12">
                <h2 className="text-2xl font-bold mb-6">{section.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {section.brands.map((brand, brandIndex) => (
                    <Link
                      key={brand.slug}
                      href={`/brand/${brand.slug}`}
                      className="group"
                    >
                      <div className="relative aspect-w-16 aspect-h-9 mb-4">
                        <img
                          src={`https://picsum.photos/800/600?random=${sectionIndex * 10 + brandIndex}`}
                          alt={brand.name}
                          className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="text-lg font-semibold mb-1">{brand.name}</h3>
                      <p className="text-gray-600 mb-2">{brand.specialty}</p>
                      <span className="text-sm text-gray-500">{brand.price_range}</span>
                    </Link>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Link
                    href={`/brands/${section.cta.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    {section.cta} →
                  </Link>
                </div>
              </div>
            ))}
          </section>

          {/* Trust Signals */}
          <section className="mb-16">
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Stats */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Our Network</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {brands.trust_signals.stats.map((stat) => (
                      <div key={stat.label} className="text-center">
                        <div className="text-3xl font-bold text-blue-600">{stat.value}</div>
                        <div className="text-gray-600">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Badges */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Quality Standards</h3>
                  <div className="flex flex-wrap gap-4">
                    {brands.trust_signals.badges.map((badge) => (
                      <div
                        key={badge.text}
                        className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm"
                      >
                        <span className="text-gray-600">{badge.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SEO Footer */}
          <section className="mb-16">
            <h3 className="text-lg font-semibold mb-4">Related Searches</h3>
            <div className="flex flex-wrap gap-4">
              {brands.seo_footer.related_searches.map((search) => (
                <Link
                  key={search.url}
                  href={search.url}
                  className="text-blue-600 hover:text-blue-800"
                >
                  {search.text}
                </Link>
              ))}
            </div>
          </section>

        </main>
        <Footer />
      </body>
    </>
  );
}


>>>
the data on const brands seems to be incomplete for the page. Update the data dict to reflect the number of items in each section of the page. 

Update the Browse by Attribute as the section seems to be incomplete or doesnt have correct UI/UX to be useful. 



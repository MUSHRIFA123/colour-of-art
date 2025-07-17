import { useState } from "react";
import Link from "next/link";

const filters = {
  neighborhoods: ["Downtown", "Santana Row", "Willow Glen", "Campbell"],
  categories: ["Modern", "Traditional", "Vintage", "Budget-Friendly"],
  priceRanges: ["$", "$$", "$$$", "$$$$"],
  services: ["Delivery", "Assembly", "Design Consultation", "Custom Orders"],
};

const stores = [
  {
    id: 1,
    name: "Modern Living San Jose",
    neighborhood: "Downtown",
    category: "Modern",
    priceRange: "$$$",
    services: ["Delivery", "Assembly", "Design Consultation"],
    address: "123 Market St, San Jose, CA 95113",
    hours: "Mon-Sat: 10am-8pm, Sun: 11am-6pm",
    rating: 4.8,
    images: ["https://picsum.photos/400/300?random=7", "https://picsum.photos/400/300?random=17"],
    description: "Specializing in contemporary and minimalist designs, perfect for modern urban living.",
  },
  {
    id: 2,
    name: "Vintage Charm San Jose",
    neighborhood: "Willow Glen",
    category: "Vintage",
    priceRange: "$$",
    services: ["Delivery", "Assembly", "Custom Orders"],
    address: "456 Oak Ave, San Jose, CA 95123",
    hours: "Mon-Sat: 10am-8pm, Sun: 11am-6pm",
    rating: 4.5,
    images: ["https://picsum.photos/400/300?random=8", "https://picsum.photos/400/300?random=18"],
    description: "Offering a curated collection of vintage furniture and decor, perfect for those who appreciate unique and timeless pieces.",
  },
  {
    id: 3,
    name: "Modern Living San Jose",
    neighborhood: "Downtown",
    category: "Modern",
    priceRange: "$$$",
    services: ["Delivery", "Assembly", "Design Consultation"],
    address: "123 Market St, San Jose, CA 95113",
    hours: "Mon-Sat: 10am-8pm, Sun: 11am-6pm",
    rating: 4.8,
    images: ["https://picsum.photos/400/300?random=9", "https://picsum.photos/400/300?random=19"],
    description: "Specializing in contemporary and minimalist designs, perfect for modern urban living.",
  },
  {
    id: 4,
    name: "Luxury Home Gallery",
    neighborhood: "Santana Row",
    category: "Luxury",
    priceRange: "$$$$",
    services: ["White Glove Delivery", "Interior Design", "Custom Orders"],
    address: "377 Santana Row, San Jose, CA 95128",
    hours: "Mon-Sat: 11am-7pm, Sun: 12pm-6pm",
    rating: 4.9,
    images: ["https://picsum.photos/400/300?random=10", "https://picsum.photos/400/300?random=20"],
    description: "Premium furniture and decor showcasing the finest in luxury home furnishings and accessories.",
  },
  {
    id: 5,
    name: "Urban Comfort",
    neighborhood: "Campbell",
    category: "Modern",
    priceRange: "$$",
    services: ["Delivery", "Assembly", "Room Planning"],
    address: "1875 S Bascom Ave, Campbell, CA 95008",
    hours: "Mon-Sat: 10am-9pm, Sun: 11am-7pm",
    rating: 4.7,
    images: ["https://picsum.photos/400/300?random=11", "https://picsum.photos/400/300?random=21"],
    description: "Affordable modern furniture with a focus on comfort and functionality for urban living spaces.",
  },
  {
    id: 6,
    name: "Eco Furnishings",
    neighborhood: "Downtown",
    category: "Sustainable",
    priceRange: "$$$",
    services: ["Delivery", "Assembly", "Sustainability Consulting"],
    address: "789 Green St, San Jose, CA 95112",
    hours: "Tue-Sat: 10am-6pm, Sun: 11am-5pm",
    rating: 4.8,
    images: ["https://picsum.photos/400/300?random=12", "https://picsum.photos/400/300?random=22"],
    description: "Sustainable and eco-friendly furniture made from recycled materials and responsibly sourced wood.",
  },
  {
    id: 7,
    name: "Family Furniture Outlet",
    neighborhood: "West San Jose",
    category: "Budget-Friendly",
    priceRange: "$",
    services: ["Delivery", "Financing", "Same-Day Pickup"],
    address: "2250 Stevens Creek Blvd, San Jose, CA 95128",
    hours: "Mon-Sun: 10am-8pm",
    rating: 4.4,
    images: ["https://picsum.photos/400/300?random=13", "https://picsum.photos/400/300?random=23"],
    description: "Quality furniture at affordable prices, perfect for families and budget-conscious shoppers.",
  },
];

export default function CityStoreListings() {
  const [activeFilters, setActiveFilters] = useState({
    neighborhood: "",
    category: "",
    priceRange: "",
    service: "",
  });

  // Add state for image sliders
  const [activeSlides, setActiveSlides] = useState({});

  const handleFilterChange = (filterType, value) => {
    setActiveFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }));
  };

  const handleSlideChange = (storeId, direction) => {
    setActiveSlides((prev) => ({
      ...prev,
      [storeId]: prev[storeId] === 0 ? 1 : 0,
    }));
  };

  return (
    <>
      <p>stores json: {JSON.stringify(stores)}</p>
      <section className="mb-12 bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Filter Stores</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <select className="p-2 border rounded-md" onChange={(e) => handleFilterChange("neighborhood", e.target.value)} value={activeFilters.neighborhood}>
            <option value="">All Neighborhoods</option>
            {filters.neighborhoods.map((neighborhood) => (
              <option key={neighborhood} value={neighborhood}>
                {neighborhood}
              </option>
            ))}
          </select>

          <select className="p-2 border rounded-md" onChange={(e) => handleFilterChange("category", e.target.value)} value={activeFilters.category}>
            <option value="">All Categories</option>
            {filters.categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          <select className="p-2 border rounded-md" onChange={(e) => handleFilterChange("priceRange", e.target.value)} value={activeFilters.priceRange}>
            <option value="">All Price Ranges</option>
            {filters.priceRanges.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>

          <select className="p-2 border rounded-md" onChange={(e) => handleFilterChange("service", e.target.value)} value={activeFilters.service}>
            <option value="">All Services</option>
            {filters.services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>
      </section>

      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">Featured Stores</h2>
          <Link href="/city-san-jose-ca/map" className="relative h-[40px] w-[180px] rounded-lg overflow-hidden group flex items-center">
            <div
              className="absolute inset-0 bg-cover bg-center blur-[2px]"
              style={{
                backgroundImage: 'url("/img/bg/map.png")',
                transform: "scale(1.1)",
              }}
            ></div>
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
            <div className="relative flex items-center justify-center gap-2 text-white w-full">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <span className="font-semibold">View Map</span>
            </div>
          </Link>
        </div>

        {/* Pro Listings */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">Pro</span>
            <span className="text-gray-600">Premium Listings</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stores.slice(0, 2).map((store) => (
              <div key={store.id} className="block border-2 border-amber-200 rounded-lg overflow-hidden group relative">
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">Pro</span>
                </div>
                <div className="relative h-48">
                  <img src={store.images[activeSlides[store.id] || 0]} alt={store.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 flex items-center justify-between px-2">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        handleSlideChange(store.id, "prev");
                      }}
                      className="w-8 h-8 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-lg transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                      </svg>
                    </button>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        handleSlideChange(store.id, "next");
                      }}
                      className="w-8 h-8 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-lg transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                      </svg>
                    </button>
                  </div>
                  <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
                    {store.images.map((_, index) => (
                      <div key={index} className={`w-1.5 h-1.5 rounded-full ${(activeSlides[store.id] || 0) === index ? "bg-white" : "bg-white/50"}`} />
                    ))}
                  </div>
                </div>
                <Link href="/store-kcc-modern-living-berkeley-ca" className="hover:no-underline">
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold group-hover:underline">{store.name}</h3>
                      <span className="text-sm text-gray-600">{store.priceRange}</span>
                    </div>
                    <p className="text-gray-600 mb-2">{store.neighborhood}</p>
                    <p className="text-sm text-gray-600 mb-4">{store.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {store.services.map((service) => (
                        <span key={service} className="bg-amber-50 text-amber-700 px-2 py-1 rounded text-sm">
                          {service}
                        </span>
                      ))}
                    </div>
                    <div className="text-sm text-gray-600">
                      <p>{store.address}</p>
                      <p>{store.hours}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Regular Listings */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-semibold">Free</span>
            <span className="text-gray-600">Standard Listings</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stores.slice(2).map((store) => (
              <Link key={store.id} href="/store-kcc-modern-living-berkeley-ca" className="block border border-gray-200 rounded-lg overflow-hidden hover:no-underline group">
                <div className="relative h-48">
                  <img src={store.images[0]} alt={store.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold group-hover:underline">{store.name}</h3>
                    <span className="text-sm text-gray-600">{store.priceRange}</span>
                  </div>
                  <p className="text-gray-600 mb-2">{store.neighborhood}</p>
                  <p className="text-sm text-gray-600 mb-4">{store.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {store.services.map((service) => (
                      <span key={service} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                        {service}
                      </span>
                    ))}
                  </div>
                  <div className="text-sm text-gray-600">
                    <p>{store.address}</p>
                    <p>{store.hours}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

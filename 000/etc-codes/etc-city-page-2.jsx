import { Outfit } from "next/font/google";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CityStoreListings from "@/components/city/CityStoreListings";
import CityHero from "@/components/city/CityHero";

const outfit = Outfit({ subsets: ["latin"] });

const getStore = async (storeSlug) => {
  try {
    const res = await fetch(`${process.env.API_URI}/api/store/${storeSlug}`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error('Failed to fetch store data');
    }

    return await res.json();
  } catch (error) {
    console.error('Error loading store:', error);
    return null;
  }
};



export default async function CityPage({params}) {

  const citySlug = params.citySlug;

  console.log("citySlug: ", citySlug)

  const city = getStore("citySlug");

  console.log("city: ", city)

  return (
    <>
      <head>
        <title>Furniture Stores in San Jose, CA | Midwest Living</title>
        <meta name="description" content="Discover the best furniture stores in San Jose, CA. Find modern, traditional, and vintage furniture stores with detailed information and reviews." />
      </head>
      <body className={`${outfit.className} antialiased text-[rgba(0,0,0,0.95)]`}>
        <Navbar />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <CityHero />

          {/* Store Listings & Filters */}
          <p>City Data: {JSON.stringify(city)}</p>
          <CityStoreListings />

          {/* Local Resources */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Local Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Interior Designers</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Bay Area Design Studio</span>
                    <span className="text-gray-600">(408) 555-0123</span>
                  </li>
                  {/* Add more designers */}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Home Improvement Services</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>San Jose Upholstery</span>
                    <span className="text-gray-600">(408) 555-0124</span>
                  </li>
                  {/* Add more services */}
                </ul>
              </div>
            </div>
          </section>

          {/* Transportation Guide */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Getting Around</h2>
            <div className="prose max-w-none">
              <h3 className="text-xl font-semibold">Public Transportation</h3>
              <p>San Jose's VTA light rail and bus system provides convenient access to major shopping districts. The Santa Clara Caltrain station is also a great option for visitors coming from San Francisco or the Peninsula.</p>
              <h3 className="text-xl font-semibold mt-4">Parking</h3>
              <p>Most shopping areas offer ample parking, with validated parking available at many locations. Downtown San Jose has several public parking garages, while Santana Row offers free parking in its multi-level garage.</p>
            </div>
          </section>

          {/* Related Articles */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Furniture Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/post" className="block border border-gray-200 rounded-lg overflow-hidden hover:no-underline group">
                <div className="relative h-48">
                  <img src="https://picsum.photos/284/192?random=1" alt="California Modern Design" className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <span className="text-xs font-bold tracking-widest text-gray-600 uppercase">Design Trends</span>
                  <h3 className="text-xl font-semibold my-2">
                    <span className="group-hover:underline">California Modern: The Evolution of West Coast Design</span>
                  </h3>
                  <p className="text-sm text-gray-600">By Sarah Johnson</p>
                </div>
              </Link>

              <Link href="/post" className="block border border-gray-200 rounded-lg overflow-hidden hover:no-underline group">
                <div className="relative h-48">
                  <img src="https://picsum.photos/284/192?random=2" alt="Sustainable California Design" className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <span className="text-xs font-bold tracking-widest text-gray-600 uppercase">Sustainability</span>
                  <h3 className="text-xl font-semibold my-2">
                    <span className="group-hover:underline">Eco-Friendly Furniture: California's Green Design Movement</span>
                  </h3>
                  <p className="text-sm text-gray-600">By Michael Chen</p>
                </div>
              </Link>

              <Link href="/post" className="block border border-gray-200 rounded-lg overflow-hidden hover:no-underline group">
                <div className="relative h-48">
                  <img src="https://picsum.photos/284/192?random=3" alt="California Coastal Style" className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <span className="text-xs font-bold tracking-widest text-gray-600 uppercase">Style Guide</span>
                  <h3 className="text-xl font-semibold my-2">
                    <span className="group-hover:underline">Coastal California: Blending Beach Vibes with Urban Living</span>
                  </h3>
                  <p className="text-sm text-gray-600">By Emily Rodriguez</p>
                </div>
              </Link>

              <Link href="/post" className="block border border-gray-200 rounded-lg overflow-hidden hover:no-underline group">
                <div className="relative h-48">
                  <img src="https://picsum.photos/284/192?random=4" alt="California Tech Furniture" className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <span className="text-xs font-bold tracking-widest text-gray-600 uppercase">Tech Integration</span>
                  <h3 className="text-xl font-semibold my-2">
                    <span className="group-hover:underline">Silicon Valley Living: Smart Furniture for the Digital Age</span>
                  </h3>
                  <p className="text-sm text-gray-600">By David Kim</p>
                </div>
              </Link>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">FAQs for Finding Furniture Stores in San Jose, CA</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">What are the best areas for furniture shopping in San Jose?</h3>
                <p className="text-gray-700">
                  San Jose offers several excellent areas for furniture shopping, each with its own unique character. Santana Row is known for high-end, luxury furniture stores, while Downtown San Jose features a mix of modern and
                  traditional retailers. Willow Glen offers charming boutique stores, and the Campbell area is home to several budget-friendly options. Each district provides a different shopping experience, from luxury showrooms to
                  family-owned businesses.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">What services do furniture stores in San Jose typically offer?</h3>
                <p className="text-gray-700">
                  Furniture stores in San Jose provide a comprehensive range of services to meet various customer needs. Most stores offer delivery and assembly services, with some providing white-glove delivery for premium items. Many
                  stores have in-house design consultants who can help with space planning and style selection. Additional services often include custom upholstery, furniture repair, and financing options. Some stores also provide virtual
                  consultations and 3D room planning tools.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">What should I look for when choosing a furniture store in San Jose?</h3>
                <p className="text-gray-700">
                  When selecting a furniture store in San Jose, consider factors such as the store's reputation, quality of products, and customer service. Look for stores with positive reviews and a history of satisfied customers. Check
                  the materials and construction of their furniture, and ask about warranties and return policies. Consider the store's specialization (modern, traditional, custom, etc.) and whether it matches your style preferences. Also,
                  evaluate their delivery and assembly services, especially if you need help with setup.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">What questions should I ask when visiting furniture stores in San Jose?</h3>
                <p className="text-gray-700">
                  Important questions to ask include: What is the delivery timeline and process? What are the warranty terms and return policies? Do you offer custom options or modifications? What are the payment and financing options? How
                  do you handle repairs or issues after purchase? Also, ask about the store's experience with similar projects and request to see customer testimonials or examples of their work. Don't forget to inquire about any ongoing
                  promotions or seasonal sales.
                </p>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </body>
    </>
  );
}

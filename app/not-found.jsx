import Navbar from "@/components/Navbar";
import { Outfit } from "next/font/google";
import Footer from "@/components/Footer";
import Link from "next/link";

const outfit = Outfit({ subsets: ["latin"] });

export default function NotFound() {
  return (
    <>
      <head>
        <title>404 - Page Not Found | FurnitureStored</title>
        <meta name="description" content="404 - Page Not Found" />
      </head>
      <body className={`${outfit.className} antialiased text-[rgba(0,0,0,0.95)]`}>
        <Navbar />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-36">
          <div className="text-center">
            <div className="mb-8">
              <h1 className="text-9xl font-bold text-rose-600 mb-4">404</h1>
              <div className="w-24 h-1 bg-rose-600 mx-auto mb-8"></div>
              <h2 className="text-3xl font-semibold mb-4">Oops! This Page Seems to Have Moved</h2>
              <p className="text-gray-600 max-w-2xl mx-auto mb-8">Like a well-organized furniture showroom, we've rearranged some things. The page you're looking for might have been moved or is temporarily unavailable.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
              <Link href="/" className="group p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-rose-600">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                  <h3 className="text-xl font-semibold group-hover:text-rose-600 transition-colors">Return Home</h3>
                </div>
                <p className="text-gray-600">Head back to our homepage to explore our furniture collections</p>
              </Link>

              <Link href="/locations" className="group p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-rose-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <h3 className="text-xl font-semibold group-hover:text-rose-600 transition-colors">Find Stores</h3>
                </div>
                <p className="text-gray-600">Discover furniture stores in your area</p>
              </Link>
            </div>

            <div className="text-center">
              <p className="text-gray-600 mb-4">Need help finding something specific?</p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-rose-600 hover:text-rose-700 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                Contact our support team
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </body>
    </>
  );
}
import Head from 'next/head';


export default function Sitemap() {
  
  return (
    <>
      <Head>
        <title>Sitemap | FurnitureStored</title>
        <meta name="description" content="Complete sitemap of FurnitureStored - Find all pages and links" />
      </Head>
      <body className="bg-gray-50">
        <main className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold mb-8">Sitemap</h1>

          {/* Home Page */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Home Page</h2>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-rose-600 hover:text-rose-700 hover:underline">
                  Home
                </a>
              </li>
            </ul>
          </section>

          {/* State Pages */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">State Page</h2>
            <ul className="space-y-2">
              <li>
                <a href="/state/california" className="text-rose-600 hover:text-rose-700 hover:underline">
                  California Furniture Stores
                </a>
              </li>
            </ul>
          </section>

          {/* City Pages */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">City Page</h2>
            <ul className="space-y-2">
              <li>
                <a href="/city-san-jose-ca" className="text-rose-600 hover:text-rose-700 hover:underline">
                  San Jose Furniture Stores
                </a>
              </li>
            </ul>
          </section>

          {/* Store Pages */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Store Page</h2>
            <ul className="space-y-2">
              <li>
                <a href="/store-kcc-modern-living-berkeley-ca" className="text-rose-600 hover:text-rose-700 hover:underline">
                  KCC Modern Living - Berkeley
                </a>
              </li>
              <li>
                <a href="/store-liz-andrew-furniture-modesto-ca" className="text-rose-600 hover:text-rose-700 hover:underline">
                  Liz Andrew Furniture - Modesto
                </a>
              </li>
            </ul>
          </section>

          {/* Blog Pages */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Blog Pages</h2>
            <ul className="space-y-2">
              <li>
                <a href="/blog" className="text-rose-600 hover:text-rose-700 hover:underline">
                  Blog Index
                </a>
              </li>
              <li>
                <a href="/blog-single" className="text-rose-600 hover:text-rose-700 hover:underline">
                  Blog Single Post
                </a>
              </li>
            </ul>
          </section>
        </main>
      </body>
    </>
  );
}
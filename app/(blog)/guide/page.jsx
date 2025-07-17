import Link from "next/link";
import { Outfit } from "next/font/google";
import { headers } from "next/headers";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MarkdownRenderer from "@/components/MarkdownRenderer";
const outfit = Outfit({ subsets: ["latin"] });

const getPostsByCategory = async (categorySlug) => {
	const query = new URLSearchParams({
		category: categorySlug,
		});
  const res = await fetch(`${process.env.API_URI}/api/posts-category?${query.toString()}`);
  const posts = await res.json();
  return posts;
};


export default async function BlogCategoryPage({ params }) {
	// Get the full URL path
	const headersList = headers();
	const fullUrl = headersList.get("x-next-url"); // Next.js sets this header with the path

	// Parse the category from the path
	// Example: /guide/sofas/best-sofas-under-100
	// Split and get the first segment after the leading slash
	const categorySlug = fullUrl?.split("/")[1] || "guide"; // fallback to 'guide' if not found


	const { posts } = await getPostsByCategory(categorySlug);

  return (
    <>
      <head>
        <title>{categorySlug}</title>
        <meta name="description" content={categorySlug} />
      </head>
      <body className={`${outfit.className} antialiased text-[rgba(0,0,0,0.95)]`}>
        <Navbar />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          <h1 className="text-4xl font-bold text-center mb-10">{categorySlug.charAt(0).toUpperCase() + categorySlug.slice(1)}</h1>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {posts && posts.length > 0 ? (
              posts.map((post) => (
                <div key={post._id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                  {post.featuredImage?.url && (
                    <img
                      src={post.featuredImage.url}
                      alt={post.featuredImage.alt || post.title}
                      className="h-48 w-full object-cover"
                    />
                  )}
                  <div className="p-4 flex-1 flex flex-col">
                    <h2 className="text-xl font-semibold mb-2 line-clamp-2">{post.title}</h2>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt || post.metaDescription}</p>
                    <Link
                      href={`/${categorySlug}/${post.subcategory ? post.subcategory + '/' : ''}${post.slug}`}
                      className="mt-auto inline-block text-blue-600 hover:underline font-medium"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center text-gray-500">No posts found.</div>
            )}
          </div>
        </div>

        <Footer />
      </body>
    </>
  );
}

import Link from "next/link";
import { Outfit } from "next/font/google";
import { headers } from "next/headers";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MarkdownRenderer from "@/components/MarkdownRenderer";
const outfit = Outfit({ subsets: ["latin"] });

const getPostBySlug = async (postSlug, categorySlug, subcategorySlug) => {
	const query = new URLSearchParams({
		category: categorySlug,
		subcategory: subcategorySlug,
		});
  const res = await fetch(`${process.env.API_URI}/api/post/${postSlug}?${query.toString()}`);
  const post = await res.json();
  return post;
};


export default async function BlogPostPage({ params }) {
	// Get the full URL path
	const headersList = headers();
	const fullUrl = headersList.get("x-next-url"); // Next.js sets this header with the path

	// Parse the category from the path
	// Example: /guide/sofas/best-sofas-under-100
	// Split and get the first segment after the leading slash
	const categorySlug = fullUrl?.split("/")[1] || "guide"; // fallback to 'guide' if not found

	const { postSlug, subcategorySlug } = params;
	console.log("categorySlug:", categorySlug);

	const { post } = await getPostBySlug(postSlug, categorySlug, subcategorySlug);

  return (
    <>
      <head>
        <title>{post.title}</title>
        <meta name="description" content={post.description} />
      </head>
      <body className={`${outfit.className} antialiased text-[rgba(0,0,0,0.95)]`}>
        <Navbar />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              {post.title}
            </h1>
            <img src={post.featuredImage.url} alt={post.featuredImage.alt} />
            <p className="mt-4 text-xl text-gray-500">{post.description}</p>
          </div>

          <div className="prose max-w-none">
            {/*<div dangerouslySetInnerHTML={{ __html: post.content }} />*/}
            <MarkdownRenderer markdown={post.content} />
          </div>
        </div>

        <Footer />
      </body>
    </>
  );
}

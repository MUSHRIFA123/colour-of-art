'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function ArticlesThreeColumn({ articleCardsData = { sectionTitle: '', posts: [] } }) {
  // Ensure posts is always an array
  const posts = articleCardsData.posts || [];

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-8">
          {articleCardsData.sectionTitleLink ? (
            <Link 
              href={articleCardsData.sectionTitleLink}
              className="font-bold text-3xl md:text-4xl hover:underline"
            >
              {articleCardsData.sectionTitle}
            </Link>
          ) : (
            <h2 className="font-bold text-2xl md:text-4xl">
              {articleCardsData.sectionTitle}
            </h2>
          )}
        </div>

        {/* Three Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Link 
              key={index} 
              href={post.url}
              className="group"
            >
              <article className="flex flex-col">
                <div className="relative w-full h-[300px] mb-4">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-3">
                  <span className="font-bold uppercase tracking-wider text-xs text-gray-600">
                    {post.category}
                  </span>
                  <h3 className="font-bold text-xl group-hover:underline">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    By {post.author}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

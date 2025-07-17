'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function ArticleCardLatest({ articleCardLatestData }) {
    return (
        <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Title */}
                <div className="text-center mb-8">
                    <h2 className="font-bold text-3xl md:text-4xl">
                        {articleCardLatestData.sectionTitle}
                    </h2>
                </div>

                {/* Articles Grid */}
                <div className="space-y-6">
                    {articleCardLatestData.posts.map((article, index) => (
                        <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                            <Link href={article.url} className="group flex items-start">
                                {/* Article Image - 40% width */}
                                <div className="relative w-[40%]">
                                    <div className="relative w-full h-[200px]">
                                        <Image
                                            src={article.image}
                                            alt={article.title}
                                            fill
                                            className="object-contain object-top"
                                        />
                                    </div>
                                </div>

                                {/* Article Details - 60% width */}
                                <div className="w-[60%] pl-4 md:pl-6">
                                    <div className="flex flex-col h-full">
                                        <span className="font-bold uppercase tracking-wider text-xs text-gray-600">
                                            {article.category}
                                        </span>
                                        <h3 className="font-bold text-xl md:text-2xl mt-2 group-hover:underline">
                                            {article.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 mt-2">
                                            By {article.author}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

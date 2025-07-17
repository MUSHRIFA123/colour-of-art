'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function HomeArticleFullBG({ articleData }) {
    return (
        <Link href={articleData.url} className="group">
            <section className="relative md:h-[66.67vh]">
                {/* Full width background image */}
                <div className="relative h-[50vh] md:absolute md:inset-0 w-full">
                    <Image
                        src={articleData.image}
                        alt={articleData.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* White container overlay */}
                <div className="md:absolute md:inset-0 flex items-center justify-center">
                    <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="bg-white p-8 w-full md:w-1/3">
                            <div className="space-y-4">
                                <span className="font-bold uppercase tracking-wider text-xs text-gray-600">
                                    {articleData.category}
                                </span>
                                <h2 className="font-bold text-3xl group-hover:underline">
                                    {articleData.title}
                                </h2>
                                <p className="text-gray-600">
                                    {articleData.description}
                                </p>
                                <p className="text-sm text-gray-600">
                                    By {articleData.authorName}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Link>
    )
}

import ReactMarkdown from 'react-markdown';
import relatedArticles from '../data/prod/json/post_related.json';

export default function PostContent({ postData }) {
    return (
        <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Breadcrumbs */}
                <nav className="mb-8">
                    <ol className="flex flex-wrap gap-2 text-sm text-gray-600">
                        {postData.breadcrumbs?.map((crumb, index) => (
                            <li key={index} className="flex items-center">
                                {index > 0 && <span className="mx-2">/</span>}
                                <a href={crumb.url} className="hover:text-gray-900">
                                    {crumb.text}
                                </a>
                            </li>
                        ))}
                    </ol>
                </nav>

                {/* Article Header - Full Width */}
                <article className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        {postData.title}
                    </h1>
                    <p className="text-lg font-light mb-8">
                        {postData.subtitle}
                    </p>

                    {/* Author Info */}
                    <div className="flex items-center gap-4 mb-8">
                        <img 
                            src={postData.author?.image} 
                            alt={postData.author?.name}
                            className="w-12 h-12 rounded-full"
                        />
        <div>
                            <p className="font-semibold">
                                By <a href={postData.author?.url} className="hover:underline">
                                    {postData.author?.name}
                                </a>
                            </p>
                            <p className="text-sm text-gray-600">
                                {postData.publishedDate}
                            </p>
                        </div>
                    </div>

                    {/* Featured Image */}
                    {postData.featuredImage && (
                        <div className="mb-8">
                            <img 
                                src={postData.featuredImage.url} 
                                alt={postData.featuredImage.alt}
                                className="w-full h-auto rounded-lg"
                            />
                            <p className="text-sm text-gray-600 mt-2">
                                {postData.featuredImage.caption}
                                {postData.featuredImage.credit && (
                                    <span className="ml-2">{postData.featuredImage.credit}</span>
                                )}
                            </p>
                        </div>
                    )}
                </article>

                {/* Three Column Layout for Content and Sidebar */}
                <div className="flex flex-col lg:flex-row">
                    {/* Main Content - 6/10 width */}
                    <div className="lg:w-6/10">
                        {/* Article Content */}
                        <div className="prose prose-lg max-w-none prose-headings:font-bold prose-p:text-gray-600 prose-p:font-light prose-p:leading-relaxed prose-p:mb-4 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-strong:font-bold prose-strong:text-gray-900 prose-em:text-gray-600 prose-em:italic prose-blockquote:border-l-4 prose-blockquote:border-gray-300 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-600 prose-ul:list-disc prose-ul:pl-6 prose-ul:my-4 prose-ol:list-decimal prose-ol:pl-6 prose-ol:my-4 prose-li:my-1 prose-hr:my-8 prose-hr:border-gray-200 prose-h2:text-3xl prose-h2:font-bold prose-h2:mt-12 prose-h2:mb-6">
                            <ReactMarkdown>{postData.content}</ReactMarkdown>
                        </div>

                        {/* Social Sharing */}
                        {postData.socialSharing && (
                            <div className="mt-12 pt-8 border-t">
                                <h3 className="text-lg font-semibold mb-4">Share this article</h3>
                                <div className="flex gap-4">
                                    {postData.socialSharing.facebook && (
                                        <a href={postData.socialSharing.facebook} className="text-gray-600 hover:text-gray-900">
                                            Facebook
                                        </a>
                                    )}
                                    {postData.socialSharing.pinterest && (
                                        <a href={postData.socialSharing.pinterest} className="text-gray-600 hover:text-gray-900">
                                            Pinterest
                                        </a>
                                    )}
                                    {postData.socialSharing.email && (
                                        <a href={postData.socialSharing.email} className="text-gray-600 hover:text-gray-900">
                                            Email
                                        </a>
                                    )}
                                    {postData.socialSharing.print && (
                                        <a href={postData.socialSharing.print} className="text-gray-600 hover:text-gray-900">
                                            Print
                                        </a>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Empty Space - 1/10 width */}
                    <div className="lg:w-1/10 hidden lg:block"></div>

                    {/* Sidebar - 3/10 width */}
                    <div className="lg:w-3/10 hidden lg:block">
                        <div className="sticky top-8">
                            <h3 className="text-xl font-bold mb-6">Related Articles</h3>
                            <div className="space-y-6">
                                {/* Example Related Articles - Replace with actual data */}
                                <div className="border-b border-gray-200 pb-6 last:border-b-0">
                                    <a href="#" className="block group">
                                        <h4 className="font-semibold text-lg mb-2 group-hover:underline">
                                            Exploring Nebraska's Hidden Gems
                                        </h4>
                                        <p className="text-sm text-gray-600">
                                            Discover more quiet places in the heartland
                                        </p>
                                    </a>
                                </div>
                                <div className="border-b border-gray-200 pb-6 last:border-b-0">
                                    <a href="#" className="block group">
                                        <h4 className="font-semibold text-lg mb-2 group-hover:underline">
                                            The Best Time to Visit the Niobrara
                                        </h4>
                                        <p className="text-sm text-gray-600">
                                            Seasonal guide to planning your trip
                                        </p>
                                    </a>
                                </div>
                                <div className="border-b border-gray-200 pb-6 last:border-b-0">
                                    <a href="#" className="block group">
                                        <h4 className="font-semibold text-lg mb-2 group-hover:underline">
                                            Wildlife Watching in Nebraska
                                        </h4>
                                        <p className="text-sm text-gray-600">
                                            Spotting eagles, beavers, and more
                                        </p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#F2F2F2]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Related Articles */}
                    <div className="mt-12 py-12">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h3 className="text-2xl font-bold mb-8">Related Articles</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {relatedArticles.related_articles.articles.map((article, index) => (
                                    <div key={index} className="border border-[rgba(0,0,0,0.15)] bg-white"> 
                                        <img 
                                            src={article.image} 
                                            alt={article.title} 
                                            className="w-full h-48 object-cover"
                                        />
                                        <div className="p-4">
                                            <span className="text-xs font-bold tracking-widest text-gray-600 uppercase">
                                                {article.category}
                                            </span>
                                            <h4 className="text-xl font-semibold my-2">{article.title}</h4> 
                                            <p className="text-sm text-gray-600">By {article.author}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        </>
    );
}
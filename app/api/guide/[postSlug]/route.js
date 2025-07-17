import {connectMongoDB} from "@/lib/mongodb";
import Guide from "@/models/Guides";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { postSlug } = params;
  const searchParams = request.nextUrl.searchParams;
  const category = searchParams.get("category");
  const subcategory = searchParams.get("subcategory");
  console.log("API: postSlug:", postSlug)
  console.log("API: category:", category)
  console.log("API: subcategory:", subcategory)
  try {
    await connectMongoDB();
    const post = await Guide.findOne({ slug: postSlug, category: category, subcategory: subcategory }).exec();
    
    // Sample post data for testing/fallback
    const postStatic = {
      title: "Sample Blog Post",
      slug: "sample-blog-post",
      content: "This is a sample blog post content...",
      excerpt: "A brief excerpt of the sample post",
      metaDescription: "Sample blog post meta description",
      author: {
        name: "John Doe",
        slug: "john-doe",
        bio: "Sample author bio"
      },
      status: "published",
      featuredImage: {
        url: "https://via.placeholder.com/800x400",
        alt: "Sample Blog Post Image",
        caption: "Sample Blog Post Featured Image"
      }
    };

    console.log("API post:", post)

    return NextResponse.json({ post }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Could not fetch post" }, { status: 500 });
  }
}

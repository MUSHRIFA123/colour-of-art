import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { postSlug } = params;
  try {
    // Path to markdown file
    const filePath = path.join(
      process.cwd(),
      "data",
      "prod",
      "markdown",
      `${postSlug}.md`
    );
    const fileContent = await fs.readFile(filePath, "utf8");
    const { content, data } = matter(fileContent);

    // Convert markdown to HTML
    const processedContent = await remark().use(html).process(content);
    const contentHtml = processedContent.toString();

    // Compose post object
    const post = {
      title: data.title || postSlug.replace(/-/g, " "),
      slug: postSlug,
      content: contentHtml,
      excerpt: data.excerpt || "",
      featuredImage: data.featuredImage || null,
    };

    return NextResponse.json({ post }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Could not fetch post" }, { status: 500 });
  }
}
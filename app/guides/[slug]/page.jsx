import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

export default function GuidePage({ params }) {
  const { slug } = params;
  const markdownPath = path.join(process.cwd(), "data/prod/markdown", slug + ".md");
  const markdownWithMeta = fs.readFileSync(markdownPath, "utf-8");

  const { data: frontmatter, content } = matter(markdownWithMeta);
  const rawHTML = marked(content);
  const safeHTML = stripHtmlWrappers(rawHTML); // no <body> tags left

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-4">{frontmatter.title || slug}</h1>
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: safeHTML }}
      />
    </div>
  );
}

function stripHtmlWrappers(html) {
  return html
    .replace(/<\/?(html|head|body)[^>]*>/gi, '')
    .trim();
}

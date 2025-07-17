import fs from "fs";
import path from "path";
import { marked } from "marked";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const title = typeof params?.slug === "string"
    ? params.slug.replace(/-/g, " ")
    : "Painting Guide";

  return {
    title: `${title} | Colour of Art`,
    description: `Explore our detailed guide on ${title}. Tips, techniques, and inspiration for artists at all levels.`,
  };
}

export default async function GuidePage({ params }) {
  const { slug } = params;

  const filePath = path.join(process.cwd(), "data", "prod", "markdown", `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    notFound(); // 404 page
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const htmlContent = marked.parse(fileContent);

  return (
    <div className="max-w-3xl mx-auto px-6 py-16 prose prose-lg">
      <h1 className="text-3xl font-bold capitalize mb-6">{slug.replace(/-/g, " ")}</h1>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
}

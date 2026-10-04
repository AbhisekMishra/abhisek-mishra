import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  order?: number;
  /** Search-friendly <title> and meta description; the on-page headline stays `title`. */
  seoTitle?: string;
  seoDescription?: string;
};

function listPostFiles(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs.readdirSync(POSTS_DIR).filter((file) => file.endsWith(".mdx"));
}

export function getAllPosts(): PostMeta[] {
  return listPostFiles()
    .map((file) => {
      const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf8");
      const { data } = matter(raw);
      return {
        slug: file.replace(/\.mdx$/, ""),
        title: data.title as string,
        date: data.date as string,
        summary: data.summary as string,
        // Optional: breaks ties between posts published on the same day (higher = listed first).
        order: Number(data.order ?? 0),
      };
    })
    .sort((a, b) => (a.date === b.date ? b.order - a.order : a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): { meta: PostMeta; content: string } | null {
  const file = path.join(POSTS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;

  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);

  return {
    meta: {
      slug,
      title: data.title as string,
      date: data.date as string,
      summary: data.summary as string,
      seoTitle: data.seoTitle as string | undefined,
      seoDescription: data.seoDescription as string | undefined,
    },
    content,
  };
}

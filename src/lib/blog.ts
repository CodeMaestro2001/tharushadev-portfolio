import "server-only";
import { promises as fs } from "node:fs";
import path from "node:path";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  publishedAt: string;
  tags: string[];
  image: string | null;
  imageAlt: string;
};

const blogDirectory = path.join(process.cwd(), "content", "blog");

function isBlogPost(value: unknown): value is BlogPost {
  if (!value || typeof value !== "object") return false;
  const post = value as Record<string, unknown>;
  return (
    typeof post.slug === "string" &&
    typeof post.title === "string" &&
    typeof post.excerpt === "string" &&
    typeof post.body === "string" &&
    typeof post.publishedAt === "string" &&
    Array.isArray(post.tags) &&
    post.tags.every((tag) => typeof tag === "string") &&
    (typeof post.image === "string" || post.image === null) &&
    typeof post.imageAlt === "string"
  );
}

export async function getBlogPosts() {
  let files: string[];
  try {
    files = await fs.readdir(blogDirectory);
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") return [];
    throw error;
  }

  const posts = await Promise.all(
    files
      .filter((file) => file.endsWith(".json"))
      .map(async (file) => {
        try {
          const raw = await fs.readFile(path.join(blogDirectory, file), "utf8");
          const post: unknown = JSON.parse(raw);
          return isBlogPost(post) ? post : null;
        } catch {
          return null;
        }
      }),
  );

  return posts
    .filter((post): post is BlogPost => post !== null)
    .sort((left, right) => Date.parse(right.publishedAt) - Date.parse(left.publishedAt));
}

export async function getBlogPost(slug: string) {
  const safeSlug = slug.replace(/[^a-z0-9-]/g, "");
  if (!safeSlug || safeSlug !== slug) return null;
  try {
    const raw = await fs.readFile(path.join(blogDirectory, `${safeSlug}.json`), "utf8");
    const post: unknown = JSON.parse(raw);
    return isBlogPost(post) ? post : null;
  } catch {
    return null;
  }
}

export function formatPostDate(value: string) {
  return new Intl.DateTimeFormat("en", { year: "numeric", month: "long", day: "numeric" }).format(new Date(value));
}

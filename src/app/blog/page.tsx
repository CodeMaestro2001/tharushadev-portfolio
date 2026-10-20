import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, PenLine } from "lucide-react";
import { PageIntro } from "@/components/PageIntro";
import { formatPostDate, getBlogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Writing",
  description: "Notes on software engineering, automation, and building useful digital products.",
};

export const instant = false;

export default async function BlogPage() {
  const posts = await getBlogPosts();
  return (
    <main id="main-content" className="interior-page blog-page">
      <div className="site-container">
        <PageIntro number="05" label="Writing" description="Practical notes from building software, automating workflows, and learning in public.">
          Ideas, systems, and the <em>work between.</em>
        </PageIntro>
        {posts.length ? (
          <section className="blog-index" aria-label="Published articles">
            {posts.map((post, index) => (
              <article className={`blog-card ${index === 0 ? "blog-card--featured" : ""}`} key={post.slug}>
                <Link className="blog-card-visual" href={`/blog/${post.slug}`} tabIndex={-1} aria-hidden="true">
                  {post.image ? <Image src={post.image} alt="" width={post.imageWidth || 1400} height={post.imageHeight || 760} sizes={index === 0 ? "(max-width: 900px) 100vw, 60vw" : "(max-width: 900px) 100vw, 40vw"} /> : <span className="blog-placeholder"><PenLine size={30} /></span>}
                </Link>
                <div className="blog-card-copy">
                  <p className="eyebrow"><span>{String(index + 1).padStart(2, "0")}</span> {formatPostDate(post.publishedAt)}</p>
                  <h2><Link href={`/blog/${post.slug}`}>{post.title}</Link></h2>
                  <p>{post.excerpt}</p>
                  <div className="blog-card-foot"><div className="tag-list">{post.tags.slice(0, 3).map((tag) => <span className="tech-tag" key={tag}>{tag}</span>)}</div><Link className="round-arrow" href={`/blog/${post.slug}`} aria-label={`Read ${post.title}`}><ArrowUpRight size={19} /></Link></div>
                </div>
              </article>
            ))}
          </section>
        ) : (
          <section className="blog-empty"><PenLine size={28} /><h2>The first note is being written.</h2><p>Articles on software engineering and automation will appear here soon.</p></section>
        )}
      </div>
    </main>
  );
}

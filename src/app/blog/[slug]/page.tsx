import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";
import { MarkdownArticle } from "@/components/MarkdownArticle";
import { formatPostDate, getBlogPost } from "@/lib/blog";

type BlogPostPageProps = { params: Promise<{ slug: string }> };

export const instant = false;

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getBlogPost((await params).slug);
  if (!post) return { title: "Article not found" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, type: "article", publishedTime: post.publishedAt, images: post.image ? [{ url: post.image, alt: post.imageAlt }] : undefined },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPost((await params).slug);
  if (!post) notFound();
  const imageWidth = post.imageWidth || 1600;
  const imageHeight = post.imageHeight || 900;
  const isPortrait = imageHeight > imageWidth;
  return (
    <main id="main-content" className="interior-page article-page">
      <article className="site-container">
        <header className="article-header">
          <Link className="article-back" href="/blog"><ArrowLeft size={16} /> All writing</Link>
          <div className="article-meta"><span className="eyebrow">{formatPostDate(post.publishedAt)}</span><span className="eyebrow">{Math.max(1, Math.ceil(post.body.split(/\s+/).length / 220))} min read</span></div>
          <h1>{post.title}</h1>
          <p>{post.excerpt}</p>
          {post.tags.length > 0 && <div className="tag-list">{post.tags.map((tag) => <span className="tech-tag" key={tag}>{tag}</span>)}</div>}
        </header>
        {post.image && <figure className={`article-cover ${isPortrait ? "article-cover--portrait" : ""}`}><Image src={post.image} alt={post.imageAlt} width={imageWidth} height={imageHeight} sizes={isPortrait ? "(max-width: 600px) 100vw, 736px" : "(max-width: 900px) 100vw, 1088px"} priority />{post.imageAlt && post.imageAlt !== post.title ? <figcaption>{post.imageAlt}</figcaption> : null}</figure>}
        <div className="article-layout"><aside><p className="eyebrow">Written by</p><strong>Tharusha Rathnayaka</strong><p>Software Engineer<br />Sri Lanka</p></aside><MarkdownArticle body={post.body} /></div>
        <footer className="article-end"><p className="eyebrow">End note</p><h2>Have a thought on this?</h2><a className="pill-button" href="https://www.linkedin.com/in/tharusha-rathnayaka-b46119285/" target="_blank" rel="noreferrer">Continue on LinkedIn <ArrowUpRight size={18} /></a></footer>
      </article>
    </main>
  );
}

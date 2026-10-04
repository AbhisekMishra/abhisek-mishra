import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { mdxComponents, mdxOptions } from "@/lib/mdx";
import { profile, siteUrl } from "@/lib/data";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const title = post.meta.seoTitle ?? `${post.meta.title} — Abhisek Mishra`;
  const description = post.meta.seoDescription ?? post.meta.summary;
  const url = `${siteUrl}/blog/${slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      publishedTime: post.meta.date,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const url = `${siteUrl}/blog/${slug}`;
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.meta.title,
    description: post.meta.seoDescription ?? post.meta.summary,
    image: `${url}/opengraph-image`,
    datePublished: post.meta.date,
    dateModified: post.meta.date,
    url,
    mainEntityOfPage: url,
    author: {
      "@type": "Person",
      name: profile.name,
      url: siteUrl,
    },
  };

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground"
      >
        <ArrowLeft size={14} />
        Back to blog
      </Link>

      <p className="mt-6 text-xs text-muted">{post.meta.date}</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight">{post.meta.title}</h1>

      <div className="prose prose-neutral mt-8 max-w-none prose-h2:mt-12 prose-h2:tracking-tight prose-a:text-accent dark:prose-invert">
        <MDXRemote source={post.content} components={mdxComponents} options={mdxOptions} />
      </div>
    </article>
  );
}

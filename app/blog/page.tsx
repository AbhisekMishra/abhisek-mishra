import type { Metadata } from "next";
import Link from "next/link";
import { PenLine } from "lucide-react";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog — Abhisek Mishra",
  description: "Notes on agentic AI, RAG systems, and production engineering.",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-sm font-mono uppercase tracking-widest text-accent">Blog</h1>
      <p className="mt-4 max-w-xl text-muted">
        Write-ups on what I&apos;m building and learning — agentic AI, RAG, and production
        engineering.
      </p>

      {posts.length === 0 ? (
        <div className="mt-10 flex flex-col items-start gap-3 rounded-xl border border-dashed border-border p-10 text-muted">
          <PenLine size={22} className="text-accent" />
          <p className="text-sm">
            More writing coming soon. In the meantime, see the{" "}
            <Link href="/#projects" className="text-accent hover:opacity-80">
              Projects
            </Link>{" "}
            section for what I&apos;ve been building.
          </p>
        </div>
      ) : (
        <div className="mt-10 space-y-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block rounded-xl border border-border p-6 transition-colors hover:bg-muted-bg"
            >
              <p className="text-xs text-muted">{post.date}</p>
              <h2 className="mt-1 text-lg font-semibold">{post.title}</h2>
              <p className="mt-2 text-sm text-foreground/80">{post.summary}</p>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}

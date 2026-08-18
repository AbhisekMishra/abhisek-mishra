import { ImageResponse } from "next/og";
import { getPostBySlug } from "@/lib/posts";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const title = post?.meta.title ?? "Abhisek Mishra";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "#0a0e14",
          color: "#e5e9f0",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 72,
            height: 72,
            borderRadius: 16,
            background: "#f0b429",
            color: "#0a0e14",
            fontSize: 28,
            fontWeight: 700,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          AM
        </div>

        <div style={{ display: "flex", fontSize: 52, fontWeight: 700, lineHeight: 1.25 }}>
          {title}
        </div>

        <div style={{ display: "flex", fontSize: 26, color: "#94a3b8" }}>
          Abhisek Mishra — Blog
        </div>
      </div>
    ),
    { ...size }
  );
}

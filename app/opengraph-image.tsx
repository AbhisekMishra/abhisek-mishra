import fs from "node:fs";
import path from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const photo = fs.readFileSync(path.join(process.cwd(), "public", "profile.jpg"));
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          padding: "80px",
          gap: "56px",
          background: "#0a0e14",
          color: "#e5e9f0",
          fontFamily: "sans-serif",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photoSrc}
          alt=""
          width={220}
          height={220}
          style={{ borderRadius: 28, objectFit: "cover" }}
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 56, fontWeight: 700 }}>Abhisek Mishra</div>
          <div style={{ display: "flex", fontSize: 28, color: "#94a3b8", marginTop: 16 }}>
            Lead Software Engineer — Building Agentic AI Systems in Production
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}

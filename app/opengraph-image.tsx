import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0a0e14",
          color: "#e5e9f0",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 96,
            height: 96,
            borderRadius: 20,
            background: "#f0b429",
            color: "#0a0e14",
            fontSize: 40,
            fontWeight: 700,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          AM
        </div>
        <div style={{ display: "flex", fontSize: 56, fontWeight: 700, marginTop: 40 }}>
          Abhisek Mishra
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#94a3b8", marginTop: 16 }}>
          Lead Software Engineer — Building Agentic AI Systems in Production
        </div>
      </div>
    ),
    { ...size }
  );
}

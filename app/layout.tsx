import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://abhisek-mishra.vercel.app";
const title = "Abhisek Mishra — Lead Software Engineer, Agentic AI";
const description =
  "Lead Software Engineer at Emirates NBD building agentic AI systems in production — Claude API, MCP, RAG, LangGraph. 13+ years of enterprise banking engineering.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "Abhisek Mishra",
    "Software Engineer",
    "Solution Architect",
    "Agentic AI",
    "LangGraph",
    "Model Context Protocol",
    "Claude API",
    "RAG",
    "Emirates NBD",
  ],
  authors: [{ name: "Abhisek Mishra" }],
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Abhisek Mishra",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

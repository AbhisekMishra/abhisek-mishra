import { Readable } from "node:stream";
import { renderToStream } from "@react-pdf/renderer";
import { ResumeDocument } from "@/lib/resume-pdf";

export const runtime = "nodejs";

export async function GET() {
  const nodeStream = await renderToStream(<ResumeDocument />);

  return new Response(Readable.toWeb(nodeStream as Readable) as ReadableStream, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="AbhisekMishra.pdf"',
      "Cache-Control": "no-store",
    },
  });
}

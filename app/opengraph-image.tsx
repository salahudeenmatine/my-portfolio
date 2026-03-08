// app/opengraph-image.tsx
import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          backgroundColor: "#080b10",
          color: "#ffffff",
          position: "relative",
          fontFamily:
            "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
        }}
      >
        {/* subtle grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(0,255,140,0.08) 1px, transparent 1px), linear-gradient(to right, rgba(0,255,140,0.08) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            opacity: 0.25,
          }}
        />

        {/* glow */}
        <div
          style={{
            position: "absolute",
            width: 900,
            height: 900,
            left: "50%",
            top: "35%",
            transform: "translate(-50%, -50%)",
            background:
              "radial-gradient(circle, rgba(0,255,140,0.18) 0%, rgba(0,255,140,0.05) 35%, rgba(8,11,16,0) 70%)",
            filter: "blur(12px)",
          }}
        />

        {/* content */}
        <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 72, fontWeight: 800, letterSpacing: -1 }}>
            Salahudeen Matine
          </div>
          <div style={{ fontSize: 28, color: "#00ff8c", fontWeight: 700 }}>
            Cyber Security • OSINT • Web App Testing
          </div>
          <div style={{ fontSize: 22, color: "rgba(255,255,255,0.72)", maxWidth: 900, lineHeight: 1.4 }}>
            Evidence-first investigations, hands-on testing labs, and clear, structured reporting.
          </div>
        </div>

        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "space-between",
            fontSize: 18,
            color: "rgba(255,255,255,0.55)",
          }}
        >
          <div>London, UK</div>
          <div>CV: /cv.pdf</div>
        </div>
      </div>
    ),
    { ...size }
  );
}

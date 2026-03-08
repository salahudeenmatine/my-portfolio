import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#080b10",
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* Radial glow */}
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            right: "0px",
            bottom: "0px",
            background:
              "radial-gradient(ellipse at center, rgba(0,255,140,0.12) 0%, rgba(0,255,140,0.03) 40%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Top accent line */}
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            right: "0px",
            height: "2px",
            background:
              "linear-gradient(to right, transparent, #00ff8c, transparent)",
            display: "flex",
          }}
        />

        {/* Bottom accent line */}
        <div
          style={{
            position: "absolute",
            bottom: "0px",
            left: "0px",
            right: "0px",
            height: "2px",
            background:
              "linear-gradient(to right, transparent, #00ff8c, transparent)",
            display: "flex",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "0px 80px",
            gap: "0px",
          }}
        >
          {/* Eyebrow */}
          <div
            style={{
              color: "#00ff8c",
              fontSize: "14px",
              fontWeight: "600",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              marginBottom: "28px",
              opacity: 0.8,
              display: "flex",
            }}
          >
            Cyber Security Portfolio
          </div>

          {/* Name row */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "baseline",
              gap: "20px",
              marginBottom: "28px",
            }}
          >
            <div
              style={{
                color: "#ffffff",
                fontSize: "80px",
                fontWeight: "700",
                letterSpacing: "-2px",
                lineHeight: "1",
                display: "flex",
              }}
            >
              Salahudeen
            </div>
            <div
              style={{
                color: "#00ff8c",
                fontSize: "80px",
                fontWeight: "700",
                letterSpacing: "-2px",
                lineHeight: "1",
                display: "flex",
              }}
            >
              Matine
            </div>
          </div>

          {/* Subtitle */}
          <div
            style={{
              color: "#00ff8c",
              fontSize: "22px",
              letterSpacing: "0.08em",
              marginBottom: "20px",
              opacity: 0.75,
              display: "flex",
            }}
          >
            Cyber Security • OSINT • Web App Testing
          </div>

          {/* Footer line */}
          <div
            style={{
              color: "#6b7280",
              fontSize: "14px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              display: "flex",
            }}
          >
            London, UK • CV at /cv.pdf
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}

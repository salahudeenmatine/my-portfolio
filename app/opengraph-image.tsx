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
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "monospace",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle green grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(#00ff8c 1px, transparent 1px), linear-gradient(to right, #00ff8c 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            opacity: 0.03,
          }}
        />

        {/* Bottom green line accent */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "2px",
            background: "linear-gradient(to right, transparent, #00ff8c, transparent)",
          }}
        />

        {/* Top green line accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "2px",
            background: "linear-gradient(to right, transparent, #00ff8c, transparent)",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0px",
            textAlign: "center",
            padding: "0 80px",
          }}
        >
          {/* Tagline */}
          <div
            style={{
              color: "#00ff8c",
              fontSize: "13px",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              marginBottom: "24px",
              opacity: 0.8,
            }}
          >
            Cyber Security Portfolio
          </div>

          {/* Name */}
          <div
            style={{
              color: "#ffffff",
              fontSize: "72px",
              fontWeight: "bold",
              letterSpacing: "-2px",
              lineHeight: 1,
              marginBottom: "28px",
            }}
          >
            Salahudeen{" "}
            <span style={{ color: "#00ff8c" }}>Matine</span>
          </div>

          {/* Specialisms */}
          <div
            style={{
              color: "#6b7280",
              fontSize: "22px",
              letterSpacing: "0.05em",
              marginBottom: "20px",
            }}
          >
            Cyber Security · OSINT · Web App Testing
          </div>

          {/* Location */}
          <div
            style={{
              color: "#374151",
              fontSize: "13px",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
            }}
          >
            London, UK · University of West London
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}

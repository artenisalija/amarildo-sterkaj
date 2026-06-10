import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #fbf8f2 0%, #f0e9da 100%)",
          color: "#2f2c27",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            marginBottom: 32,
          }}
        >
          <div style={{ width: 80, height: 1, background: "#b08d3e" }} />
          <div
            style={{
              fontSize: 22,
              letterSpacing: 10,
              textTransform: "uppercase",
              color: "#b08d3e",
            }}
          >
            Investor · Strategist
          </div>
          <div style={{ width: 80, height: 1, background: "#b08d3e" }} />
        </div>
        <div style={{ fontSize: 96, fontWeight: 400, letterSpacing: 2 }}>
          {site.name}
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 30,
            color: "#5d574c",
            fontStyle: "italic",
          }}
        >
          Builder of Opportunity
        </div>
      </div>
    ),
    size
  );
}

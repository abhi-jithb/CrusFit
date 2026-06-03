import { ImageResponse } from "next/og";

import { siteConfig } from "@/constants/site";

export const alt = "CRUSTFIT INDIA combat sports academy in Kollam, Kerala";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "center",
        background: "#050505",
        color: "#f8f8f8",
        display: "flex",
        height: "100%",
        justifyContent: "center",
        padding: 72,
        width: "100%",
      }}
    >
      <div
        style={{
          border: "3px solid #f5c400",
          display: "flex",
          flexDirection: "column",
          gap: 28,
          height: "100%",
          justifyContent: "center",
          padding: 56,
          width: "100%",
        }}
      >
        <div style={{ color: "#f5c400", fontSize: 30, fontWeight: 700 }}>
          Combat Sports & Martial Arts Academy
        </div>
        <div style={{ fontSize: 96, fontWeight: 900, lineHeight: 0.95 }}>{siteConfig.name}</div>
        <div style={{ color: "#d4d4d4", fontSize: 36, maxWidth: 820 }}>
          Boxing, Kickboxing, MMA, Muay Thai and martial arts training in Kollam, Kerala.
        </div>
      </div>
    </div>,
    size,
  );
}

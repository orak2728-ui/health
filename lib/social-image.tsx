import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const socialImageSize = { width: 1200, height: 630 };
export const socialImageAlt =
  "최원락 내과의원 — 암과 만성질환, 발견부터 지속적인 관리까지";

export async function renderSocialImage() {
  const [regular, bold] = await Promise.all([
    readFile(path.join(process.cwd(), "assets/fonts/NotoSansKR-Regular.ttf")),
    readFile(path.join(process.cwd(), "assets/fonts/NotoSansKR-Bold.ttf")),
  ]);

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
          backgroundColor: "#182643",
          padding: "80px 100px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 30,
            fontWeight: 700,
            color: "#7fb8c9",
            marginBottom: 28,
          }}
        >
          내과 전문의 최원락
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 62,
            fontWeight: 700,
            color: "#faf7f2",
            lineHeight: 1.35,
            textAlign: "center",
          }}
        >
          <span>암과 만성질환,</span>
          <span>발견부터 지속적인 관리까지</span>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: 48,
            fontSize: 30,
            fontWeight: 400,
            color: "#c3cbdb",
          }}
        >
          최원락 내과의원 · 051-207-2700
        </div>
      </div>
    ),
    {
      ...socialImageSize,
      fonts: [
        { name: "Noto Sans KR", data: regular, style: "normal", weight: 400 },
        { name: "Noto Sans KR", data: bold, style: "normal", weight: 700 },
      ],
    },
  );
}

import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const socialImageSize = { width: 1200, height: 630 };
export const socialImageAlt =
  "최원락 내과의원 — 건강검진·암·만성질환 조기 발견과 지속관리";

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
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: 340,
            backgroundColor: "#182643",
            padding: "0 90px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 28,
              fontWeight: 700,
              color: "#7fb8c9",
              marginBottom: 22,
            }}
          >
            내과 전문의 최원락
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 50,
              fontWeight: 700,
              color: "#faf7f2",
              lineHeight: 1.35,
              textAlign: "center",
            }}
          >
            <span>암과 만성질환,</span>
            <span>발견부터 지속적인 관리까지</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
            backgroundColor: "#ffffff",
            padding: "0 90px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 48,
              fontWeight: 800,
              color: "#182643",
              letterSpacing: 6,
            }}
          >
            삶 과 예술 과 질병
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: 24,
              fontSize: 26,
              fontWeight: 400,
              color: "#8b93a3",
            }}
          >
            최원락 내과 의원&nbsp;&nbsp;051-207-2700
          </div>
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

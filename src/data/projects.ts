import type { Project } from "../types/post";

export const PROJECTS: Project[] = [
  {
    id: "oshi",
    name: "OSHI",
    description:
      "推しの画像をショートカットキー一つで表示できるブラウザ拡張。誕生日記念や日替わり表示にも対応",
    screenshot: "/screenshots/oshi.svg",
    // url: "https://example.com",
    tags: ["React", "Supabase", "Chrome Extension"],
    legalId: "oshi",
  },
  {
    id: "prism",
    name: "Oculay",
    description:
      "Webページの要素をインスペクトし、CSS情報や要素間の距離を視覚的に確認できるChrome拡張機能",
    screenshot: "/screenshots/oculay.png",
    // url: "https://example.com",
    tags: ["React", "Zustand", "Chrome Extension"],
  },
  {
    id: "front-template",
    name: "Front Template",
    description:
      "ボタン・フォーム・カードなど、UIパーツのスタイリングを実践的に学べるリファレンスコレクション",
    screenshot: "/screenshots/front-template.svg",
    url: "https://front-template-rouge.vercel.app/",
    tags: ["Next.js", "SCSS", "Learning"],
  },
  {
    id: "color-lab",
    name: "Chromix",
    description:
      "色を混ぜると何色になる？その色のカラーパレットは？色の実験と発見を楽しむカラーミキシングツール",
    screenshot: "/screenshots/chromix.png",
    url: "https://chromix.xyz/",
    tags: ["Next.js", "SCSS", "Color"],
  },
  {
    id: "typerim",
    name: "Typerim",
    description:
      "ビジュアルキーボードとサウンドフィードバックを備えたインタラクティブなタイピング練習アプリ",
    screenshot: "/screenshots/typerim.png",
    url: "https://typerim.vercel.app/",
    tags: ["Next.js", "Tailwind", "use-sound"],
  },
];

import type { Project } from "../types/post";

export const PROJECTS: Project[] = [
  {
    id: "acube",
    name: "acube",
    description: "AIによるAIのためのAIファーストサーバーサイドフレームワーク",
    screenshot: "/thumbnail/acube.png",
    url: "https://acubeframework.com/",
    tags: ["Rust", "Server side framework"],
    legalId: "oshi",
  },
  {
    id: "oshi",
    name: "OSHI",
    description:
      "推しの画像をショートカットキー一つで表示できるブラウザ拡張。誕生日記念や日替わり表示にも対応",
    screenshot: "/thumbnail/oshi.png",
    url: "https://chromewebstore.google.com/detail/oshi-%E2%80%94-%E3%82%B9%E3%83%86%E3%83%AB%E3%82%B9%E6%8E%A8%E3%81%97%E6%B4%BB%E3%83%84%E3%83%BC%E3%83%AB/enhpakgmmocopfeojihepklgaghfhfmg?authuser=0&hl=ja",
    tags: ["React", "Supabase", "Chrome Extension"],
    legalId: "oshi",
  },
  {
    id: "prism",
    name: "Oculay",
    description:
      "Webページの要素をインスペクトし、CSS情報や要素間の距離を視覚的に確認できるChrome拡張機能",
    screenshot: "/thumbnail/oculay.png",
    url: "https://chromewebstore.google.com/detail/oculay/paiadpkcoecodopflkdabkaebbilhjcm?authuser=0&hl=ja",
    tags: ["React", "Zustand", "Chrome Extension"],
  },
  {
    id: "front-template",
    name: "Front Template",
    description:
      "ボタン・フォーム・カードなど、UIパーツのスタイリングを実践的に学べるリファレンスコレクション",
    screenshot: "/thumbnail/front-template.png",
    url: "https://front-template-rouge.vercel.app/",
    tags: ["Next.js", "SCSS", "Learning"],
  },
  {
    id: "color-lab",
    name: "Chromix",
    description:
      "色を混ぜると何色になる？その色のカラーパレットは？色の実験と発見を楽しむカラーミキシングツール",
    screenshot: "/thumbnail/chromix.png",
    url: "https://chromix.xyz/",
    tags: ["Next.js", "SCSS", "Color"],
  },
  {
    id: "typerim",
    name: "Typerim",
    description:
      "ビジュアルキーボードとサウンドフィードバックを備えたインタラクティブなタイピング練習アプリ",
    screenshot: "/thumbnail/typerim.png",
    url: "https://typerim.vercel.app/",
    tags: ["Next.js", "Tailwind", "use-sound"],
  },
];

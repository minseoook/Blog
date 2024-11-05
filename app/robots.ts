import { baseUrl } from "app/sitemap";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
//모든 검색 엔진 봇(*)이 사이트를 크롤링할 수 있도록 허용합니다

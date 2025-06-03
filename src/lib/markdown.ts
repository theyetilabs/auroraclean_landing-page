import { remark } from "remark";
import html from "remark-html";
import remarkToc from "remark-toc";

export async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(html, { sanitize: false })
    .use(remarkToc, {
      heading: "Table of Contents",
      tight: true,
    })
    .process(markdown);
  return result.toString();
}

export function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

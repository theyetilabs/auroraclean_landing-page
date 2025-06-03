// @ts-nocheck
import { getPagesUnderRoute } from "nextra/context";
import { Bleed } from "nextra-theme-docs";
import { BlogCardList } from "./blog-card-old";
import { getArticles, getTags } from "../../lib/get-post-from-files";
import { TagList } from "./tag-list-old";

export function TagPage({ tag, title }) {
  const filteredBlogs = getPagesUnderRoute("/blog")?.filter(
    (item) => item.name !== "index" && item.name !== "tag"
  );

  const blogs = [...filteredBlogs?.map((item) => item.children).flat()];

  return (
    <Bleed>
      <TagList tags={getTags(blogs)} withCount asLink className="mb-20 mt-10" />
      <BlogCardList articles={getArticles(blogs, tag)} />
    </Bleed>
  );
}

import { getBlogById, getBlogPosts } from "@/services/blogs.service";
import { markdownToHtml, calculateReadingTime } from "@/lib/markdown";
import { BlogPost } from "@/services/blogs.service";
import { BlogHero } from "./components/BlogHero";
import { BlogSEO } from "./components/BlogSEO";
import { TableOfContents } from "./components/TableOfContents";
import { BlogCardList } from "@/components/blog/blog-card";
import clsx from "clsx";
import { notFound } from "next/navigation";

interface BlogDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { id } = await params;

  try {
    const blogPost = await getBlogById(id);

    if (!blogPost) {
      notFound();
    }

    const htmlContent = await markdownToHtml(blogPost.content);

    // Fetch related posts based on the first category
    let relatedPosts: BlogPost[] = [];
    if (blogPost.categories.length > 0) {
      const response = await getBlogPosts({
        categoryId: blogPost.categories[0].id,
        limit: 3,
      });
      // Filter out the current post from related posts
      relatedPosts = response.items.filter((item) => item.id !== blogPost.id);
    }

    return (
      <>
        <BlogSEO post={blogPost} blogId={id} />

        <div className="max-w-7xl mx-auto px-4 py-8 flex gap-8 mt-30">
          <article className="max-w-4xl">
            <BlogHero
              title={blogPost.title}
              createdAt={blogPost.createdAt}
              readingTime={calculateReadingTime(blogPost.content)}
              categories={blogPost.categories}
              thumbnail={blogPost.thumbnail}
            />

            {blogPost.description && (
              <div className="mb-8">
                <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                  {blogPost.description}
                </p>
              </div>
            )}

            <div
              className={clsx(
                "prose prose-lg max-w-none",
                "prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white",
                "prose-p:text-gray-700 dark:prose-p:text-gray-300",
                "prose-a:text-blue-600 dark:prose-a:text-blue-400",
                "prose-strong:text-gray-900 dark:prose-strong:text-white",
                "prose-code:text-gray-900 dark:prose-code:text-white",
                "prose-pre:bg-gray-800 dark:prose-pre:bg-gray-900",
                "prose-img:rounded-xl"
              )}
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />
          </article>

          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-8">
              <h2 className="text-xl font-semibold mb-4">On This Page</h2>
              <TableOfContents content={htmlContent} />
            </div>
          </aside>
        </div>

        {/* Related Posts Section */}
        {relatedPosts.length > 0 && (
          <section className="max-w-7xl mx-auto px-4 py-12 border-t border-gray-200 dark:border-gray-800">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
              Related Posts
            </h2>
            <BlogCardList
              articles={relatedPosts}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            />
          </section>
        )}
      </>
    );
  } catch (error) {
    console.error("Error loading blog:", error);
    notFound();
  }
}

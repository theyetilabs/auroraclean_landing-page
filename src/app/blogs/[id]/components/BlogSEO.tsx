import Head from "next/head";
import { BlogPost } from "@/services/blogs.service";

interface BlogSEOProps {
  post: BlogPost;
  blogId: string;
}

export function BlogSEO({ post, blogId }: BlogSEOProps) {
  const metaDescription =
    post.description || post.content.slice(0, 155) + "...";

  return (
    <Head>
      <title>{`${post.title} | theyetilabs`}</title>
      <meta name="description" content={metaDescription} />
      <meta name="author" content={"theyetilabs"} />
      <meta
        name="keywords"
        content={post.categories.map((cat) => cat.name).join(", ")}
      />

      <meta property="og:title" content={post.title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="article" />
      <meta
        property="og:image"
        content={post.thumbnail || "/default-og-image.jpg"}
      />
      <meta property="article:published_time" content={post.createdAt} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={post.title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta
        name="twitter:image"
        content={post.thumbnail || "/default-og-image.jpg"}
      />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: metaDescription,
          image: post.thumbnail,
          datePublished: post.createdAt,
          dateModified: post.updatedAt || post.createdAt,
          author: {
            "@type": "Person",
            name: "theyetilabs",
          },
          publisher: {
            "@type": "Organization",
            name: "theyetilabs",
            logo: {
              "@type": "ImageObject",
              url: "https://theyetilabs.com/logo.png",
            },
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://theyetilabs.com/blogs/${blogId}`,
          },
        })}
      </script>
    </Head>
  );
}

import { MetadataRoute } from "next";
import { services } from "@/lib/constants";
import staticBlogs from "@/lib/staticBlogs";

// Helper function to fetch all blog posts from API
async function getAllBlogPosts() {
    // Skip API fetch if URL is not configured
    if (!process.env.NEXT_PUBLIC_BLOG_API_URL) {
        console.log("Blog API URL not configured, skipping dynamic blog fetch for sitemap");
        return [];
    }

    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_BLOG_API_URL}/blogs?limit=100`,
            {
                headers: {
                    "x-api-key": process.env.NEXT_PUBLIC_BLOG_API_KEY || "",
                },
                next: { revalidate: 3600 }, // Revalidate every hour
            }
        );

        if (!response.ok) {
            console.error("Failed to fetch blog posts for sitemap");
            return [];
        }

        const data = await response.json();
        return data.items || [];
    } catch (error) {
        console.error("Error fetching blog posts for sitemap:", error);
        return [];
    }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = "https://auroraclean.com.au";

    // Main static pages
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1.0,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/services`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/blogs`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/faq`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: `${baseUrl}/why-choose-us`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/products`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: `${baseUrl}/course`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.6,
        },
        {
            url: `${baseUrl}/privacy-policy`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.3,
        },
        {
            url: `${baseUrl}/terms-and-conditions`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.3,
        },
    ];

    // Generate service pages dynamically from constants
    const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
        url: `${baseUrl}/service/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.8,
    }));

    // Static blog posts
    const staticBlogPages: MetadataRoute.Sitemap = staticBlogs.map((blog) => ({
        url: `${baseUrl}/blogs/${blog.id}`,
        lastModified: new Date(blog.updatedAt),
        changeFrequency: "monthly" as const,
        priority: 0.7,
    }));

    // Fetch dynamic blog posts from API
    const apiBlogPosts = await getAllBlogPosts();
    const apiBlogPages: MetadataRoute.Sitemap = apiBlogPosts
        .filter(
            (blog: { id: string }) =>
                !staticBlogs.some((staticBlog) => staticBlog.id === blog.id)
        )
        .map((blog: { id: string; updatedAt: string }) => ({
            url: `${baseUrl}/blogs/${blog.id}`,
            lastModified: new Date(blog.updatedAt),
            changeFrequency: "monthly" as const,
            priority: 0.7,
        }));

    return [...staticPages, ...servicePages, ...staticBlogPages, ...apiBlogPages];
}

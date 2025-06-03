import staticBlogs from "@/lib/staticBlogs";
import axios from "axios";

interface Category {
  id: string;
  name: string;
}

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  categories: Category[];
  description?: string;
  thumbnail?: string;
  readingTime?: string;
  imageUrls: string[];
}

interface BlogResponse {
  items: BlogPost[];
  total: number;
  page: number;
  totalPages: number;
  hasMore: boolean;
}

interface BlogQueryParams {
  page?: number;
  limit?: number;
  search?: string;
  categoryId?: string;
}

export async function getBlogPosts(
  params?: BlogQueryParams
): Promise<BlogResponse> {
  try {
    const queryParams = new URLSearchParams({
      page: (params?.page || 1).toString(),
      limit: (params?.limit || 10).toString(),
      ...(params?.search && { search: params.search }),
      ...(params?.categoryId && { categoryId: params.categoryId }),
    });

    const res = await axios.get<BlogResponse>(
      `${process.env.NEXT_PUBLIC_BLOG_API_URL}/blogs?${queryParams.toString()}`,
      {
        headers: {
          "x-api-key": process.env.NEXT_PUBLIC_BLOG_API_KEY,
        },
      }
    );
    if (res.status !== 200) {
      throw new Error("Failed to fetch blog posts");
    }
    const blogs = [
      ...res.data.items,
      ...staticBlogs.map((blog) => ({
        ...blog,
        content: blog.content.toString(),
      })),
    ];
    return {
      ...res.data,
      items: blogs,
    };
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return {
      items: [],
      total: 0,
      page: 0,
      totalPages: 0,
      hasMore: false,
    };
  }
}

export async function getBlogById(id: string): Promise<BlogPost | null> {
  try {
    if (staticBlogs.some((blog) => blog.id === id)) {
      const blog = {
        ...staticBlogs.find((blog) => blog.id === id),
        content: staticBlogs.find((blog) => blog.id === id)?.content.toString(),
      } as BlogPost;
      return blog;
    }
    const res = await axios.get<BlogPost>(
      `${process.env.NEXT_PUBLIC_BLOG_API_URL}/blogs/${id}`,
      {
        headers: {
          "x-api-key": process.env.NEXT_PUBLIC_BLOG_API_KEY,
        },
      }
    );
    if (res.status !== 200) {
      throw new Error("Failed to fetch blog post");
    }

    return res.data;
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return null;
  }
}

export async function getCategories(): Promise<Category[]> {
  try {
    const res = await axios.get<{ items: Category[] }>(
      `${process.env.NEXT_PUBLIC_BLOG_API_URL}/blogs/categories`,
      {
        headers: {
          "x-api-key": process.env.NEXT_PUBLIC_BLOG_API_KEY,
        },
      }
    );
    if (res.status !== 200) {
      throw new Error("Failed to fetch categories");
    }

    return res.data?.items || [];
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}

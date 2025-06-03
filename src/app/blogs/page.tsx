"use client";
import { BlogCardList } from "@/components/blog/blog-card";
import { TagPage } from "@/components/blog/tag-page";
import { getBlogPosts } from "@/services/blogs.service";
import { Suspense, useEffect, useState } from "react";
export interface BlogPost {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  imageUrls: string[] | undefined;
  categories: {
    id: string;
    name: string;
  }[];
}

export default function BlogsPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Debounce search query
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Updated fetch posts effect
  useEffect(() => {
    setIsLoading(true);
    getBlogPosts({
      page: currentPage,
      limit: 9,
      search: debouncedQuery,
      categoryId: selectedCategory || undefined,
    })
      .then((response) => {
        setPosts(response.items);
        setTotalPages(response.totalPages);
        setCurrentPage(response.page);
        setHasMore(response.hasMore);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [currentPage, debouncedQuery, selectedCategory]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCategorySelect = (category: string | null) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <div className="w-full mx-auto pb-8 ">
      <div className="relative flex flex-col justify-center items-center w-full bg-gradient-to-b from-[#00378b]/40 to-transparent">
        {" "}
        {/* Hero Section */}
        <section className="relative pt-30 pb-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto  ">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-[#00378b] to-red-500 text-transparent bg-clip-text">
              Blogs
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Read our latest blogs and stay updated with the latest news and
              tips.
            </p>
          </div>
        </section>
      </div>
      {/* Search Input */}
      <div className="mb-6 flex justify-end max-w-7xl mx-auto">
        <input
          type="text"
          placeholder="Search posts..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <TagPage
        posts={posts}
        onTagSelect={handleCategorySelect}
        selectedTag={selectedCategory}
      />

      {isLoading ? (
        <div className="flex justify-center items-center min-h-[200px]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      ) : posts.length === 0 ? (
        <div className="text-center py-12 text-gray-600">
          <p className="text-lg">No posts found</p>
          <p className="text-sm mt-2">Try adjusting your search or filters</p>
        </div>
      ) : (
        <Suspense fallback={<div>Loading...</div>}>
          <div className="w-full max-w-7xl mx-auto">
            <BlogCardList
              articles={posts}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            />
          </div>
          {/* Pagination */}
          <div className="mt-8 flex justify-center gap-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 border rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
            >
              Previous
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-4 py-2 border rounded-lg ${
                  currentPage === page
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={!hasMore}
              className="px-4 py-2 border rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
            >
              Next
            </button>
          </div>
        </Suspense>
      )}
    </div>
  );
}

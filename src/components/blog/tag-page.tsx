import { BlogPost } from "@/app/blogs/page";
import { TagList } from "./tag-list";
import { useState, useEffect } from "react";
import { getCategories } from "@/services/blogs.service";

interface TagPageProps {
  posts: BlogPost[];
  selectedTag: string | null;
  onTagSelect: (tag: string | null) => void;
}

export function TagPage({ selectedTag, onTagSelect }: TagPageProps) {
  const [tags, setTags] = useState<[string, string][]>([]);

  useEffect(() => {
    const fetchTags = async () => {
      const categories = await getCategories();
      // Convert categories to [name, count] format
      const tagCounts = categories?.reduce<Record<string, string>>(
        (acc, category) => {
          acc[category.name] = category.id; // Initialize with 0, counts will come from API if needed
          return acc;
        },
        {}
      );
      setTags(Object.entries(tagCounts));
    };

    fetchTags();
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto">
      <TagList
        tags={tags}
        withCount
        asLink
        className="mb-10 mt-10"
        onTagSelect={onTagSelect}
        selectedTag={selectedTag}
      />
    </div>
  );
}

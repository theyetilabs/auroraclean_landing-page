import Image from "next/image";
import { BlogMeta } from "./BlogMeta";

interface BlogHeroProps {
  title: string;
  createdAt: string;
  readingTime: string;
  categories: Array<{ id: string; name: string }>;
  thumbnail?: string;
}

export function BlogHero({
  title,
  createdAt,
  readingTime,
  categories,
  thumbnail,
}: BlogHeroProps) {
  return (
    <div className="mb-8">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
        {title}
      </h1>

      <BlogMeta
        createdAt={createdAt}
        readingTime={readingTime}
        categories={categories}
      />

      {thumbnail && (
        <div className="relative aspect-video w-full overflow-hidden rounded-xl mb-8">
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}
    </div>
  );
}

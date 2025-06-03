interface BlogMetaProps {
  createdAt: string;
  readingTime: string;
  categories: Array<{ id: string; name: string }>;
}

export function BlogMeta({
  createdAt,
  readingTime,
  categories,
}: BlogMetaProps) {
  return (
    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-6">
      <time dateTime={createdAt}>
        {new Date(createdAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </time>
      <span>•</span>
      <span>{readingTime}</span>
      <span>•</span>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <span
            key={category.id}
            className="inline-flex items-center rounded-full bg-blue-100 px-3 py-0.5 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200"
          >
            {category.name}
          </span>
        ))}
      </div>
    </div>
  );
}

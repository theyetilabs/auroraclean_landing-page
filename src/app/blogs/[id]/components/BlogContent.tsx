import clsx from "clsx";

interface BlogContentProps {
  content: string;
}

export function BlogContent({ content }: BlogContentProps) {
  return (
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
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}

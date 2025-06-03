import Link from "next/link";
import { BlogPost } from "@/app/blogs/page";
import clsx from "clsx";
import { calculateReadingTime } from "@/lib/markdown";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { marked } from "marked";
interface BlogCardListProps {
  articles: BlogPost[];
  className?: string;
}

const extractFirstImageUrl = (content: string) => {
  const match = content.match(/!\[.*?\]\((.*?)\)/);
  return match ? match[1] : null;
};

const parseMarkdown = (markdown: string): string => {
  const parsed = marked.parse(markdown, { async: false }) as string;
  return parsed
    .replace(/<[^>]*>/g, "")
    .replace(/\n/g, " ")
    .trim();
};

export const BlogCardList = ({ articles, className }: BlogCardListProps) => {
  return (
    <div
      className={clsx(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
        className
      )}
    >
      {articles.map((article) => (
        <Card
          key={article.id}
          className="group relative overflow-hidden border-none bg-background/50 backdrop-blur supports-[backdrop-filter]:bg-background/50"
        >
          <Link
            href={`/blogs/${article.id}`}
            className="absolute inset-0 z-10"
            prefetch
          >
            <span className="sr-only">View article: {article.title}</span>
          </Link>

          <div className="relative h-48 w-full overflow-hidden rounded-t-xl">
            <Image
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              src={
                extractFirstImageUrl(article.content) ||
                article.imageUrls?.[0] ||
                ""
              }
              alt={article.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          <CardHeader className="space-y-2 p-4">
            <h2 className="line-clamp-2 text-xl font-semibold tracking-tight">
              {article.title}
            </h2>
            <p className="line-clamp-2 text-sm text-muted-foreground">
              {parseMarkdown(article.content)}
            </p>
          </CardHeader>

          <CardContent className="p-4 pt-0">
            <div className="flex justify-between text-sm text-muted-foreground">
              <div className="flex items-center">
                <svg
                  className="mr-1 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                {calculateReadingTime(article.content)}
              </div>
              <time className="text-sm text-muted-foreground">
                {new Date(article.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
          </CardContent>

          <CardFooter className="flex items-center justify-between p-4 pt-0">
            <div className="flex flex-wrap gap-2">
              {article.categories.map((category) => (
                <Badge
                  key={category.id}
                  variant="secondary"
                  className="transition-colors hover:bg-secondary/80"
                >
                  {category.name}
                </Badge>
              ))}
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

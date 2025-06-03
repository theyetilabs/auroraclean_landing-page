"use client";
import { useEffect, useState } from "react";

interface TableOfContentsProps {
  content: string;
}

interface HeadingItem {
  id: string;
  text: string;
  level: number;
  index: number;
}

export function TableOfContents({ content }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<HeadingItem[]>([]);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    // Parse headings from content
    const doc = new DOMParser().parseFromString(content, "text/html");
    const headingElements = doc.querySelectorAll("h1, h2, h3, h4, h5, h6");

    const items: HeadingItem[] = Array.from(headingElements).map(
      (heading, index) => ({
        id:
          heading.id ||
          heading.textContent?.toLowerCase().replace(/[^a-z0-9]+/g, "-") ||
          "",
        text: heading.textContent || "",
        level: parseInt(heading.tagName[1]),
        index: index,
      })
    );

    setHeadings(items);
  }, [content]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = headings.findIndex(
              (h) => h.text === entry.target.textContent
            );
            if (index !== -1) {
              setActiveIndex(index);
            }
          }
        });
      },
      { rootMargin: "-20% 0px -80% 0px" }
    );

    document.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach((heading) => {
      observer.observe(heading);
    });

    return () => observer.disconnect();
  }, [headings]);

  return (
    <nav className="text-sm">
      {headings.map((heading) => (
        <a
          key={heading.index}
          href={`#${heading.id}`}
          className={`
            block py-1 pl-${(heading.level - 1) * 4}
            hover:text-primary-main transition-colors
            ${
              activeIndex === heading.index
                ? "text-primary-main font-medium"
                : "text-gray-600 dark:text-gray-400"
            }
          `}
          onClick={(e) => {
            e.preventDefault();
            const headingElements = document.querySelectorAll(
              "h1, h2, h3, h4, h5, h6"
            );
            const targetElement = headingElements[heading.index];
            if (targetElement) {
              targetElement.scrollIntoView({
                behavior: "smooth",
              });
              setActiveIndex(heading.index);
            }
          }}
        >
          {heading.text}
        </a>
      ))}
    </nav>
  );
}

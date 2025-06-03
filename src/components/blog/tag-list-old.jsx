import { useRouter } from "next/router";
import clsx from "clsx";
import { Anchor } from "@theguild/components";

const Tag = ({ children, isActive = false, href = "", ...props }) => {
  return (
    <Anchor
      href={href}
      style={{
        textTransform:
          children.split(" ")[0] === "seo" ? "uppercase" : "capitalize",
      }}
      className={clsx(
        "rounded-md bg-gray-200 hover:!no-underline dark:bg-[#24272E]",
        "flex px-2.5 py-1.5 text-sm font-medium transition-colors",
        href
          ? "hover:text-black hover:dark:bg-[#15AFD04C] hover:dark:text-[#82E9FF]"
          : "cursor-default",
        isActive
          ? "dark:bg-[#15AFD04C] dark:text-[#82E9FF]"
          : "text-gray-500 dark:text-[#7F818C]"
      )}
      {...props}
    >
      {children}
    </Anchor>
  );
};

export const TagList = ({
  tags,
  asLink = false,
  withCount = false,
  className,
  ...props
}) => {
  const router = useRouter();
  return (
    <div
      style={{ display: "flex", gap: "12px" }}
      className={clsx("flex flex-wrap justify-center gap-2.5", className)}
      {...props}
    >
      {tags.map((tagOrTagCount) => {
        const [tag, count] = Array.isArray(tagOrTagCount)
          ? tagOrTagCount
          : [tagOrTagCount, 0];
        return (
          <Tag
            key={tag}
            href={asLink ? `/blogs/tag/${tag}` : ""}
            isActive={tag === router.query.tag}
          >
            {withCount && count > 0 ? `${tag} (${count})` : tag}
          </Tag>
        );
      })}
    </div>
  );
};

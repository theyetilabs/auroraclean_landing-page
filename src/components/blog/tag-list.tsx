import clsx from "clsx";

interface TagProps {
  children: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
}

const Tag = ({ children, isActive = false, onClick, className }: TagProps) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "rounded-full px-6 py-2 text-sm font-medium transition-colors",
        "bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700",
        isActive && [
          "!bg-[#00378b] text-white  dark:text-white",
          "hover:bg-primary-dark dark:hover:bg-blue-700",
          "ring-2 ring-blue-300 dark:ring-blue-500",
        ],
        !onClick && "cursor-default",
        className
      )}
    >
      {children}
    </button>
  );
};

interface TagListProps {
  tags: [string, string][];
  withCount?: boolean;
  asLink?: boolean;
  className?: string;
  onTagSelect?: (tag: string | null) => void;
  selectedTag?: string | null;
}

export const TagList = ({
  tags,
  withCount = false,
  asLink = false,
  className,
  onTagSelect,
  selectedTag,
}: TagListProps) => {
  return (
    <div className={clsx("flex flex-wrap gap-2", className)}>
      {asLink && (
        <Tag
          isActive={selectedTag === null}
          onClick={() => onTagSelect?.(null)}
        >
          All
        </Tag>
      )}
      {tags.map(([tag, id]) => (
        <Tag
          key={tag}
          isActive={id === selectedTag}
          onClick={asLink ? () => onTagSelect?.(id) : undefined}
        >
          {withCount ? `${tag}` : tag}
        </Tag>
      ))}
    </div>
  );
};

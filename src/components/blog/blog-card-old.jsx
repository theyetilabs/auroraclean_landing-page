import NextLink from "next/link";
import clsx from "clsx";
import Image from "next/image";

export const BlogCardList = ({ articles, className }) => {
  return (
    <div
      className={clsx(
        "my-12 flex flex-wrap justify-center gap-x-5 text-neut gap-y-10 w-full",
        className
      )}
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "16px",
      }}
    >
      {articles.map((article) => (
        <NextLink
          style={{ marginTop: "16px" }}
          key={article.link}
          href={article.link ?? "/404"}
          className="
          flex
          w-[278px]
          cursor-pointer
          flex-col
          overflow-hidden
          rounded-[20px]
          border
          border-solid
          bg-white
          transition-colors
          hover:border-[#7F818C]
          hover:!no-underline
          dark:border-transparent
          dark:bg-[#101218]
          hover:dark:border-[#7F818C] bg-red-500"
        >
          <Image
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "100%",
              aspectRatio: "16/9",
              objectFit: "cover",
              borderRadius: "12px",
            }}
            src={article.thumbnail ?? article.image}
            alt="Article logo"
            className="drag-none h-[164px] w-full object-cover"
          />
          <div className="flex grow flex-col p-5">
            <p
              style={{ marginTop: "4px", fontWeight: "600", fontSize: "18px" }}
            >
              {article.title}
            </p>
            <p>{article.description}</p>
            <div className="mt-auto text-xs">
              <span className="dark:text-gray-500">
                {new Date(article.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
          </div>
        </NextLink>
      ))}
    </div>
  );
};

import { format } from "date-fns";

import Back from "components/Back";

type Props = {
  article: Article;
};

const ArticleHeader = (props: Props) => {
  const { title, author, createdAt, updatedAt } = props.article;

  const isUpdated = createdAt !== updatedAt;

  return (
    <header className="flex flex-col gap-4">
      <Back />
      <h1 className="text-3xl">{title}</h1>
      <div className="flex items-center flex-nowrap gap-4">
        <span>Ecris par {author.fullName}</span>
        <div className="ml-auto flex gap-1">
          <span className="whitespace-nowrap">
            {format(new Date(createdAt), "PPP à p")}
          </span>
          {isUpdated && (
            <span className="italic whitespace-nowrap">
              (modifié le {format(new Date(updatedAt), "PPP à p")})
            </span>
          )}
        </div>
      </div>
    </header>
  );
};

export default ArticleHeader;

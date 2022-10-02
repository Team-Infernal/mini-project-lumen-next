import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { format } from "date-fns";
import Link from "next/link";

type Props = {
  title: string;
  author: string;
  createdAt: string;
  updatedAt: string;
};

const ArticleHeader = (props: Props) => {
  const { title, author, createdAt, updatedAt } = props;

  const isUpdated = createdAt !== updatedAt;

  return (
    <header className="flex flex-col gap-4">
      <Link href="/">
        <a className="link link-hover text-sm w-fit mb-2 inline-flex gap-2 items-center">
          <FontAwesomeIcon icon={faAngleLeft} className="text-primary" />
          Retour à la liste d'articles
        </a>
      </Link>
      <h1 className="text-3xl">{title}</h1>
      <div className="flex items-center flex-nowrap gap-4">
        <span>Ecris par {author}</span>
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

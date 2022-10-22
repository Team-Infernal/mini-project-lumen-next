import Link from "next/link";

type Props = {
  article: Article;
};

const ArticlePreview = (props: Props) => {
  const { article } = props;

  return (
    <Link href={article.id}>
      <a>
        <div className="card bg-base-300 w-[36rem] text-base-content">
          <div className="card-body">
            <h2 className="card-title">{article.title}</h2>
            <p>{article.content}</p>
            <p className="ml-auto">{article.author.fullName}</p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default ArticlePreview;

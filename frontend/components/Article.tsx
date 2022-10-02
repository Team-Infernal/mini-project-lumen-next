import ArticleHeader from "components/ArticleHeader";
import ArticleContent from "components/ArticleContent";
import ArticleActions from "components/ArticleActions";

type Props = {
  article: Article;
};

const Article = (props: Props) => {
  const { article } = props;

  return (
    <div className="flex-grow py-24 flex flex-col gap-24 justify-between items-center">
      <div className="px-24 flex flex-col gap-24 w-[54rem]">
        <ArticleHeader
          title={article.title}
          author={article.author}
          createdAt={article.created_at}
          updatedAt={article.updated_at}
        />
        <ArticleContent content={article.content} />
      </div>
      <ArticleActions id={article.id} />
    </div>
  );
};

export default Article;

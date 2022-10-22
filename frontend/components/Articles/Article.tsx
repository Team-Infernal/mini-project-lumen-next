import ArticleHeader from "components/Articles/ArticleHeader";
import ArticleContent from "components/Articles/ArticleContent";
import ArticleActions from "components/Articles/ArticleActions";

type Props = {
  article: Article;
  user: User | undefined;
};

const Article = (props: Props) => {
  const { article, user } = props;
  const userIsOwner = !!user && user.id === article.author.id;
  const userIsAdmin = !!user && user.role === "admin";

  return (
    <div className="flex-grow py-24 flex flex-col gap-24 justify-between items-center">
      <div className="px-24 flex flex-col gap-24 w-[54rem]">
        <ArticleHeader article={article} />
        <ArticleContent content={article.content} />
      </div>
      {(userIsOwner || userIsAdmin) && <ArticleActions id={article.id} />}
    </div>
  );
};

export default Article;

import { faPlus } from "@fortawesome/free-solid-svg-icons";
import useSWR from "swr";

import ArticlePreview from "components/Articles/ArticlePreview";
import Button from "components/Elements/Button";
import LogoutButton from "components/Elements/LogoutButton";
import Anchor from "components/Elements/Anchor";
import Loader from "components/Loader";

import useAuth from "hooks/useAuth";

import fetcher from "utils/fetcher";

const ArticleList = () => {
  const { user } = useAuth({ middleware: ["guest"] });
  const canCreateArticle =
    !!user && (user.role === "author" || user.role === "admin");
  const { data: articles, error } = useSWR<Array<Article>>(
    "/api/articles",
    fetcher
  );

  if (error) {
    return <div>Erreur</div>;
  }

  if (!articles) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen p-24 flex flex-col gap-8 animate-fade-in-up items-center">
      <div className="flex gap-4">
        {user ? (
          <>
            {canCreateArticle && (
              <Button href="/create" icon={faPlus} iconClassName="text-primary">
                Créer un article
              </Button>
            )}
            <LogoutButton />
          </>
        ) : (
          <>
            <Anchor href="/register" className="btn btn-primary">
              S&apos;inscrire
            </Anchor>
            <Anchor href="/login" className="btn btn-secondary">
              Se connecter
            </Anchor>
          </>
        )}
      </div>
      {articles.map((article) => (
        <ArticlePreview key={article.id} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;

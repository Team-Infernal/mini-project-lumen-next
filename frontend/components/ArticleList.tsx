import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useEffect, useState } from "react";

import ArticlePreview from "components/ArticlePreview";
import Loader from "components/Loader";

import sleep from "utils/sleep";

const ArticleList = () => {
  const [articles, setArticles] = useState<Array<Article>>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetch("/api/articles", {
        method: "GET",
      });

      await sleep(250);

      if (response.ok) {
        const data: Array<Article> = await response.json();
        setArticles(data);
      }
    };

    fetchArticles();
  }, []);

  if (articles.length === 0) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen p-24 flex flex-col gap-8 animate-fade-in-up items-center">
      <Link href="/create">
        <a className="w-fit">
          <button className="btn gap-2">
            <FontAwesomeIcon icon={faPlus} className="text-primary" />
            Créer un article
          </button>
        </a>
      </Link>
      {articles.map((article) => (
        <ArticlePreview key={article.id} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;

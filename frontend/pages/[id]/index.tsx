import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Article from "components/Article";
import Loader from "components/Loader";

import sleep from "utils/sleep";

const ArticlePage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      const response = await fetch(`/api/articles/${id}`, {
        method: "GET",
      });

      await sleep(250);

      if (response.ok) {
        const data: Article = await response.json();
        setArticle(data);
      }
    };

    fetchArticle();
  }, []);

  if (!article) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen flex flex-col justify-between animate-fade-in-up">
      <Article article={article} />
    </div>
  );
};

const getServerSideProps = async () => {
  return {
    props: {},
  };
};

export default ArticlePage;
export { getServerSideProps };

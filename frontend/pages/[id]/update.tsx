import { NextPage } from "next";
import { useRouter } from "next/router";
import useSWR from "swr";

import AuthorLayout from "components/Layouts/AuthorLayout";
import UpdateArticle from "components/Articles/UpdateArticle";
import Loader from "components/Loader";

import fetcher from "utils/fetcher";

const UpdateArticlePage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: article, error } = useSWR<Article>(
    `/api/articles/${id}`,
    fetcher
  );

  if (error) {
    return <div>Erreur</div>;
  }

  if (!article) {
    return <Loader />;
  }

  return (
    <AuthorLayout>
      <UpdateArticle article={article} />
    </AuthorLayout>
  );
};

export default UpdateArticlePage;

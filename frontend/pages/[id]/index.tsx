import { NextPage } from "next";
import { useRouter } from "next/router";
import useSWR from "swr";

import GuestLayout from "components/Layouts/GuestLayout";
import Article from "components/Articles/Article";
import Loader from "components/Loader";

import fetcher from "utils/fetcher";
import useAuth from "hooks/useAuth";

const ArticlePage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { user } = useAuth({ middleware: ["guest"] });
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
    <GuestLayout>
      <Article article={article} user={user} />
    </GuestLayout>
  );
};

export default ArticlePage;

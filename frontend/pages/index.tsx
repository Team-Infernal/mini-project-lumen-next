import type { NextPage } from "next";

import ArticleList from "components/Articles/ArticleList";
import GuestLayout from "components/Layouts/GuestLayout";

const ArticlesPage: NextPage = () => {
  return (
    <GuestLayout>
      <ArticleList />
    </GuestLayout>
  );
};

export default ArticlesPage;

import { NextPage } from "next";

import AuthorLayout from "components/Layouts/AuthorLayout";
import CreateArticle from "components/Articles/CreateArticle";

const CreatePage: NextPage = () => {
  return (
    <AuthorLayout>
      <CreateArticle />
    </AuthorLayout>
  );
};

export default CreatePage;

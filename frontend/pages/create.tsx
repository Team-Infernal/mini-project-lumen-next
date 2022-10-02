import { NextPage } from "next";

import CreateArticle from "components/CreateArticle";

const CreatePage: NextPage = () => {
  return (
    <div className="min-h-screen p-24 flex flex-col justify-between animate-fade-in-up">
      <CreateArticle />
    </div>
  );
};

export default CreatePage;

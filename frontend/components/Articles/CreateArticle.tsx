import CreateArticleForm from "components/Articles/CreateArticleForm";
import CreateArticleActions from "components/Articles/CreateArticleActions";
import { useRouter } from "next/router";
import { useState } from "react";

import Error from "components/Error";

import axios from "lib/axios";

const CreateArticle = () => {
  const router = useRouter();

  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<Array<string>>([]);
  const [done, setDone] = useState<boolean>(false);

  const handleCreateClick = async () => {
    setLoading(true);
    setErrors([]);

    const { data } = await axios.post<Article>("/api/articles", {
      title,
      content,
    });

    setDone(true);
    router.push(`/${data.id}`);
    setLoading(false);
  };

  return (
    <div className="flex-grow flex flex-col items-center">
      <CreateArticleForm setTitle={setTitle} setContent={setContent} />
      {errors.length > 0 && <Error errors={errors} />}
      <CreateArticleActions
        handleCreateClick={handleCreateClick}
        loading={loading}
        done={done}
      />
    </div>
  );
};

export default CreateArticle;

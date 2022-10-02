import CreateArticleForm from "components/CreateArticleForm";
import CreateArticleActions from "components/CreateArticleActions";
import { useRouter } from "next/router";
import { useState } from "react";

import Error from "components/Error";
import sleep from "utils/sleep";

const CreateArticle = () => {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Array<string>>([]);

  const handleCreateClick = async () => {
    setLoading(true);
    setErrors([]);

    const response = await fetch(`/api/articles`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        title,
        author,
        content,
      }),
    });

    await sleep(250);

    if (response.ok) {
      const data: Article = await response.json();
      router.push(`/${data.id}`);
    } else if (response.status === 422) {
      const errorsObj = await response.json();
      setErrors(Object.values(errorsObj));
    }

    setLoading(false);
  };

  return (
    <div className="flex-grow flex flex-col items-center">
      <CreateArticleForm
        setTitle={setTitle}
        setAuthor={setAuthor}
        setContent={setContent}
      />
      {errors.length > 0 && <Error errors={errors} />}
      <CreateArticleActions
        handleCreateClick={handleCreateClick}
        loading={loading}
      />
    </div>
  );
};

export default CreateArticle;

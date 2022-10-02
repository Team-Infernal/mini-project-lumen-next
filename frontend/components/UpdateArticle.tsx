import UpdateArticleForm from "components/UpdateArticleForm";
import UpdateArticleActions from "components/UpdateArticleActions";
import { useRouter } from "next/router";
import { useState } from "react";

import Error from "components/Error";

import sleep from "utils/sleep";

type Props = {
  article: Article;
};

const UpdateArticle = (props: Props) => {
  const { article } = props;
  const router = useRouter();

  const [newTitle, setNewTitle] = useState(article.title);
  const [newAuthor, setNewAuthor] = useState(article.author);
  const [newContent, setNewContent] = useState(article.content);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Array<string>>([]);

  const handleModifyClick = async () => {
    setLoading(true);
    setErrors([]);

    const response = await fetch(`/api/articles/${article.id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        title: newTitle,
        author: newAuthor,
        content: newContent,
      }),
    });

    await sleep(250);

    if (response.ok) {
      router.push(`/${article.id}`);
    } else if (response.status === 422) {
      const errorsObj = await response.json();
      setErrors(Object.values(errorsObj));
    }

    setLoading(false);
  };

  return (
    <div className="flex-grow flex flex-col items-center">
      <UpdateArticleForm
        id={article.id}
        title={article.title}
        author={article.author}
        content={article.content}
        setNewTitle={setNewTitle}
        setNewAuthor={setNewAuthor}
        setNewContent={setNewContent}
      />
      {errors.length > 0 && <Error errors={errors} />}
      <UpdateArticleActions
        id={article.id}
        handleModifyClick={handleModifyClick}
        loading={loading}
      />
    </div>
  );
};

export default UpdateArticle;

import UpdateArticleForm from "components/Articles/UpdateArticleForm";
import UpdateArticleActions from "components/Articles/UpdateArticleActions";
import { useRouter } from "next/router";
import { useRef, useState } from "react";

import Error from "components/Error";

import axios from "lib/axios";

type Props = {
  article: Article;
};

const UpdateArticle = (props: Props) => {
  const { article } = props;
  const router = useRouter();

  const titleRef = useRef<HTMLTextAreaElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);

  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<Array<string>>([]);
  const [done, setDone] = useState<boolean>(false);

  const handleModifyClick = async () => {
    setLoading(true);
    setDone(false);
    setErrors([]);

    try {
      await axios.put(`/api/articles/${article.id}`, {
        title: titleRef.current?.value,
        content: contentRef.current?.value,
      });

      setDone(true);
      router.push(`/${article.id}`);
    } catch (error: any) {
      setErrors([error.response.data.message]);
      setLoading(false);
    }
  };

  return (
    <div className="flex-grow flex flex-col items-center">
      <UpdateArticleForm
        article={article}
        titleRef={titleRef}
        contentRef={contentRef}
      />
      {errors.length > 0 && <Error errors={errors} />}
      <UpdateArticleActions
        id={article.id}
        handleModifyClick={handleModifyClick}
        loading={loading}
        done={done}
      />
    </div>
  );
};

export default UpdateArticle;

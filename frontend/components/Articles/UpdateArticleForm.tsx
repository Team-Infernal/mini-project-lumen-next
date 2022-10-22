import Back from "components/Back";
import Textarea from "components/Elements/Textarea";

type Props = {
  article: Article;
  titleRef: React.Ref<HTMLTextAreaElement>;
  contentRef: React.Ref<HTMLTextAreaElement>;
};

const UpdateArticleForm = (props: Props) => {
  const { article, titleRef, contentRef } = props;

  return (
    <div className="px-24 py-4 w-[54rem]">
      <div className="form-control">
        <Back href={`/${article.id}`} text="Retour à l'article" />
        <Textarea
          label="Titre"
          placeholder="Titre de l'article"
          ref={titleRef}
          bordered
          rows={1}
          defaultValue={article.title}
        />
        <Textarea
          label="Contenu"
          placeholder="Contenu de votre article"
          ref={contentRef}
          bordered
          rows={10}
          defaultValue={article.content}
        />
      </div>
    </div>
  );
};

export default UpdateArticleForm;

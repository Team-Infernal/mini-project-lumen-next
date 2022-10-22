import Back from "components/Back";
import Textarea from "components/Elements/Textarea";

type Props = {
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setContent: React.Dispatch<React.SetStateAction<string>>;
};

const CreateArticleForm = (props: Props) => {
  const { setTitle, setContent } = props;

  return (
    <div className="px-24 py-4 w-[54rem]">
      <div className="form-control">
        <Back />
        <Textarea
          label="Titre"
          placeholder="Titre de l'article"
          onChange={(event) => setTitle(event.target.value)}
          bordered
          rows={1}
        />
        <Textarea
          label="Contenu"
          placeholder="Contenu de votre article"
          onChange={(event) => setContent(event.target.value)}
          bordered
          rows={10}
        />
      </div>
    </div>
  );
};

export default CreateArticleForm;

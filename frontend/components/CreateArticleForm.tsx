import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

type Props = {
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setAuthor: React.Dispatch<React.SetStateAction<string>>;
  setContent: React.Dispatch<React.SetStateAction<string>>;
};

const CreateArticleForm = (props: Props) => {
  const { setTitle, setAuthor, setContent } = props;

  return (
    <div className="px-24 py-4 w-[54rem]">
      <div className="form-control">
        <Link href={`/`}>
          <a className="link link-hover text-sm w-fit mb-2 inline-flex gap-2 items-center">
            <FontAwesomeIcon icon={faAngleLeft} className="text-primary" />
            Retour à la liste d'articles
          </a>
        </Link>
        <label className="label">
          <span className="label-text">Titre</span>
        </label>
        <textarea
          className="textarea textarea-bordered bg-base-300 text-neutral-content"
          placeholder="Titre de l'article"
          onChange={(event) => setTitle(event.target.value)}
          rows={1}
        />
        <label className="label">
          <span className="label-text">Nom de l'auteur</span>
        </label>
        <input
          className="input input-bordered bg-base-300 text-neutral-content"
          placeholder="Auteur"
          onChange={(event) => setAuthor(event.target.value)}
        />
        <label className="label">
          <span className="label-text">Contenu</span>
        </label>
        <textarea
          className="textarea textarea-bordered bg-base-300 text-neutral-content"
          placeholder="Contenu de votre article"
          onChange={(event) => setContent(event.target.value)}
          rows={10}
        />
      </div>
    </div>
  );
};

export default CreateArticleForm;

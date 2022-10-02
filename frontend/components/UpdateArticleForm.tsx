import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";

type Props = {
  id: string;
  title: string;
  author: string;
  content: string;
  setNewTitle: React.Dispatch<React.SetStateAction<string>>;
  setNewAuthor: React.Dispatch<React.SetStateAction<string>>;
  setNewContent: React.Dispatch<React.SetStateAction<string>>;
};

const UpdateArticleForm = (props: Props) => {
  const {
    id,
    title,
    author,
    content,
    setNewTitle,
    setNewAuthor,
    setNewContent,
  } = props;

  return (
    <div className="px-24 py-4 w-[54rem]">
      <div className="form-control">
        <Link href={`/${id}`}>
          <a className="link link-hover text-sm w-fit mb-2 inline-flex gap-2 items-center">
            <FontAwesomeIcon icon={faAngleLeft} className="text-primary" />
            Retour à l'article
          </a>
        </Link>
        <label className="label">
          <span className="label-text">Titre</span>
        </label>
        <textarea
          className="textarea textarea-bordered bg-base-300 text-neutral-content"
          placeholder="Titre de l'article"
          defaultValue={title}
          onChange={(event) => setNewTitle(event.target.value)}
          rows={1}
        />
        <label className="label">
          <span className="label-text">Nom de l'auteur</span>
        </label>
        <input
          className="input input-bordered bg-base-300 text-neutral-content"
          placeholder="Auteur"
          defaultValue={author}
          onChange={(event) => setNewAuthor(event.target.value)}
        />
        <label className="label">
          <span className="label-text">Contenu</span>
        </label>
        <textarea
          className="textarea textarea-bordered bg-base-300 text-neutral-content"
          placeholder="Contenu de votre article"
          defaultValue={content}
          onChange={(event) => setNewContent(event.target.value)}
          rows={10}
        />
      </div>
    </div>
  );
};

export default UpdateArticleForm;

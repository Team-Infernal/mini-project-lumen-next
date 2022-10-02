import cn from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faPen,
  faTrash,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

type Props = {
  id: string;
};

const ArticleActions = (props: Props) => {
  const { id } = props;
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const handleDeleteClick = async () => {
    setLoading(true);

    const response = await fetch(`/api/articles/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      router.push("/");
    }

    setLoading(false);
  };

  return (
    <>
      <footer className="px-24 w-[54rem] flex gap-4">
        <label
          htmlFor="confirm-delete"
          className="btn modal-button w-0 flex-grow gap-2"
        >
          <FontAwesomeIcon icon={faTrash} className="text-primary" />
          Supprimer
        </label>
        <Link href={`/${id}/update`}>
          <a className="w-0 flex-grow">
            <button className="w-full btn gap-2">
              <FontAwesomeIcon icon={faPen} className="text-primary" />
              Modifier
            </button>
          </a>
        </Link>
      </footer>
      <input type="checkbox" id="confirm-delete" className="modal-toggle" />
      <label htmlFor="confirm-delete" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <h3 className="text-lg font-bold">Confirmer la suppression</h3>
          <div className="modal-action">
            <label htmlFor="confirm-delete" className="btn gap-2">
              <FontAwesomeIcon icon={faX} className="text-primary" />
              Annuler
            </label>
            <button
              className={cn("btn gap-2", {
                loading: loading,
              })}
              onClick={() => handleDeleteClick()}
            >
              {!loading ? (
                <>
                  <FontAwesomeIcon icon={faCheck} className="text-primary" />
                  Confirmer
                </>
              ) : (
                "Suppression..."
              )}
            </button>
          </div>
        </label>
      </label>
    </>
  );
};

export default ArticleActions;

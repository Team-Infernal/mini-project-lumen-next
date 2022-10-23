import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash, faX } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { useState } from "react";

import axios from "lib/axios";
import Button from "components/Elements/Button";

type Props = {
  id: string;
};

const ArticleActions = ({ id }: Props) => {
  const router = useRouter();

  const [loading, setLoading] = useState<boolean>(false);
  const [done, setDone] = useState<boolean>(false);

  const handleDeleteClick = async () => {
    setLoading(true);
    setDone(false);

    try {
      await axios.delete(`/api/articles/${id}`);

      setDone(true);
      router.push("/");
    } catch (error: any) {
      setLoading(false);
    }
  };

  return (
    <>
      <footer className="px-24 w-[54rem] flex gap-4">
        <label
          data-type="interact"
          htmlFor="confirm-delete"
          className="btn modal-button w-0 flex-grow gap-2 cursor-none interactable"
        >
          <FontAwesomeIcon icon={faTrash} className="text-primary" />
          Supprimer
        </label>
        <Button
          href={`/${id}/update`}
          className="w-full"
          anchorClassName="w-0 flex-grow"
          icon={faPen}
          iconClassName="text-primary"
        >
          Modifier
        </Button>
      </footer>
      <input type="checkbox" id="confirm-delete" className="modal-toggle" />
      <label htmlFor="confirm-delete" className="modal cursor-none">
        <label className="modal-box relative">
          <h3 className="text-lg font-bold">Confirmer la suppression</h3>
          <div className="modal-action">
            <label
              data-type="interact"
              htmlFor="confirm-delete"
              className="btn gap-2 w-0 flex-grow cursor-none interactable"
            >
              <FontAwesomeIcon icon={faX} className="text-primary" />
              Annuler
            </label>
            <Button
              loading={loading}
              done={done}
              onClick={handleDeleteClick}
              className="w-0 flex-grow"
              icon={faTrash}
              iconClassName="text-primary"
            >
              {done ? "Supprimé!" : loading ? "Suppression..." : "Confirmer"}
            </Button>
          </div>
        </label>
      </label>
    </>
  );
};

export default ArticleActions;

import cn from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faPlus } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

type Props = {
  handleCreateClick: () => void;
  loading: boolean;
};

const CreateArticleActions = (props: Props) => {
  const { handleCreateClick, loading } = props;

  return (
    <footer className="px-24 py-4 w-[54rem] flex gap-4">
      <Link href="/">
        <a className="w-0 flex-grow">
          <button className="w-full btn gap-2">
            <FontAwesomeIcon icon={faX} className="text-primary" />
            Annuler
          </button>
        </a>
      </Link>
      <button
        className={cn("btn w-0 flex-grow gap-2", {
          loading: loading,
        })}
        onClick={() => handleCreateClick()}
      >
        {!loading ? (
          <>
            <FontAwesomeIcon icon={faPlus} className="text-primary" />
            Créer
          </>
        ) : (
          "Création..."
        )}
      </button>
    </footer>
  );
};

export default CreateArticleActions;

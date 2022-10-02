import cn from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faPen } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

type Props = {
  id: string;
  handleModifyClick: () => void;
  loading: boolean;
};

const UpdateArticleActions = (props: Props) => {
  const { id, handleModifyClick, loading } = props;

  return (
    <footer className="px-24 py-4 w-[54rem] flex gap-4">
      <Link href={`/${id}`}>
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
        onClick={() => handleModifyClick()}
      >
        {!loading ? (
          <>
            <FontAwesomeIcon icon={faPen} className="text-primary" />
            Modifier
          </>
        ) : (
          "Modification..."
        )}
      </button>
    </footer>
  );
};

export default UpdateArticleActions;

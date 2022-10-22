import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faPen } from "@fortawesome/free-solid-svg-icons";

import Button from "components/Elements/Button";
import Anchor from "components/Elements/Anchor";

type Props = {
  id: string;
  handleModifyClick: () => void;
  loading: boolean;
  done: boolean;
};

const UpdateArticleActions = (props: Props) => {
  const { id, handleModifyClick, loading, done } = props;

  return (
    <footer className="px-24 py-4 w-[54rem] flex gap-4">
      <Anchor href={`/${id}`} className="w-0 flex-grow">
        <button className="w-full btn gap-2">
          <FontAwesomeIcon icon={faX} className="text-primary" />
          Annuler
        </button>
      </Anchor>
      <Button
        loading={loading}
        done={done}
        onClick={handleModifyClick}
        className="w-0 flex-grow"
        icon={faPen}
        iconClassName="text-primary"
      >
        {done ? "Modifié!" : loading ? "Modification..." : "Modifier"}
      </Button>
    </footer>
  );
};

export default UpdateArticleActions;

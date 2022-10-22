import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faPlus } from "@fortawesome/free-solid-svg-icons";

import Anchor from "components/Elements/Anchor";
import Button from "components/Elements/Button";

type Props = {
  handleCreateClick: () => void;
  loading: boolean;
  done: boolean;
};

const CreateArticleActions = (props: Props) => {
  const { handleCreateClick, loading, done } = props;

  return (
    <footer className="px-24 py-4 w-[54rem] flex gap-4">
      <Anchor href="/" className="w-0 flex-grow">
        <button className="w-full btn gap-2">
          <FontAwesomeIcon icon={faX} className="text-primary" />
          Annuler
        </button>
      </Anchor>
      <Button
        loading={loading}
        done={done}
        onClick={handleCreateClick}
        className="w-0 flex-grow"
        icon={faPlus}
        iconClassName="text-primary"
      >
        {done ? "Créé!" : loading ? "Création..." : "Créer"}
      </Button>
    </footer>
  );
};

export default CreateArticleActions;

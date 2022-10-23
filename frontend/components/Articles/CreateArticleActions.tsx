import { faPlus, faX } from "@fortawesome/free-solid-svg-icons";

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
      <Button
        href="/"
        className="w-full"
        anchorClassName="w-0 flex-grow"
        icon={faX}
        iconClassName="text-primary"
      >
        Annuler
      </Button>
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

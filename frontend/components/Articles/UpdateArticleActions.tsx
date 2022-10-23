import { faX, faPen } from "@fortawesome/free-solid-svg-icons";

import Button from "components/Elements/Button";

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
      <Button
        href={`/${id}`}
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

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

type BackProps = {
  href?: string;
  text?: string;
};

const Back = ({
  href = "/",
  text = "Retour à la liste d'articles",
}: BackProps) => {
  return (
    <Link href={href}>
      <a className="link link-hover text-sm w-fit mb-2 inline-flex gap-2 items-center">
        <FontAwesomeIcon icon={faAngleLeft} className="text-primary" />
        {text}
      </a>
    </Link>
  );
};

export default Back;

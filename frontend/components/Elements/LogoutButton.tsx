import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import Button from "components/Elements/Button";

import useAuth from "hooks/useAuth";

type LogoutButtonProps = {
  className?: string;
};

const LogoutButton = ({ className = "" }: LogoutButtonProps) => {
  const { logout } = useAuth({ middleware: ["auth"] });
  const [loading, setLoading] = useState<boolean>(false);
  const [done, setDone] = useState<boolean>(false);

  const handleLogoutClick = async () => {
    setLoading(true);
    setDone(false);
    await logout();
    setDone(true);
  };

  return (
    <Button
      onClick={() => handleLogoutClick()}
      loading={loading}
      done={done}
      className={`btn-secondary ${className}`}
      icon={faArrowRightFromBracket}
    >
      {done ? "Déconnecté!" : loading ? "Déconnexion..." : "Se déconnecter"}
    </Button>
  );
};

export default LogoutButton;

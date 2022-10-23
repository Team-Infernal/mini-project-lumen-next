import { ReactNode } from "react";

import LayoutWrapper from "components/Layouts/LayoutWrapper";
import Loader from "components/Loader";

import useAuth from "hooks/useAuth";

const AuthorLayout = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth({
    middleware: ["auth", "role:author", "role:admin"],
  });

  if (!user) {
    return <Loader />;
  }

  return (
    <LayoutWrapper>
      <div className="min-h-screen p-24 flex flex-col justify-between animate-fade-in-up items-center">
        <main>{children}</main>
      </div>
    </LayoutWrapper>
  );
};

export default AuthorLayout;

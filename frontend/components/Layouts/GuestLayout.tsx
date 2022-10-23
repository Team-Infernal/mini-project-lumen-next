import { ReactNode } from "react";

import LayoutWrapper from "components/Layouts/LayoutWrapper";

const GuestLayout = ({ children }: { children: ReactNode }) => {
  return (
    <LayoutWrapper>
      <div className="min-h-screen p-24 flex flex-col justify-between animate-fade-in-up items-center">
        <main>{children}</main>
      </div>
    </LayoutWrapper>
  );
};

export default GuestLayout;

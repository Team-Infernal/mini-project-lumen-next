import { ReactNode } from "react";

const GuestLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen p-24 flex flex-col justify-between animate-fade-in-up items-center">
      <main>{children}</main>
    </div>
  );
};

export default GuestLayout;

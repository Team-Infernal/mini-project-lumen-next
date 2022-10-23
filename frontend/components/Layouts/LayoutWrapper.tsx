import { ReactNode } from "react";

import MouseTrailer from "components/Misc/MouseTrailer";

const LayoutWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <MouseTrailer />
      {children}
    </>
  );
};

export default LayoutWrapper;

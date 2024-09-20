// src/components/Layout/Template.tsx

import { ReactNode } from "react";
import Header from "./Header";

const Template: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Template;

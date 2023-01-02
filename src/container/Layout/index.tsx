import { ReactNode } from "react";

import { Container } from "./styles";

interface ILayout {
  children: ReactNode;
}
const Layout: React.FC<ILayout> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Layout;

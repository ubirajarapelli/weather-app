import { Menu } from "../Menu/Menu";
import { StyledLayout } from "./Layout.style";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <StyledLayout>
      <main>{children}</main>
      <Menu />
    </StyledLayout>
  );
};

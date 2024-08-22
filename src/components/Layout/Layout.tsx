import { Menu } from "../Menu/Menu";
import { StyledPageLayout } from "./Layout.style";

interface PageLayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: PageLayoutProps) => {
  return (
    <StyledPageLayout>
      <main>{children}</main>
      <Menu />
    </StyledPageLayout>
  );
};

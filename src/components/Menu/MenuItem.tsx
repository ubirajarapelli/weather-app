import React from "react";
import { StyledMenuItem } from "./Menu.style";

interface MenuItemProps {
  icon: JSX.Element | React.ReactNode;
  label: string;
  link: string;
}

export const MenuItem = ({ icon, label, link }: MenuItemProps) => {
  return (
    <StyledMenuItem>
      {icon}
      <a href={link}>{label}</a>
    </StyledMenuItem>
  );
};

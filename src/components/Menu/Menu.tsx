import { StyledMenu, StyledWrapperMenu } from "./Menu.style";
import { BiHeart } from "react-icons/bi";
import { BiHomeAlt } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import { BiUserCircle } from "react-icons/bi";
import { MenuItem } from "./MenuItem";

export const Menu = () => {
  return (
    <StyledMenu>
      <StyledWrapperMenu>
        <MenuItem icon={<BiHomeAlt />} label="Início" link="#" />
        <MenuItem icon={<BiSearch />} label="Busca" link="#" />
        <MenuItem icon={<BiHeart />} label="Favoritos" link="#" />
        <MenuItem icon={<BiUserCircle />} label="Perfil" link="#" />
      </StyledWrapperMenu>
    </StyledMenu>
  );
};

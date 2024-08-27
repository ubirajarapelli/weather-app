import { BiHomeAlt } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import { BiHeart } from "react-icons/bi";
import { BiUserCircle } from "react-icons/bi";
import { StyledMenu, StyledMenuItem, StyledWrapperMenu } from "./Menu.style";

export const Menu = () => {
  return (
    <StyledMenu>
      <StyledWrapperMenu>
        <StyledMenuItem>
          <BiHomeAlt size="1.5rem" color="#38aede" />
          <a href="#">Inicio</a>
        </StyledMenuItem>
        <StyledMenuItem>
          <BiSearch size="1.5rem" color="#38aede" />
          <a href="#">Busca</a>
        </StyledMenuItem>
        <StyledMenuItem>
          <BiHeart size="1.5rem" color="#38aede" />
          <a href="#">Favoritos</a>
        </StyledMenuItem>
        <StyledMenuItem>
          <BiUserCircle size="1.5rem" color="#38aede" />
          <a href="#">Perfil</a>
        </StyledMenuItem>
      </StyledWrapperMenu>
    </StyledMenu>
  );
};

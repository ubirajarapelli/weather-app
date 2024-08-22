import styled from "styled-components";
import { colors } from "../../styles/Colors";

export const StyledMenu = styled.nav`
  display: flex;
  align-items: flex-end;
`;

export const StyledWrapperMenu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0;
`;

export const StyledMenuItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  list-style-type: none;

  & svg {
    width: 1.5rem;
    height: 1.5rem;
    fill: ${colors.app.clear.morning.card};
  }

  & a {
    font-size: 0.8rem;
    color: ${colors.text.dark};
  }
`;

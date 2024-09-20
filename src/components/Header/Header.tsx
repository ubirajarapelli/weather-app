import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../context/UserCoxtext";
import {
  StyledHeader,
  StyledUserData,
  StyledUserDataButton,
} from "./Header.style";

interface HeaderProps {
  title: string;
  userName: string;
}

export const Header = ({ title, userName }: HeaderProps) => {
  const navigate = useNavigate();
  const { setUserName } = useContext(UserContext);

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    sessionStorage.removeItem("userToken");
    setUserName(null);
    navigate("/login");
  };

  return (
    <StyledHeader>
      <h1>{title}</h1>
      <div>
        {userName ? (
          <StyledUserData>
            <span>{userName}</span>
            <StyledUserDataButton onClick={handleLogout}>
              Sair
            </StyledUserDataButton>
          </StyledUserData>
        ) : (
          <StyledUserDataButton onClick={handleLogin}>
            Login
          </StyledUserDataButton>
        )}
      </div>
    </StyledHeader>
  );
};

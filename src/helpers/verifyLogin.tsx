import { jwtDecode } from "jwt-decode";
import { useContext } from "react";
import UserContext from "../context/UserCoxtext";

export const VerifyLogin = () => {
  const { setUserName } = useContext(UserContext);

  const sessionData = sessionStorage.getItem("userToken");
  if (sessionData) {
    const userData = jwtDecode(sessionData.token);
    setUserName(userData.name);
  }
};

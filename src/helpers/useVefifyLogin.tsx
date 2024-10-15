import { useContext, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import UserContext from "../context/UserCoxtext";

export const useVerifyLogin = () => {
  const { setUserName } = useContext(UserContext);

  useEffect(() => {
    const sessionData = JSON.parse(sessionStorage.getItem("userToken"));

    if (sessionData) {
      const userData = jwtDecode(sessionData.token);
      setUserName(userData.name);
    }
  }, [setUserName]); // Array de dependencias
};

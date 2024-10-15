import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import UserContext from "../../context/UserCoxtext";
import { Layout } from "../../components/Layout/Layout";
import { Header } from "../../components/Header/Header";
import { useVerifyLogin } from "../../helpers/useVefifyLogin";

export default function Profile() {
  useVerifyLogin();
  const navigate = useNavigate();

  const { userName, setUserName } = useContext(UserContext);

  useEffect(() => {
    const userToken = JSON.parse(sessionStorage.getItem("userToken"));

    if (userToken) {
      const userData = jwtDecode(userToken.token);
      setUserName(userData.name);
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <Layout>
      <Header title="Perfil" userName={userName} />
    </Layout>
  );
}

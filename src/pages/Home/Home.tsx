import { useContext, useEffect, useState } from "react";
import { Layout } from "../../components/Layout/Layout";
import { useLocation } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import UserContext from "../../context/UserCoxtext";
import { VerifyLogin } from "../../helpers/verifyLogin";

export default function Home() {
  const location = useLocation();

  const { userName } = useContext(UserContext);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [cityData, setCityData] = useState(null);

  const loadCity = async (cityCode: number) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://brasilapi.com.br/api/cptec/v1/clima/previsao/${cityCode}`
      );
      const data = await response.json();
      setCityData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!location.state) {
      const inicialCity = 244;
      loadCity(inicialCity);
      return;
    }

    loadCity(location.state.cityCode);
  }, []);

  useEffect(() => {
    // if(userName === null) {
    if (!userName) {
      VerifyLogin();
    }
  }, []);

  return (
    <Layout>
      <Header title="Inicio" userName={userName} />

      <div>
        {isLoading ? (
          <p>Carregando</p>
        ) : (
          <div>
            <h2>
              {cityData?.cidade}/{cityData?.estado}
            </h2>
            <p>
              Min<span>{cityData?.clima[0].min}</span>/ Max
              <span>{cityData?.clima[0].max}</span>
            </p>
            <p>{cityData?.clima[0].condicao_desc}</p>
          </div>
        )}
      </div>
    </Layout>
  );
}

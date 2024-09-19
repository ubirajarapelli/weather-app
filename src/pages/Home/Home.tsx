import { useEffect, useState } from "react";
import { Layout } from "../../components/Layout/Layout";
import { useLocation } from "react-router-dom";

export default function Home() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [cityData, setCityData] = useState(null);

  console.log(location);

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
    // if (location.state === null) {
    if (!location.state) {
      const inicialCity = 244;
      loadCity(inicialCity);
      return;
    }

    loadCity(location.state.cityCode);
  }, []);

  return (
    <Layout>
      <h1>Home</h1>
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

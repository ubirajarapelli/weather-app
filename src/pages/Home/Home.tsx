import { useContext, useEffect, useState } from "react";
import { Layout } from "../../components/Layout/Layout";
import { useLocation } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import UserContext from "../../context/UserCoxtext";
import { useVerifyLogin } from "../../helpers/useVefifyLogin";

export default function Home() {
  useVerifyLogin();
  const location = useLocation();
  const { userName } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [cityData, setCityData] = useState(null);
  const [forecast, setForecast] = useState([]);

  const dateFormat = (data: string) => {
    return new Date(data).toLocaleDateString("pt-br", { timeZone: "UTC" });
  };

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

  const loadForecast = async (cityCode: number) => {
    // Query Param
    // `https://brasilapi.com.br/api/cptec/v1/clima/previsao?city=${cityCode}&days=${days}`
    // Path Param
    // `https://brasilapi.com.br/api/cptec/v1/clima/previsao/${cityCode}/${days}`

    const params = {
      code: cityCode,
      days: 6,
    };

    setIsLoading(true);
    try {
      const response = await fetch(
        `https://brasilapi.com.br/api/cptec/v1/clima/previsao/${params.code}/${params.days}`
      );

      const data = await response.json();
      setForecast(data.clima);
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
      loadForecast(inicialCity);
      return;
    }

    loadCity(location.state.cityCode);
    loadForecast(location.state.cityCode);
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
      <div>
        {forecast.map((item) => (
          <div key={item.data}>
            <span>{dateFormat(item.data)}</span>
            <span>{item.condicao}</span>
            <span>Min: {item.min}&#176;</span>
            <span>Max: {item.max}&#176;</span>
          </div>
        ))}
      </div>
    </Layout>
  );
}

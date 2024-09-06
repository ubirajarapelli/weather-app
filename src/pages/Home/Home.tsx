import { useEffect, useState } from "react";
import { Layout } from "../../components/Layout/Layout";
import { cityMock } from "../../mocks/cityMock";

export default function Home() {
  const [city, setCity] = useState([]);

  const LoadCities = () => {
    // GET
    fetch("https://brasilapi.com.br/api/cptec/v1/cidade")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setCity(data);
      });
  };

  useEffect(() => {
    // setCity(cityMock);
    // console.log("useEffect");

    // if (city.length === 0) {
    //   return;
    // }

    LoadCities();
  }, []);

  // ? => Nullish

  return (
    <Layout>
      <h1>Home</h1>
      {city.map((item: any) => (
        <p key={item.id}>
          {item?.nome} / {item?.estado}
        </p>
      ))}
    </Layout>
  );
}

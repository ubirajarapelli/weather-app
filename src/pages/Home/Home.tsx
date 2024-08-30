import { useEffect, useState } from "react";
import { Layout } from "../../components/Layout/Layout";
import { cityMock } from "../../mocks/cityMock";

export default function Home() {
  const [city, setCity] = useState();

  useEffect(() => {
    setCity(cityMock);
    console.log("useEffect");
  }, []);

  // ? => Nullish

  return (
    <Layout>
      <h1>Home</h1>
      <p>
        {city?.cidade} / {city?.estado}
      </p>
    </Layout>
  );
}

import { useState } from "react";
import { Layout } from "../../components/Layout/Layout";

export default function Search() {
  const [cityName, setCityName] = useState<string>("");
  const [cityList, setCityList] = useState([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCityName(event.target.value);
  };

  const loadCities = async () => {
    try {
      const response = await fetch(
        `https://brasilapi.com.br/api/cptec/v1/cidade/${cityName}`
      );

      const data = await response.json();
      setCityList(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = () => {
    loadCities();
  };

  return (
    <Layout>
      <h1>Busca</h1>
      <form>
        <label htmlFor="search">Buscar cidade</label>
        <br />
        <input type="text" id="search" name="search" onChange={handleChange} />
        <button type="button" onClick={() => handleClick()}>
          Buscar
        </button>
      </form>

      <div>
        <ul>
          {cityList.map((city) => (
            <li key={city.id}>
              {city.nome} / {city.estado}
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

import { useState } from "react";
import { Layout } from "../../components/Layout/Layout";
import { searchMock } from "../../mocks/searchMock";

export default function Search() {
  const [cityName, setCityName] = useState<string>();
  const [hasSearch, setHasSearch] = useState<boolean>(false);
  const [cityList, setCityList] = useState(searchMock);
  const [noResult, setNoResult] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCityName(event.target.value);
  };

  const handleClick = () => {
    setHasSearch(true);
    if (cityName !== "Santo André") {
      setNoResult(true);
    }
  };

  const handleClear = () => {
    setHasSearch(false);
    setCityName("");
    setNoResult(false);
  };

  return (
    <Layout>
      <h1>Busca</h1>
      <form>
        <label htmlFor="search">Buscar cidade</label>
        <input
          type="text"
          id="search"
          name="search"
          onChange={handleChange}
          value={cityName}
        />
        <button type="button" onClick={handleClick}>
          Buscar
        </button>
      </form>
      {hasSearch ? (
        <div>
          <p>Busca pela cidade: {cityName}</p>
          <button onClick={handleClear}>x</button>
          {noResult ? (
            <p>Nenhuma cidade encontrada</p>
          ) : (
            <ul>
              {cityList.map((city) => (
                <li key={city.id}>
                  {city.nome} / {city.estado}
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : null}
    </Layout>
  );
}

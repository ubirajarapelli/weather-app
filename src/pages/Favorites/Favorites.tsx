import { useContext } from "react";
import { Header } from "../../components/Header/Header";
import { Layout } from "../../components/Layout/Layout";
import UserContext from "../../context/UserCoxtext";

export default function Favorites() {
  const { userName } = useContext(UserContext);
  return (
    <Layout>
      <Header title="Favoritos" userName={userName} />
    </Layout>
  );
}

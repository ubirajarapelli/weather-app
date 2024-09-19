import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PrivateRoutes } from "./components/PrivateRoutes/PrivateRoutes";

const LazyHome = lazy(() => import("./pages/Home/Home"));
const LazySearch = lazy(() => import("./pages/Search/Search"));
const LazyProfile = lazy(() => import("./pages/Profile/Profile"));
const LazyLogin = lazy(() => import("./pages/Login/Login"));
const LazyFavorites = lazy(() => import("./pages/Favorites/Favorites"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<>Carregando</>}>
        <Routes>
          <Route path="/" element={<LazyHome />} />
          <Route path="/busca" element={<LazySearch />} />
          <Route path="/login" element={<LazyLogin />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/perfil" element={<LazyProfile />} />
            <Route path="/favorites" element={<LazyFavorites />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

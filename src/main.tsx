import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { UserContextProvider } from "./context/UserCoxtext.tsx";
import { GlobalStyles } from "./styles/GlobalStyles.ts";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UserContextProvider>
      <GlobalStyles />
      <App />
    </UserContextProvider>
  </StrictMode>
);

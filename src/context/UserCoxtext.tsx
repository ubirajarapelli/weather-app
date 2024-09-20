import { createContext, useState } from "react";

const UserContext = createContext(null);

interface UserContextProviderProps {
  children: React.ReactNode;
}

const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [userName, setUserName] = useState("");

  return (
    <UserContext.Provider
      value={{
        userName,
        setUserName,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContextProvider };
export default UserContext;

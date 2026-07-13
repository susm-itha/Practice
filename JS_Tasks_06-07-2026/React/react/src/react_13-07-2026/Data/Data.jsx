import { createContext, useContext } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  return (
    <UserContext.Provider value="Susmitha">
      {children}
    </UserContext.Provider>
  );
}

export function Header() {
  const name = useContext(UserContext);
  return <h2>Header : {name}</h2>;
}

export function Profile() {
  const name = useContext(UserContext);
  return <h2>Profile : {name}</h2>;
}

export function Footer() {
  const name = useContext(UserContext);
  return <h2>Footer : {name}</h2>;
}
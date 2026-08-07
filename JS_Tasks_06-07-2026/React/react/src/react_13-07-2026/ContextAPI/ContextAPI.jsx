import { createContext, useContext } from "react";

const UserContext = createContext();

function Header() {
  const name = useContext(UserContext);
  return <h2>Welcome {name}</h2>;
}

function API() {
  return (
    <UserContext.Provider value="Susmitha">
      <Header />
    </UserContext.Provider>
  );
}

export default API;

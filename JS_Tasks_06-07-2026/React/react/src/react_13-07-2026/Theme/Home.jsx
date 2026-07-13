import { createContext, useContext, useState } from "react";

// Create Context
const AppContext = createContext();

// Home Component
function Home() {
  const { theme, setTheme, user, setUser } = useContext(AppContext);

  return (
    <div
      style={{
        backgroundColor: theme === "Light" ? "white" : "Black",
        color: theme === "Light" ? "Black" : "white",
        padding: "20px",
        textAlign: "left",
        minHeight: "100vh",
      }}
    >
      <h2>Theme : {theme}</h2>

      <button onClick={() => setTheme(theme === "Light" ? "Dark" : "Light")}>
        Change Theme
      </button>

      <hr />

      <h2>User : {user}</h2>

      <button onClick={() => setUser(user === "Guest" ? "Susmitha" : "Guest")}>
        {user === "Guest" ? "Login" : "Logout"}
      </button>
    </div>
  );
}

// Theme Component
function Theme() {
  const [theme, setTheme] = useState("Light");
  const [user, setUser] = useState("Guest");

  return (
    <AppContext.Provider value={{ theme, setTheme, user, setUser }}>
      <Home />
    </AppContext.Provider>
  );
}

export default Theme;
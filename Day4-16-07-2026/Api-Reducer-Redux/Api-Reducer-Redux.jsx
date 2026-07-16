import { createContext, useContext, useState, useReducer } from "react";
import { Provider, useSelector, useDispatch } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

const ColorContext = createContext();

function ColorBox() {
  const { color, setColor } = useContext(ColorContext);

  return (
    <div>
      <h2>Context API</h2>

      <div
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: color,
          border: "1px solid black",
          marginBottom: "10px",
        }}
      ></div>

      <button onClick={() => setColor("Pink")}>Pink</button>
      <button onClick={() => setColor("SkyBlue")}>SkyBlue</button>
      <button onClick={() => setColor("Orange")}>Orange</button>
    </div>
  );
}
function reducer(state, action) {
  switch (action.type) {
    case "login":
      return { user: "Susmitha" };

    case "logout":
      return { user: "Guest" };

    default:
      return state;
  }
}

function UserBox() {
  const [state, dispatch] = useReducer(reducer, { user: "Guest" });

  return (
    <div>
      <h2>useReducer</h2>

      <h3>User : {state.user}</h3>

      <button onClick={() => dispatch({ type: "login" })}>
        Login
      </button>

      <button onClick={() => dispatch({ type: "logout" })}>
        Logout
      </button>
    </div>
  );
}

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    dark: false,
  },
  reducers: {
    toggleTheme: (state) => {
      state.dark = !state.dark;
    },
  },
});

const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
  },
});

function ThemeBox() {
  const dark = useSelector((state) => state.theme.dark);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black",
        padding: "20px",
        marginTop: "20px",
        border: "1px solid black",
      }}
    >
      <h2>Redux Toolkit</h2>

      <h3>{dark ? "Dark Mode" : "Light Mode"}</h3>

      <button onClick={() => dispatch(themeSlice.actions.toggleTheme())}>
        Change Theme
      </button>
    </div>
  );
}

function Three() {
  const [color, setColor] = useState("gray");

  return (
    <Provider store={store}>
      <ColorContext.Provider value={{ color, setColor }}>
        <div style={{ padding: "20px" }}>
          <ColorBox />
          <hr />

          <UserBox />
          <hr />

          <ThemeBox />
        </div>
      </ColorContext.Provider>
    </Provider>
  );
}
export default Three;

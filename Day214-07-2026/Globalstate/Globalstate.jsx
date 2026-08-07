import React from "react";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider, useSelector, useDispatch } from "react-redux";

const appSlice = createSlice({
  name: "app",
  initialState: {
    count: 0,
    name: "Guest",
  },
  reducers: {
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      state.count--;
    },
    changeName: (state) => {
      state.name = "Susmitha";
    },
  },
});

// Store
const store = configureStore({
  reducer: {
    app: appSlice.reducer,
  },
});

// Component
function Home() {
  const { count, name } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Count: {count}</h2>
      <h2>Name: {name}</h2>

      <button onClick={() => dispatch(appSlice.actions.increment())}>
        +
      </button>
      <button onClick={() => dispatch(appSlice.actions.decrement())}>
        -
      </button>

      <button onClick={() => dispatch(appSlice.actions.changeName())}>
        Change Name
      </button>
    </div>
  );
}
function Global() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}
export default Global;
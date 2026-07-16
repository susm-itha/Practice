import React, { createContext, useContext, useReducer } from "react";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider, useSelector, useDispatch } from "react-redux";

const NameContext = createContext();

function Context() {
  const name = useContext(NameContext);

  return (
    <div>
      <h3>API</h3>
      <p>Name : {name}</p>
    </div>
  );
}

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return { count: state.count + 1 };
    default:
      return state;
  }
}

function Reducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h3>useReducer</h3>
      <p>Count : {state.count}</p>

      <button onClick={() => dispatch({ type: "ADD" })}>
        Add
      </button>
    </div>
  );
}

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increase: (state) => {
      state.value++;
    },
  },
});

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

function Redux() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Redux</h3>
      <p>Count : {count}</p>

      <button onClick={() => dispatch(counterSlice.actions.increase())}>
        Add
      </button>
    </div>
  );
}

function Compare() {
  return (
    <Provider store={store}>
      <NameContext.Provider value="Susmitha">
        <Context/>
        <hr />
        <Reducer />
        <hr />
        <Redux />
      </NameContext.Provider>
    </Provider>
  );
}
export default Compare;
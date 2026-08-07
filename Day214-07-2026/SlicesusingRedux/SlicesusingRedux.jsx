import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider, useSelector, useDispatch } from "react-redux";

// Create Slice
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      state.count--;
    },
  },
});

// Create Store
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

// Component
function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "Left", marginTop: "50px" }}>
      <h2>Count: {count}</h2>

      <button onClick={() => dispatch(counterSlice.actions.increment())}>
        +
      </button>

      <button onClick={() => dispatch(counterSlice.actions.decrement())}>
        -
      </button>
    </div>
  );
}

// App
function Tool () {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
export default Tool;

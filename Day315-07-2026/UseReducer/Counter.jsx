import { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "INC":
      return { count: state.count + 1 };

    case "DEC":
      return { count: state.count - 1 };

    default:
      return state;
  }
}
function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h2>{state.count}</h2>

      <button onClick={() => dispatch({ type: "INC" })}>+</button>

      <button onClick={() => dispatch({ type: "DEC" })}>-</button>
    </>
  );
}
export default Counter;
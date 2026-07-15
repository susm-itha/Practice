import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "RED":
      return { color: "Red" };

    case "GREEN":
      return { color: "Green" };

    default:
      return state;
  }
}

function Dispatch() {
  const [state, dispatch] = useReducer(reducer, { color: "Black" });

  return (
    <div>
      <h2>Color : {state.color}</h2>

      <button onClick={() => dispatch({ type: "RED" })}>
        Red
      </button>

      <button onClick={() => dispatch({ type: "GREEN" })}>
        Green
      </button>
    </div>
  );
}
export default Dispatch;

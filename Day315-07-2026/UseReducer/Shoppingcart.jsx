import { useReducer } from "react";

const initialState = { cart: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return { cart: state.cart + 1 };

    case "REMOVE":
      return { cart: state.cart - 1 };

    default:
      return state;
  }
}
function Shopping() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h2>Cart: {state.cart}</h2>

      <button onClick={() => dispatch({ type: "ADD" })}>
        Add Item
      </button>

      <button onClick={() => dispatch({ type: "REMOVE" })}>
        Remove Item
      </button>
    </>
  );
}
export default Shopping;
import { useReducer } from "react";

const initialState = {
  name: "",
  email: "",
};

function reducer(state, action) {
  return {
    ...state,
    [action.field]: action.value,
  };
}

function Handling() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <input
        placeholder="Name"
        onChange={(e) =>
          dispatch({ field: "name", value: e.target.value })
        }
      />

      <input
        placeholder="Email"
        onChange={(e) =>
          dispatch({ field: "email", value: e.target.value })
        }
      />

      <h3>{state.name}</h3>
      <h3>{state.email}</h3>
    </>
  );
}
export default Handling;
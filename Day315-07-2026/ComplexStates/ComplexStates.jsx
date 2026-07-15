import { useReducer } from "react";

const initialState = {
  name: "Susmitha",
  age: 23,
};

function reducer(state, action) {
  switch (action.type) {
    case "changeName":
      return { ...state, name: action.payload, };

    case "increaseAge":
      return { ...state, age: state.age + 1 };

    default:
      return state;
  }
}

function Complex() {
  const [student, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Name: {student.name}</h2>
      <h2>Age: {student.age}</h2>

      <button
        onClick={() =>
          dispatch({ type: "changeName", payload: "Manasu" })
        }
      >
        Change Name
      </button>

      <button
        onClick={() =>
          dispatch({ type: "increaseAge" })
        }
      >
        Increase Age
      </button>
    </div>
  );
}

export default Complex;
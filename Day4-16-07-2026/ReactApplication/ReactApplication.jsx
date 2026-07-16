import React, { createContext, useContext, useReducer } from "react";
import { Provider, useSelector, useDispatch } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

const CompanyContext = createContext();

function Header() {
  const company = useContext(CompanyContext);

  return (
    <div>
      <h1>{company}</h1>
      <hr />
    </div>
  );
}

function Employee() {
  return (
    <div>
      <h2>Employee Details</h2>
      <p><b>ID:</b> 101</p>
      <p><b>Name:</b> Susmitha</p>
      <p><b>Department:</b> React</p>
      <p><b>Role:</b> Frontend Developer</p>
    </div>
  );
}

const salarySlice = createSlice({
  name: "salary",
  initialState: { salary: 25000 },

  reducers: {
    incrementSalary: (state) => {
      state.salary += 1000;
    },
    decrementSalary: (state) => {
      state.salary -= 1000;
    },
  },
});

const store = configureStore({
  reducer: {
    salary: salarySlice.reducer,
  },
});

function Salary() {
  const salary = useSelector((state) => state.salary.salary);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Salary</h2>

      <h3>₹ {salary}</h3>

      <button onClick={() => dispatch(salarySlice.actions.incrementSalary())}>
        Increase
      </button>

      <button onClick={() => dispatch(salarySlice.actions.decrementSalary())}>
        Decrease
      </button>
    </div>
  );
}

const reducer = (state, action) => {
  switch (action.type) {
    case "present":
      return { status: "Present" };

    case "leave":
      return { status: "On Leave" };

    default:
      return state;
  }
};

function Attendance() {
  const [state, dispatch] = useReducer(reducer, {
    status: "Present",
  });

  return (
    <div>
      <h2>Attendance</h2>

      <h3>{state.status}</h3>

      <button onClick={() => dispatch({ type: "present" })}>
        Present
      </button>

      <button onClick={() => dispatch({ type: "leave" })}>
        Leave
      </button>
    </div>
  );
}
function Application() {
  return (
    <Provider store={store}>
      <CompanyContext.Provider value="Technologies">
        <div style={{ padding: "20px" }}>
          <Header />
          <Employee />
          <hr />
          <Salary />
          <hr />
          <Attendance />
        </div>
      </CompanyContext.Provider>
    </Provider>
  );
}
export default Application;




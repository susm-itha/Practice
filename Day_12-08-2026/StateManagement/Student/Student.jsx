import { configureStore, createSlice } from "@reduxjs/toolkit";

const studentslice = createSlice({
  name: "student",

  initialState: {
    name: "Susmitha",
    rollNo: "ST101",
    branch: "ASE",
    attendance: 85,
    status: "Active",

    courses: [
      {
        id: 1,
        name: "React JS",
        marks: 90,
      },
      {
        id: 2,
        name: "JavaScript",
        marks: 85,
      },
      {
        id: 3,
        name: "CSS",
        marks: 88,
      },
    ],
  },

  reducers: {
    increaseAttendance: (state) => {
      state.attendance += 1;
    },

    changeStatus: (state) => {
      state.status =
        state.status === "Active"
          ? "Inactive"
          : "Active";
    },
  },
});

export const {
  increaseAttendance,
  changeStatus,
} = studentSlice.actions;

const student = configureStore({
  reducer: {
    student: studentSlice.reducer,
  },
});

export default studentslice;
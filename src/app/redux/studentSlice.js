import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  studentData: [],
};

export const studentSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    setStudentData: (state, action) => {
      state.studentData = action.payload;
    },
  },
});

export const { setStudentData } = studentSlice.actions;

export default studentSlice.reducer;

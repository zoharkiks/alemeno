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

    markCourseAsCompleted: (state, action) => {
      const { courseId, studentId } = action.payload;
      const courseIndex = state.studentData.findIndex((c) => c.id === courseId);
      if (courseIndex > -1) {
        const studentIndex = state.studentData[courseIndex].students.findIndex((s) => s.id === studentId);
        if (studentIndex > -1) {
          state.studentData[courseIndex].students[studentIndex].courseCompleted = true;
        }
      }
      console.log('New state after markCourseAsCompleted:', state);

    },
  },
});

export const { setStudentData,markCourseAsCompleted } = studentSlice.actions;

export default studentSlice.reducer;

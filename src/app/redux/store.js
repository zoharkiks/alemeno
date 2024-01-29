import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "./courseSlice.js";
import studentReducer from "./studentSlice.js";
import { courseApi } from "./courseApi.js";
import { studentApi } from "./studentApi.js";

export const store = configureStore({
  reducer: {
    students: studentReducer,
    courses: courseReducer,
    [courseApi.reducerPath]: courseApi.reducer,
    [studentApi.reducerPath]: studentApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(courseApi.middleware, studentApi.middleware),
});

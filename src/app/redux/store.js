import { configureStore } from '@reduxjs/toolkit';
import courseReducer from './courseSlice.js';
import { courseApi } from './courseApi.js';

export const store = configureStore({
  reducer: {
    courses: courseReducer,
    [courseApi.reducerPath]: courseApi.reducer,

  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(courseApi.middleware),
});


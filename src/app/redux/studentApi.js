import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define your API service using createApi
export const studentApi = createApi({
  reducerPath: 'studentApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/student/' }),
  endpoints: (builder) => ({
    getEnrolledCourses: builder.query({
      // Define the query parameter to accept a student ID
      query: (studentId) => `${studentId}`,
     
    }),
  }),
});

// Export the auto-generated hook for the endpoint
export const { useGetEnrolledCoursesQuery } = studentApi;
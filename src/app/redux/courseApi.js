import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const courseApi = createApi({
  reducerPath: 'courseApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getCourses: builder.query({
      query: () => '/courses',
    }),
    getCourseById: builder.query({
      query: (id) => `/courses/${id}`,
    }),
    // You can add more endpoints as needed
  }),
});

export const { useGetCoursesQuery, useGetCourseByIdQuery } = courseApi;
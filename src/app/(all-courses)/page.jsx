"use client";

import { useEffect } from "react";
import { useGetCoursesQuery } from "../redux/courseApi";
import { setCourses } from "../redux/courseSlice";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const { data: courses, isLoading, isError, error } = useGetCoursesQuery();

  const allCourses = useSelector((state) => state.courses);

  useEffect(() => {
    if (courses) {
      dispatch(setCourses(courses));
    }
  }, [courses, dispatch]);

  return <div className="">I Am Course List Page</div>;
};

export default Home;

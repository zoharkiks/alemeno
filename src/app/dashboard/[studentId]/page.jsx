"use client";
import { useGetEnrolledCoursesQuery } from "@/app/redux/studentApi";
import { setStudentData } from "@/app/redux/studentSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import EnrolledCourses from "../_components/EnrolledCourses";

const Dashboard = () => {
  const dispatch = useDispatch();
  const studentId = 301;

  // Use the RTK Query hook to fetch enrolled courses
  const {
    data: enrolledCourses,
    isLoading,
    isError,
    error,
  } = useGetEnrolledCoursesQuery(studentId);

  // Get student data from the Redux store
  const allStudentData = useSelector((state) => state.students.studentData);

  useEffect(() => {
    // When enrolled courses are successfully fetched, update the Redux state
    if (enrolledCourses) {
      dispatch(setStudentData(enrolledCourses));
    } else {
    }
  }, [dispatch, enrolledCourses]);

  const findCompletionPercentage = (course, studentId) => {
    const student = course.students.find((s) => s.id === studentId);
    return student ? student.completionPercentage : null;
  };

  // Function to check if the course is completed by the student
  const isCourseCompletedByStudent = (course, studentId) => {
    const student = course.students.find((s) => s.id === studentId);
    return student?.courseCompleted || false;
  };

  // Only include courses that have not been completed by the student
  const uncompletedCourses = allStudentData.filter(
    (course) => !isCourseCompletedByStudent(course, studentId)
  );

  return (
    <div className="p-4">
      {isLoading && <div>Loading...</div>}
      {error && <span>{error.data?.message || "An error occurred"}</span>}
      {!isLoading && !error && (
        <div>
          {uncompletedCourses.length > 0 && (
            
          <span className="">List of Enrolled Courses</span>
          )}
          <div className="grid gap-6 mt-10 mb-2 sm:grid-cols-2 md:grid-cols-3">
          {uncompletedCourses.length > 0 ? (
            uncompletedCourses.map((course) => (
              <EnrolledCourses
                studentId={studentId}
                key={course.id}
                course={course}
                completionPercentage={findCompletionPercentage(
                  course,
                  studentId
                )}
              />
            ))
          ) : (
            <div>No enrolled courses</div>
          )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;

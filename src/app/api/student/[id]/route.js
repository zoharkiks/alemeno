import { courseData } from "@/data/courseData"; // Adjust the import path to where your courseData is located
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const pathname = req.nextUrl.pathname;
    const studentId = parseFloat(pathname.split("/").pop());

    // Filter the courses to retrieve only those that the student is enrolled in
    const enrolledCourses = courseData.filter((course) =>
      course.students.some((student) => student.id === studentId)
    );

    if (enrolledCourses.length > 0) {
      return NextResponse.json(enrolledCourses, { status: 200 });
    } else {
      return NextResponse.json(
        { message: "Student Not Found. Please check the ID" },
        { status: 404 }
      );
    }
  } catch (error) {
    console.log(error);
    // Return a server error response
    return NextResponse.json(
      { message: "An error occurred on the server" },
      { status: 500 }
    );
  }
}

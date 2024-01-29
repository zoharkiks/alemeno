import { courseData } from "@/data/courseData"; // Adjust the import path to where your courseData is located
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { courseId, studentId } = await req.json();

    // Find the course and student to update
    const course = courseData.find((c) => c.id === courseId);
    if (course) {
      const studentIndex = course.students.findIndex((s) => s.id === studentId);
      if (studentIndex > -1) {
        if (!course.students[studentIndex].courseCompleted) {
          // Update the student's `courseCompleted` status
          course.students[studentIndex].courseCompleted = true; // This should be persisted in a database
          // Return a success response with the updated student info
          return NextResponse.json(course.students[studentIndex], {
            status: 200,
          });
        } else {
          // Student has already completed the course
          return NextResponse.json(
            { message: "Student has already completed the course" },
            { status: 409 }
          );
        }
      } else {
        // Student not found
        return NextResponse.json(
          { message: "Student not found" },
          { status: 404 }
        );
      }
    } else {
      // Course not found
      return NextResponse.json(
        { message: "Course not found" },
        { status: 404 }
      );
    }
  } catch (error) {
    console.log(error);
  }
}

import { courseData } from "@/data/courseData"; // Adjust the import path to where your courseData is located
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const { courseId, studentId } = await req.json();

         // Find the course and student to update
      const course = courseData.find((c) => c.id === courseId);
      console.log(course);

      if (course) {
        const studentIndex = course.students.findIndex((s) => s.id === studentId);
        if (studentIndex > -1) {
          // Update the student's `courseCompleted` status
          course.students[studentIndex].courseCompleted = true; // This should be persisted in a database

          // Return a success response with the updated student info
          NextResponse.json(course.students[studentIndex], { status: 200 });

        } else {
          // Student not found
          NextResponse.json({message:"Student not found"}, { status: 404 });
        }
      } else {
        // Course not found
        NextResponse.json({message:"Course not found"}, { status: 404 });

      }
      

        return NextResponse.json({message: "Success"});
    } catch (error) {
        console.log(error);
    }
}
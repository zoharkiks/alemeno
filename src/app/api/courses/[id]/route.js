import { NextResponse } from "next/server";
import { courseData } from "@/data/courseData";

export async function GET(req) {
  try {
    const pathname = req.nextUrl.pathname;
    const id = parseFloat(pathname.split("/").pop()); // Assuming the ID is the last part of the URL

    const course = courseData.find((course) => course.id === id);
    if (course) {
      return NextResponse.json(course);
    } else {
      // If not found, return a 404 Not Found response
      return  NextResponse.json({message:"Course not found"}, { status: 404 });
    }
  } catch (error) {
    console.log(error);
  }
}

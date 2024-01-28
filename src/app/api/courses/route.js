import { NextResponse } from "next/server";
import { courseData } from "@/data/courseData";

  export async function GET(req) {
   try {
    return NextResponse.json(courseData )
   } catch (error) {
    console.log(error);
   }
  }

  

  
import React from "react";
import Link from 'next/link';


const CourseCard = ({ course }) => {
  
  
  const courseId = course.id;

  
  return (
    <Link  href={`/course/${courseId}`} className="p-6 border rounded-lg bg-secondary ">
      <div className="flex items-center justify-between">
        <img
          className="size-10"
          src="https://cdn-icons-png.flaticon.com/512/3482/3482505.png"
        ></img>
        <span className="flex items-center justify-center px-2 py-1 text-xs font-medium uppercase rounded bg-primary text-primary-foreground h-max">
        {course.enrollmentStatus}
      </span>
      </div>

      <h3 className="mt-6 text-sm font-medium uppercase text-secondary-foreground">
        Course
      </h3>

      <div className="flex flex-col mt-4 space-y-4">
        <div className="flex flex-col">
          <h2 className="text-lg font-bold">{course.name}</h2>
          <span>{course.instructor}</span>
        </div>
        <p>
          {course.description}
        </p>

        <div className="space-x-2 capitalize text-muted-foreground">
          <span className="capitalize">{course.duration}</span>
          <span>&#x2022;</span>
          <span>{course.location}</span>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;

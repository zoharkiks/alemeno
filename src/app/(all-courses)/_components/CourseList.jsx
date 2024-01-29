"use client";

import React, { useEffect, useState } from "react";
import CourseCard from "./CourseCard";

const CourseList = ({ courses }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCourses = courses.filter(
    (course) =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  

  return (
    <div className="p-4">
      <input
        type="text" 
        placeholder="Search courses..."
        value={searchTerm}
        onChange={handleSearchChange}
      />

      <div className="grid gap-y-6">
      {filteredCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CourseList;

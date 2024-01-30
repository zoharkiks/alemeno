"use client";

import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input"
import CourseCard from "./CourseCard";
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import useDebounce from "@/hooks/useDebounce";


const CourseList = ({ courses }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [displayCount, setDisplayCount] = useInfiniteScroll(3, 3); 
  const debouncedSearchTerm = useDebounce(searchTerm, 500); 


  useEffect(() => {
  }, [debouncedSearchTerm]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCourses = courses.filter(
    (course) =>
      course.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
  );

  

  return (
    <div className="p-4">
    <div className="flex justify-center w-full">
      <Input className='mb-10 w-max'  type='text' placeholder="Search courses..." value={searchTerm} onChange={handleSearchChange}/>

      </div>


      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
      {filteredCourses.slice(0, displayCount).map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
      <div ref={setDisplayCount} className="invisible">Loading more...</div>

    </div>
  );
};

export default CourseList;

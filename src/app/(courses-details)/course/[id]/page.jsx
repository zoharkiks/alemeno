"use client";

import { useRouter } from "next/router";
import { useGetCourseByIdQuery } from "@/app/redux/courseApi";
import { Icon } from "@iconify/react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CourseDetails = ({ params }) => {
  const id = params.id;

  const { data: course, error, isLoading } = useGetCourseByIdQuery(id);

  // Handle loading and error states
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="grid gap-10 p-4 sm:grid-cols-2">
      {isLoading && <div>Loading...</div>}
      <div className="p-6 rounded-lg bg-secondary">
        <div className="flex flex-col space-y-2">
          <h1 className="text-lg font-semibold">{course.name}</h1>
          <p>{course.description}</p>
        </div>
      </div>

      <div className="p-6 border-b rounded-lg bg-secondary">
        <h2 className="font-semibold">Course Details</h2>
        <div className="grid grid-cols-2 mt-4">
          {/* Col Left */}
          <div className="space-y-2">
            <div className="flex items-center space-x-2 ">
              <Icon icon="fluent:person-12-regular" />
              <span className="text-sm font-medium">{course.instructor}</span>
            </div>

            <div className="flex items-center space-x-2 ">
              <Icon icon="fluent:status-12-regular" />
              <span className="text-sm font-medium">
                {course.enrollmentStatus}
              </span>
            </div>

            <div className="flex items-center space-x-2 ">
              <Icon icon="mingcute:time-line" />
              <span className="text-sm font-medium capitalize">
                {course.duration}
              </span>
            </div>
          </div>

          {/* Col Right */}
          <div className="space-y-2">
            <div className="flex items-center space-x-2 ">
              <Icon icon="fluent:location-12-regular" />
              <span className="text-sm font-medium capitalize">
                {course.location}
              </span>
            </div>

            <div className="flex items-center space-x-2 ">
              <Icon icon="fluent-mdl2:pen-workspace" />
              <span className="text-sm font-medium capitalize">
                Enrolled: {course?.students?.length} Students
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-6 space-y-1">
          <h2 className="font-semibold">Schedule</h2>
          <span>{course.schedule}</span>
        </div>
      </div>

      <div className="p-6 border-b rounded-lg bg-secondary">
        <h2 className="font-semibold">Prerequisites</h2>
        <div className="my-4 space-y-3">
          {course.prerequisites.map((prerequisite, index) => (
            <span
              key={index}
              className="flex items-center space-x-2 border-b w-max"
            >
              - {prerequisite}
            </span>
          ))}
        </div>
      </div>

      <div className="p-6 border-b rounded-lg bg-secondary">
        <h2>Modules</h2>

        <Accordion type="single" collapsible>
          {course.syllabus.map((module, index) => (
            <AccordionItem key={index} value={`item-${index.toString()}`}>
              <AccordionTrigger>
                <div className="flex space-x-4">
                  <span>Week {module.week}</span>
                  <span>{module.topic}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>{module.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default CourseDetails;

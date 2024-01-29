import React from "react";
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";


const EnrolledCourses = ({course,completionPercentage}) => {
  return (
    <div className="p-6 space-y-4 border rounded-lg bg-secondary">
      <h3>{course.name}</h3>
      <h4>{course.instructor}</h4>
      <img
        className="size-10"
        src="https://cdn-icons-png.flaticon.com/512/3482/3482505.png"
      ></img>
      <span>Due Date: {course.completionDueDate}</span>
      <Progress value={completionPercentage} />
<Button >
<Icon className="mr-2 " icon="fluent-mdl2:completed" /> Mark Complete
</Button>
    </div>
  );
};

export default EnrolledCourses;

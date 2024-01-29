import React, { useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import { useMarkCourseAsCompleteMutation } from "@/app/redux/studentApi";
import { markCourseAsCompleted } from "@/app/redux/studentSlice";
import { useDispatch, useSelector } from "react-redux";
import { useToast } from "@/components/ui/use-toast";

const EnrolledCourses = ({ course, completionPercentage, studentId }) => {
  const dispatch = useDispatch();
  const { toast } = useToast();

  const [markCourseAsComplete] = useMarkCourseAsCompleteMutation();

  const handleMarkComplete = async () => {
    toast({
      description: "Course Marked As Completed",
    });

    try {
      // Trigger the mutation with the course ID and student ID
      const response = await markCourseAsComplete({
        courseId: course.id,
        studentId,
      }).unwrap();
      dispatch(markCourseAsCompleted({ courseId: course.id, studentId }));
    } catch (error) {
      // Handle the error case
      console.error("Failed to mark course as complete:", error);
    }
  };

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
      <Button onClick={handleMarkComplete}>
        <Icon className="mr-2 " icon="fluent-mdl2:completed" /> Mark Complete
      </Button>
    </div>
  );
};

export default EnrolledCourses;

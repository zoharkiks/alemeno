import React from "react";

const CourseCard = () => {
  return (
    <div className="p-6 border rounded-lg bg-secondary ">
      <div className="flex items-center justify-between">
        <img
          className="size-10"
          src="https://cdn-icons-png.flaticon.com/512/3482/3482505.png"
        ></img>
        <span className="flex items-center justify-center px-2 py-1 text-xs font-medium uppercase rounded bg-primary text-primary-foreground h-max">
          Open
        </span>
      </div>

      <h3 className="mt-6 text-sm font-medium uppercase text-secondary-foreground">
          Course
        </h3>
        
      <div className="flex flex-col mt-4 space-y-4">
        
        <h2 className="text-lg font-bold">Course Name</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ad
          neque in dolorem maiores beatae obcaecati rem nostrum adipisci, enim
          inventore! Maiores quam eveniet, nulla sint libero provident iusto
          consectetur?
        </p>

        <div className="space-x-2 text-muted-foreground">
          <span>6 Weeks</span>
          <span>&#x2022;</span>
          <span>Beginner</span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;

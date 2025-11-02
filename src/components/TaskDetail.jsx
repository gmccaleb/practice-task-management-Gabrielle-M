import React from "react";
import { useParams, Link } from "react-router";

 const taskData = [
    {
      id: 1,
      title: "Complete lesson",
      description: "React Lesson",
    },
    {
      id: 2,
      title: "Complete group practice",
      description:
        "React State Management and Event Handling - 4 - Task Management",
    },
    {
      id: 3,
      title: "Start on project",
      description: "Unit 1 Final Project - React App",
    },
  ];


const TaskDetail = () => {
    const {id} = useParams();

    const task = taskData.find((task) => String(task.id) === id);

    return (
        <div>
            <h2>DETAILS</h2>
            <div className="task-details">
                <div>
                    <h5>{task.title}</h5>
                </div>
                <div>
                    <strong>Description: </strong>
                    <p>{task.description}</p>
                </div>
            </div>
        </div>
    );
};

export default TaskDetail;

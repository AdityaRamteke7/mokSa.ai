import React, { createContext, useState } from "react";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Task 1",
      description: "Description of Task 1",
      column: "To Do",
    },
    {
      id: 2,
      title: "Task 2",
      description: "Description of Task 2",
      column: "In Progress",
    },
    {
      id: 3,
      title: "Task 3",
      description: "Description of Task 3",
      column: "Done",
    },
  ]);

  const columns = ["To Do", "In Progress", "Done"];

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const moveTask = (source, destination) => {
    const updatedTasks = [...tasks];
    const [movedTask] = updatedTasks.splice(source.index, 1);
    movedTask.column = destination.droppableId;
    updatedTasks.splice(destination.index, 0, movedTask);
    setTasks(updatedTasks);
  };

  return (
    <TaskContext.Provider value={{ tasks, columns, addTask, moveTask }}>
      {children}
    </TaskContext.Provider>
  );
};

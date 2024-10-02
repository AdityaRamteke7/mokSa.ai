import React, { useContext } from "react";
import TaskColumn from "./TaskColumn";
import AddTaskForm from "./AddTaskForm";
import { TaskContext } from "../context/TaskContext";
import { DragDropContext } from "react-beautiful-dnd";
import "./TaskBoard.css";

const TaskBoard = () => {
  const { columns, moveTask } = useContext(TaskContext);

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;
    moveTask(source, destination);
  };

  return (
    <div className="task-board">
      <h1 className="task-board-title">Task Management Board</h1>

      <AddTaskForm />
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="task-board-columns">
          {columns.map((column) => (
            <TaskColumn key={column} column={column} />
          ))}
        </div>
      </DragDropContext>
    </div>
  );
};

export default TaskBoard;

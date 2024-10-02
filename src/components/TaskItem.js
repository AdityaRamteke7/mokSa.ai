import React from "react";
import { Draggable } from "react-beautiful-dnd";
import "./TaskItem.css";

const TaskItem = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id.toString()} index={index}>
      {(provided) => (
        <div
          className="task-item"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <h3 className="task-title">{task.title}</h3>
          <p className="task-description">{task.description}</p>
        </div>
      )}
    </Draggable>
  );
};

export default TaskItem;

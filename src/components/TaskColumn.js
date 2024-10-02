import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import TaskItem from './TaskItem';
import { Droppable } from 'react-beautiful-dnd';
import './TaskColumn.css'; 

const TaskColumn = ({ column }) => {
  const { tasks } = useContext(TaskContext);
  const columnTasks = tasks.filter(task => task.column === column);

  const getColumnClass = () => {
    switch (column) {
      case 'To Do':
        return 'task-column-title todo';
      case 'In Progress':
        return 'task-column-title in-progress';
      case 'Done':
        return 'task-column-title done';
      default:
        return '';
    }
  };

  return (
    <Droppable droppableId={column}>
      {(provided) => (
        <div
          className="task-column"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <h2 className={getColumnClass()}>{column}</h2>
          <div className="task-column-content">
            {columnTasks.map((task, index) => (
              <TaskItem key={task.id} task={task} index={index} />
            ))}
          </div>
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default TaskColumn;

import React, { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import "./AddTaskForm.css"; // Include CSS file

const AddTaskForm = () => {
  const { addTask, columns } = useContext(TaskContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [column, setColumn] = useState(columns[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ id: Date.now(), title, description, column });
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="add-task-form">
      <h3 className="add-task-form-title">Add Task</h3>
      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Task description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <select value={column} onChange={(e) => setColumn(e.target.value)}>
        {columns.map((col) => (
          <option key={col} value={col}>
            {col}
          </option>
        ))}
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTaskForm;

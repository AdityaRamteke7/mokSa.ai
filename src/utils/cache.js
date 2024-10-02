export const getCachedTasks = () => {
  return JSON.parse(localStorage.getItem("tasks")) || [];
};

export const saveTasksToCache = (tasks) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

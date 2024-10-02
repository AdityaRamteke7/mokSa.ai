import TaskBoard from "./components/TaskBoard";
import { TaskProvider } from "./context/TaskContext";

function App() {
  return (
    <div>
      <TaskProvider>
        <TaskBoard />
      </TaskProvider>
    </div>
  );
}

export default App;

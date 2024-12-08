import React, { useState } from "react";

interface Task {
  id: number;
  title: string;
  status: string;
}

interface TaskManagerProps {
  tasks: Task[]; // Initial tasks from the mock data
}

const TaskManager: React.FC<TaskManagerProps> = ({ tasks: initialTasks }) => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [newTaskTitle, setNewTaskTitle] = useState<string>("");

  // Add a new task
  const handleAddTask = () => {
    if (newTaskTitle.trim() === "") return;
    const newTask: Task = {
      id: tasks.length + 1,
      title: newTaskTitle,
      status: "Pending",
    };
    setTasks([...tasks, newTask]);
    setNewTaskTitle(""); // Clear input
  };

  // Edit an existing task
  const handleEditTask = (id: number, newTitle: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, title: newTitle } : task
      )
    );
  };

  // Delete a task
  const handleDeleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle task status between "Pending" and "Completed"
  const handleToggleTaskStatus = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, status: task.status === "Pending" ? "Completed" : "Pending" }
          : task
      )
    );
  };

  return (
    <div>
      <h2>Task Manager</h2>
      <div>
        <input
          type="text"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          placeholder="New task title"
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span>
              {task.title} - <strong>{task.status}</strong>
            </span>
            <button onClick={() => handleToggleTaskStatus(task.id)}>
              {task.status === "Pending" ? "Mark Completed" : "Mark Pending"}
            </button>
            <button
              onClick={() =>
                handleEditTask(
                  task.id,
                  prompt("Edit Task Title:", task.title) || task.title
                )
              }
            >
              Edit
            </button>
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;

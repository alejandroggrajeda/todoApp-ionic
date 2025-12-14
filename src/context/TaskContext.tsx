//contexto global de las tareas

import React, { createContext, useState, useContext, ReactNode } from "react";

//estructura de las tareas
export interface Task {
  id: string;
  title: string;
  description: string;
  type: "Trabajo" | "Casa" | "Negocios";
  isCompleted: boolean;
}

interface TaskContextType {
  tasks: Task[];
  addTask: (title: string, description: string, type: any) => void;
  toggleComplete: (id: string) => void;
  deleteTask: (id: string) => void;
  getTask: (id: string) => Task | undefined;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (title: string, description: string, type: any) => {
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      description,
      type,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleComplete = (id: string) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, isCompleted: !t.isCompleted } : t)));
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const getTask = (id: string) => tasks.find((t) => t.id === id);

  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleComplete, deleteTask, getTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) throw new Error("useTasks debe usarse dentro de TaskProvider");
  return context;
};

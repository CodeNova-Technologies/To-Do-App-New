import React, { createContext, useState, useContext, useEffect } from 'react';
import { useAuth } from '../AuthContext/AuthContext';

const TaskContext = createContext();

export function TaskProvider({ children }) {
    const { user, updateUserTasks } = useAuth();
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        if (user) {
            setTasks(user.tasks || []);
        }
    }, [user]);

    const toggleTask = (id) => {
        const updatedTasks = tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
        updateUserTasks(updatedTasks); // Sync back to AuthContext (per-user)
    };

    return (
        <TaskContext.Provider value={{ tasks, toggleTask }}>
            {children}
        </TaskContext.Provider>
    );
}

export const useTasks = () => useContext(TaskContext);
import { createContext, useContext, useState } from 'react'

const AuthContext = createContext();

export function AuthProvider({ children }) {

    const initialTasks = [
        { id: 1, title: 'Design homepage', completed: false },
        { id: 2, title: 'Fix login bug', completed: false },
        { id: 3, title: 'Write documentation', completed: false },
        { id: 4, title: 'Deploy to production', completed: false },
        { id: 5, title: 'Update user profile page', completed: false },
        { id: 6, title: 'Implement dark mode', completed: false },
        { id: 7, title: 'Optimize database queries', completed: false },
    ];

    const [users, setUsers] = useState([]); // All registered users
    const [user, setUser] = useState(null); // Currently logged-in user

    const register = (name, username, password) => {
        const exists = users.some(u => u.username === username);
        if (exists) {
            alert('Username already exists!');
            return false;
        }
        const newUser = { name, username, password, tasks: [...initialTasks] };
        setUsers(prev => [...prev, newUser]);
        setUser(newUser);
        return true;
    }

    const login = (username, password) => {
        const found = users.find(u => u.username === username && u.password === password);
        if (found) {
            setUser(found);
            return true;
        }
        return false;
    };

    const logout = () => setUser(null);

    const updateUserTasks = (updatedTasks) => {
        setUser(prev => {
            const updatedUser = { ...prev, tasks: updatedTasks };
            setUsers(prevUsers =>
                prevUsers.map(u => (u.username === updatedUser.username ? updatedUser : u))
            );
            return updatedUser;
        });
    };

    return (
        <AuthContext.Provider value={{ user, users, register, login, logout, updateUserTasks }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);

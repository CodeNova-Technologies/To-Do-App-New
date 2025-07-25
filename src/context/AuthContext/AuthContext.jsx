import { createContext, useContext, useState } from 'react'

const AuthContext = createContext();

export function AuthProvider({ children }) {

    const [users, setUsers] = useState([]); // All registered users
    const [user, setUser] = useState(null); // Currently logged-in user

    const register = (name, username, password) => {
        const exists = users.some(u => u.username === username);
        if (exists) {
            alert('Username already exists!');
            return false;
        }
        const newUser = { name, username, password };
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

    return (
        <AuthContext.Provider value={{ user, users, register, login }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);

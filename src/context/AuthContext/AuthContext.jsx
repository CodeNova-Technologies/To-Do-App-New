import { createContext, useContext, useState } from 'react'

const AuthContext = createContext();

export function AuthProvider({ children }) {

    const [users, setUsers] = useState([]);

    const register = (name, username, password) => {
        const exists = users.some(u => u.username === username);
        if (exists) {
            alert('Username already exists!');
            return false;
        }
        const newUser = { name, username, password};
        setUsers(prev => [...prev, newUser]);
        return true;
    }

    return (
        <AuthContext.Provider value={{ users, register }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);

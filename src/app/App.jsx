import React from 'react';
import { AuthProvider } from '../context/AuthContext/AuthContext'
import { Route, Routes } from 'react-router-dom'
import Register from '../pages/Register/Register'
import Login from '../pages/Login/Login'
import Dashboard from '../pages/Dashboard/Dashboard'
import { TaskProvider } from '../context/TaskContext/TaskContext';

function App() {

  return (
    <AuthProvider>
      <TaskProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
        </Routes>
      </TaskProvider>
    </AuthProvider>
  )
}

export default App;
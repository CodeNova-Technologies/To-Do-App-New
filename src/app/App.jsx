import React from 'react';
import { AuthProvider } from '../context/AuthContext/AuthContext'
import { Route, Routes } from 'react-router-dom'
import Register from '../pages/Register/Register'
import Login from '../pages/Login/Login'
import Dashboard from '../pages/Dashboard/Dashboard'

function App() {

  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </AuthProvider>
  )
}

export default App;
import React from 'react';
import { AuthProvider } from '../context/AuthContext/AuthContext'
import { Route, Routes } from 'react-router-dom'
import Register from '../pages/Register/Register'
// import Login from '../pages/Login/Login'

function App() {

  return (
    <AuthProvider>
      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/" element={<Register />} />
      </Routes>
    </AuthProvider>
  )
}

export default App

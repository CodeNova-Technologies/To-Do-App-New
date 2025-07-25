import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login/Login';
import PermanentDrawerLeft from '../pages/Dashboard/Dashboard';
import ToDoList from '../pages/TaskList/TaskList';
// import CompleteTask from '../pages/completedtasks/CompletedTaskItem';
import CompleteList from '../pages/CompleteList/CompleteList';
import Profile from '../pages/Profile/Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />

        {/* Dashboard layout wrapper */}
        <Route path="/" element={<PermanentDrawerLeft />}>
          <Route path="toDoList" element={<ToDoList />} />
          <Route path="complete-list" element={<CompleteList />} />
          {/* <Route path="complete-task" element={<CompleteTask />} /> */}
          <Route path="profile" element={<Profile />} />
        </Route>

        {/* fallback redirect */}
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;

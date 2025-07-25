import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import TaskList from '../../pages/TaskList/TaskList';
import CompleteList from '../../pages/CompleteList/CompleteList';
import Profile from '../../pages/Profile/Profile';

export default function Dashboard() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Navigate to="tasks" />} />
        <Route path="tasks" element={<TaskList />} />
        <Route path="completed" element={<CompleteList />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

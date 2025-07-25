import React from "react";
import { useTasks } from '../../context/TaskContext/TaskContext';
import { useAuth } from '../../context/AuthContext/AuthContext';
import {
  Container,
  Typography,
  Divider,
  Box,
  List,
} from "@mui/material";
import CompletedTaskItem from '../../components/CompletedTaskItem/CompletedTaskItem';

const CompleteList = () => {
  const { tasks } = useTasks();
  const { user } = useAuth();

  const completed = tasks.filter(t => t.completed);

  // Group completed tasks by user (handle undefined name)
  const summary = {};
  completed.forEach(task => {
    const username = task.assignedTo || "Unknown User";
    if (!summary[username]) {
      summary[username] = [];
    }
    summary[username].push(task);
  });

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h5" gutterBottom sx={{ color: '#1976d2' }}>
        Completed Tasks
      </Typography>

      <Divider sx={{ mb: 2 }} />

      {completed.length === 0 ? (
        <Typography variant="body1" sx={{ mt: 4 }}>
          No completed tasks yet.
        </Typography>
      ) : (
        Object.entries(summary).map(([username, userTasks]) => (
          <Box key={username} sx={{ mb: 4 }}>
            <Typography variant="h6" sx={{ color: '#1976d2' }}>
              {user.username} ({userTasks.length})
            </Typography>
            <List disablePadding>
              {userTasks.map((task) => (
                <CompletedTaskItem key={task.id} task={task.title} />
              ))}
            </List>
            <Divider sx={{ mt: 2 }} />
          </Box>
        ))
      )}
    </Container>
  );
};

export default CompleteList;
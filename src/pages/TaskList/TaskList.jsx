import { useTasks } from '../../context/TaskContext/TaskContext';
import { List, ListItem, Checkbox, Typography, Container } from '@mui/material';

export default function TaskList() {
  const { tasks, toggleTask } = useTasks();
  
  return (
    <Container>
      <Typography variant="h5" gutterBottom>To-Do List</Typography>
      <List>
        {tasks.map(task => (
          <ListItem key={task.id} divider>
            <Checkbox
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.title}
            </span>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
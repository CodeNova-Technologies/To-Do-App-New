import React from 'react';
import {Box,Typography,Paper,Checkbox,FormControlLabel,Stack
} from '@mui/material';

const tasks = [
  'Design homepage',
  'Fix login bug',
  'Write documentation',
  'Deploy to production',
  'Update user profile page',
  'Implement dark mode',
  'Optimize database queries',
];

export default function TaskList() {
  return (
    <Box sx={{ p: 4, backgroundColor: '#e3f2fd', minHeight: '100vh' }}>
      <Typography variant="h4" gutterBottom align="center">
        To-Do List
      </Typography>
      <Paper elevation={0} sx={{ maxWidth: 700, mx: 'auto', mt: 2, p: 3 }}>
        <Stack spacing={2}>
          {tasks.map((task, index) => (
            <FormControlLabel
              key={index}
              control={<Checkbox />}
              label={<Typography variant="body1">{task}</Typography>}
            />
          ))}
        </Stack>
      </Paper>
    </Box>
  );
}

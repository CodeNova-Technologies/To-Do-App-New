import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Stack,
  Chip,
} from "@mui/material";
import DoneAllIcon from "@mui/icons-material/DoneAll";

const CompletedTaskItem = ({ task }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        mb: 2,
        backgroundColor: "#f5f5f5",
        borderLeft: "5px solid #1976d2",
        boxShadow: 1,
        ":hover": {
          boxShadow: 3,
        },
      }}
    >
      <CardContent >
        <Stack direction="row" spacing={2} alignItems="center">
          <DoneAllIcon color="success" />
          <Typography variant="body1" sx={{ color: '#1976d2', fontWeight: 500 }}>
            Completed task: {task}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default CompletedTaskItem;
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import { Link, useNavigate, Outlet } from 'react-router-dom';


const drawerWidth = 240;

export default function PermanentDrawerLeft() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerContent = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {[
          { text: 'Task', path: 'toDoList' },       // ✅ relative path
          { text: 'Completed Task', path: 'complete-list' },  // ✅ relative path
        ].map(({ text, path }, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              component={Link}
              to={path}
              onClick={handleDrawerToggle}
            >
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

    </div>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      {/* AppBar */}
      {/* <AppBar position="fixed" sx={{ width: '100%' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
           To Do App
          </Typography>
          <Stack direction="row" spacing={2}>
            <Avatar
              alt="User Profile"
              src="/static/images/avatar/2.jpg"
              sx={{ cursor: 'pointer' }}
              onClick={() => navigate('/profile')}
            />
          </Stack>
        </Toolbar>
      </AppBar> */}


      <AppBar position="fixed" sx={{ width: '100%' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
            To Do App
          </Typography>

          {/* 🔘 Add Logout and Profile icons here */}
          <Stack direction="row" spacing={2} alignItems="center">
            {/* 🔘 Logout Button */}
            <IconButton color="inherit" onClick={() => navigate('/login')}>
              <Typography variant="body2" sx={{ color: '#fff' }}>
                Logout
              </Typography>
            </IconButton>

            {/* 👤 Profile Avatar */}
            <Avatar
              alt="User Profile"
              src="/static/images/avatar/2.jpg"
              sx={{ cursor: 'pointer' }}
              onClick={() => navigate('/profile')}
            />
          </Stack>
        </Toolbar>
      </AppBar>


      {/* Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', sm: 'block' },
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        {drawerContent}
      </Drawer>

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
        <Outlet />  {/* This renders /toDoList, /profile, etc. */}
      </Box>
    </Box>
  );
}

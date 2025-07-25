import React from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import {
    AppBar, Toolbar, Typography, Drawer, List, ListItemButton, ListItemIcon,
    ListItemText, Box, Button, IconButton
} from '@mui/material';
import ListAltIcon from '@mui/icons-material/ListAlt';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useAuth } from '../../context/AuthContext/AuthContext';
import BadgeAvatar from '../BadgeAvatar/BadgeAvatar';

export default function Layout() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleProfileClick = () => {
        navigate('/dashboard/profile');
    };

    return (
        <Box sx={{ minHeight: '97vh', display: 'flex', bgcolor: '#e0f0ff' }}>
            <AppBar position="fixed">
                <Toolbar>
                    <Typography sx={{ flexGrow: 1 }}>
                        To Do App - Welcome {user?.name || user?.username || 'User'}
                    </Typography>
                    <Button onClick={() => { logout(); navigate('/'); }} color="inherit">Logout</Button>
                    <IconButton sx={{ ml: 2 }} onClick={handleProfileClick} color="inherit">
                        <BadgeAvatar />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                sx={{
                    width: 200,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: {
                        width: 200,
                        boxSizing: 'border-box',
                        mt: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        bgcolor: '#f5faff',
                        borderRight: '1px solid #ddd',
                    }
                }}
            >
                <List sx={{ width: '100%', mt: 2, display: 'flex', flexDirection: 'column', gap: 1 }}>
                    <ListItemButton component={Link} to="/dashboard/tasks">
                        <ListItemIcon>
                            <ListAltIcon sx={{ color: '#1976d2' }} />
                        </ListItemIcon>
                        <ListItemText primary="Task List" />
                    </ListItemButton>
                    <ListItemButton component={Link} to="/dashboard/completed">
                        <ListItemIcon>
                            <CheckCircleIcon sx={{ color: '#1976d2' }} />
                        </ListItemIcon>
                        <ListItemText primary="Completed Tasks" />
                    </ListItemButton>
                </List>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, mt: 8, ml: 25, p: 2 }}>
                <Outlet />
            </Box>
        </Box>
    );
}
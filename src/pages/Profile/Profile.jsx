import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Button, TextField, Typography, Avatar, Paper } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import image from '../../assets/motivation.png';
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext/AuthContext';
import { useEffect } from 'react';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

export default function Profile() {

    const [profileImage, setProfileImage] = useState(image);
    const { user } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    useEffect(() => {
        if (user) {
            setUsername(user.username || '');
            setName(user.name || '');
            setPassword(user.password || '');
        }
    }, [user]);

    const handleFileChange = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <Box
            sx={{
                position: 'absolute',
                top: 64,
                bottom: 0,
                left: 200,
                right: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                backgroundColor: 'transparent',
            }}
        >
            <Paper
                elevation={6}
                sx={{
                    p: 3,
                    borderRadius: 4,
                    width: 380,
                    height: 430,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                }}
            >
                <Typography variant="h6" gutterBottom>
                    Profile Settings
                </Typography>

                <Box sx={{ position: 'relative', width: 100, height: 90, mb: 2 }}>
                    <Avatar
                        src={profileImage}
                        sx={{
                            width: 100,
                            height: 100,
                            border: '3px solid #1976d2',
                        }}
                    />
                    <Button
                        component="label"
                        sx={{
                            position: 'absolute',
                            bottom: -10,
                            right: -10,
                            minWidth: 0,
                            width: 32,
                            height: 32,
                            borderRadius: '50%',
                            bgcolor: '#1976d2',
                            color: 'white',
                            '&:hover': {
                                bgcolor: '#1565c0',
                            },
                        }}
                    >
                        <CloudUploadIcon fontSize="small" sx={{ fontSize: '18px' }} />
                        <VisuallyHiddenInput type="file" accept="image/*" onChange={handleFileChange} />
                    </Button>
                </Box>

                <Box sx={{ width: '92%' }}>
                    <TextField
                        label="Name"
                        fullWidth
                        size="medium"
                        margin="normal"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        sx={{ height: 50 }}
                    />

                    <TextField
                        label="Username"
                        fullWidth
                        size="medium"
                        margin="normal"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        sx={{ height: 50 }}
                    />

                    <TextField
                        label="Password"
                        type="password"
                        fullWidth
                        size="medium"
                        margin="normal"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        sx={{ height: 50 }}
                    />

                    <Button
                        variant="contained"
                        fullWidth
                        sx={{
                            mt: 3,
                            height: 48,
                            fontSize: 15,
                            bgcolor: '#1976d2',
                            '&:hover': { bgcolor: '#1565c0' },
                        }}
                    >
                        Save Changes
                    </Button>
                </Box>
            </Paper>
        </Box>
    )
}

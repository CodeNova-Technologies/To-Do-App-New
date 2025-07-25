import { useEffect, useState } from 'react'
import { Container, TextField, Button, Typography, Box, Alert } from '@mui/material';
import { useAuth } from '../../context/AuthContext/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {

    const { login } = useAuth();
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const nav = useNavigate();

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        };
    }, []);

    const submit = () => {
        if (!username || !password) return setError('Fill all fields');
        const success = login(username, password);
        if (success) {
            nav('/dashboard/tasks');
        } else {
            setError('Invalid credentials');
        }
    };

    return (
        <Box
            sx={{
                minHeight: '100vh',
                bgcolor: '#e0f0ff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                p: 2,
            }}
        >
            <Container
                maxWidth="xs"
                sx={{
                    bgcolor: 'white',
                    p: 4,
                    borderRadius: 2,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                }}
            >
                <Box display="flex" flexDirection="column" gap={2}>
                    <Typography variant="h4" align="center" mb={1}>
                        Login
                    </Typography>
                    {error && <Alert severity="error">{error}</Alert>}
                    <TextField label="Username" fullWidth
                        value={username}
                        onChange={e => setUserName(e.target.value)}
                    />
                    <TextField
                        label="Password"
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        fullWidth
                    />
                    <Button variant="contained" fullWidth onClick={submit}>
                        Login
                    </Button>
                    <Typography align="center" mt={1}>
                        <Link to="/register">Register an account</Link>
                    </Typography>
                </Box>
            </Container>
        </Box>
    )
}
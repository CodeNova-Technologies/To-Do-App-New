import { useEffect } from 'react'
import { Container, TextField, Button, Typography, Box } from '@mui/material';

export default function Login() {

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        };
    }, []);

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
                    <TextField label="Username" fullWidth />
                    <TextField
                        label="Password"
                        type="password"
                        fullWidth
                    />
                    <Button variant="contained" fullWidth>
                        Login
                    </Button>
                    <Typography align="center" mt={1}>
                        Register an account
                    </Typography>
                </Box>
            </Container>
        </Box>
    )
}
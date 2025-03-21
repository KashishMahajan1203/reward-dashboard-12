import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext'; // Import your Auth context
import { TextField, Button, Typography, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

const Login = () => {
    const { login } = useAuth(); // Get the login function from Auth context
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate

    const handleLogin = () => {
        // Here you can add your authentication logic (e.g., API call)
        login(); // Call the login function from context
        navigate('/dashboard'); // Redirect to the dashboard after login
    };

    return (
        <Container maxWidth="xs" style={{ marginTop: '50px' }}>
            <Typography variant="h4" gutterBottom>Login</Typography>
            <TextField 
                label="Username" 
                fullWidth 
                margin="normal" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
            />
            <TextField 
                label="Password" 
                type="password" 
                fullWidth 
                margin="normal" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
            />
            <Button 
                variant="contained" 
                color="primary" 
                onClick={handleLogin}
                fullWidth
            >
                Login
            </Button>
        </Container>
    );
};

export default Login;
import React from 'react';

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
const theme = createTheme();

const Register = () => {
    const { register, error } = useAuth();
    const history = useNavigate();
    const location = useLocation();
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
        register(data.get('name'), data.get('email'), data.get('password'), history, location);

        fetch('https://jutecrafts-server1.onrender.com/user', {
            method: "POST", headers: {
                'content-type': 'application/json'
            }, body: JSON.stringify({ name: data.get('name'), email: data.get('email'), password: data.get('password') })
        }).then(res => res.json()).then(data => {
            if (data.insertedId) {
                alert("registration successfull");

            }
        })
        history("/");
        event.target.reset();
    };
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >

                    <Typography component="h1" variant="h5">
                        Please Sign up
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3, mb: 5 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    autoComplete="given-name"
                                    name="name"
                                    required
                                    fullWidth
                                    id="Name"
                                    label="Name"
                                    autoFocus
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                />
                            </Grid>

                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>

                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link to="/login" style={{ textDecoration: "none" }} variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                            {error.length ? <Alert severity="error">{error}</Alert> : ""}
                        </Grid>
                    </Box>
                </Box>

            </Container>
        </ThemeProvider>
    );
};

export default Register;
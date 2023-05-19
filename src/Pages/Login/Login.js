import React from 'react';

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import useAuth from '../../Hooks/useAuth';
const theme = createTheme();

const Login = () => {

    const { logIn, googleSignIn, error } = useAuth();
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
        logIn(data.get('email'), data.get('password'), history, location)
        event.target.reset()
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
                        Please Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, mb: 5 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <Grid container>

                            <Grid item>
                                <Link to="/register" variant="body2" style={{ textDecoration: "none" }}>
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                        {error.length ? <Alert severity="error">{error}</Alert> : ""}
                        <Button style={{ background: "white", padding: "5px 50px", border: "1px solid black", width: "100%", marginTop: "10px" }} onClick={() => googleSignIn(history, location)}><img className='me-5' width="30px" height="30px" style={{ marginRight: "15px", padding: "5px" }} src="https://th.bing.com/th/id/OIP.nQC8Hnobdwn1TtByiqr8iwHaHj?pid=ImgDet&rs=1" alt="" />Google Sign in</Button>
                    </Box>
                </Box>

            </Container>
        </ThemeProvider>
    );
};

export default Login;
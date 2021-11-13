
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';
import './Header.css'
import {
    AppBar,
    Toolbar,
    CssBaseline,
    Typography,
    makeStyles,
    useTheme,
    useMediaQuery,
    Grid,
} from "@material-ui/core";
import DrawerElement from '../DrawerElement/DrawerElement';
import useAuth from '../../../Hooks/useAuth';



const useStyles = makeStyles((theme) => ({
    navlinks: {
        marginLeft: theme.spacing(5),
        display: "flex",
    },
    logo: {
        flexGrow: "1",
        cursor: "pointer",
    },
    link: {
        textDecoration: "none",

        fontSize: "20px",
        marginLeft: theme.spacing(20),
        "&:hover": {
            color: "blue",
            borderBottom: "1px solid blue",
        },
    },
}));




const Header = () => {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const { user, logOut } = useAuth();

    return (
        <div>
            <Grid container spacing={2} >
                <Grid item xs={12} md={4}>
                    <div className="icons">
                        <i class="fab fa-facebook-f"></i>
                        <i class="fab fa-twitter"></i>
                        <i class="fab fa-linkedin-in"></i>
                        <i class="fab fa-instagram"></i>
                    </div>
                </Grid>
                <Grid item xs={12} md={4}>
                    <div className="logo">
                        <img src={logo} width="25%" alt="" />
                    </div>
                </Grid>
                <Grid item xs={12} md={4}>
                    <div className="contract">
                        <p> Phone:0175666666</p>
                        <p>Email:admin@gmail.com</p>
                    </div>
                </Grid>
            </Grid>

            <AppBar position="static" style={{ background: "white", color: "black", boxShadow: "0 0 0" }}>
                <CssBaseline />
                <Toolbar>

                    {isMobile ? (
                        <DrawerElement></DrawerElement>
                    ) : (
                        <div className={classes.navlinks}>
                            <Link to="/home" className={classes.link}>
                                Home
                            </Link>
                            <Link to="/ourproducts" className={classes.link}>
                                Our Products
                            </Link>
                            <Link to="/dashboard" className={classes.link}>
                                Dashboard
                            </Link>

                            {
                                user.email ? <Link to="/" onClick={logOut} className={classes.link}>LogOut</Link> : <Link to='/login' className={classes.link}>Login</Link>
                            }
                            <Link to="/register" className={classes.link}>
                                Register
                            </Link>
                        </div>
                    )}
                </Toolbar>
            </AppBar>


        </div>

    );
};

export default Header;
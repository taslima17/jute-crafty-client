
import React, { useState } from 'react';
import {
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemText,
    makeStyles
} from "@material-ui/core";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import useAuth from '../../../Hooks/useAuth';


const useStyles = makeStyles(() => ({
    link: {
        textDecoration: "none",
        color: "blue",
        fontSize: "20px",
    },
    icon: {
        color: "white"
    }
}));




const DrawerElement = () => {
    const classes = useStyles();
    const [openDrawer, setOpenDrawer] = useState(false);
    const { user, logOut } = useAuth();

    return (
        <>
            <Drawer
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
            >
                <List className={classes.navlinks}>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to="/home" className={classes.link}>Home</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to="/ourproducts" className={classes.link}>Our Products</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to="/dashboard" className={classes.link}>DashBoard</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            {
                                user.email ? <Link to="/" onClick={logOut} className={classes.link}>LogOut</Link> : <Link className={classes.link} to='/login'>Login</Link>
                            }
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to="/register" className={classes.link}>Register</Link>
                        </ListItemText>
                    </ListItem>
                </List>
            </Drawer>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon />
            </IconButton>
        </>
    );
};

export default DrawerElement;
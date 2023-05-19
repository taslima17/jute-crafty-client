import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Link, useMatch, Routes, Route, Outlet } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';


import './DeshBoard.css'

const DashBoard = () => {

    const { admin, logOut } = useAuth();
    const [click, setClick] = useState("myOrders");
    console.log(admin)

    return (
        <div className="deshboard">
            <Grid container spacing={5}>
                <Grid item xs={12} md={3} className="links" onClick={() => setClick("myorders")} sx={{ mt: 5, pt: 5 }}>

                    {/* <Link style={{ paddingTop: "50px" }} className="link" to={`${url}/payment/:id`}>Payment</Link> */}
                    <Link className="link" to="/dashboard/myorders" >Your Orders</Link>
                    <Link className="link" to="/dashboard/addreview">Add Review</Link>
                    <Link className="link" to="/dashboard/manageorders">Manage All Orders</Link>
                    <Link className="link" to="/dashboard/manageproducts">Manage All Products</Link>
                    <Link className="link" to="/dashboard/addAdmin">Make An Admin</Link>
                    <Link className="link" to="/dashboard/addproduct">Add a Product</Link>
                    {admin && <Link className="link" to="/dashboard/addproduct">Add a Product</Link>}
                    {admin && <Link className="link" to="/dashboard/manageorders">Manage All Orders</Link>}
                    {admin && <Link className="link" to="/dashboard/manageproducts">Manage All Products</Link>}
                    {admin && <Link className="link" to="/dashboard/addAdmin">Make An Admin</Link>}
                    <Link to="/home" className="link" onClick={logOut}>LogOut</Link>

                </Grid>
                <Grid item xs={12} md={9} className="routes">
                    <Outlet />

                </Grid>

            </Grid>
        </div>
    );
};

export default DashBoard;
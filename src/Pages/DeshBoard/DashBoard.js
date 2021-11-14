import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

import AddProduct from './AddProduct/AddProduct';
import AddReview from './AddReview/AddReview';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import ManageOrders from './ManageOrders/ManageOrders';
import Payment from './Payment/Payment';
import YourOrders from './YourOrders/YourOrders';
import './DeshBoard.css'
import ManageProducts from './ManageProducts/ManageProducts';
const DashBoard = () => {
    let { path, url } = useRouteMatch();
    const { admin, logOut } = useAuth();
    const [clicke, setClick] = useState("myOrders");
    console.log(admin)

    return (
        <div className="deshboard">
            <Grid container spacing={5}>
                <Grid item xs={12} md={3} className="links" onClick={() => setClick("myorders")} sx={{ mt: 5, pt: 5 }}>

                    <Link style={{ paddingTop: "50px" }} className="link" to={`${url}/payment`}>Payment</Link>
                    <Link className="link" to={`${url}/myOrders`} >Your Orders</Link>
                    <Link className="link" to={`${url}/AddReview`}>Add Review</Link>
                    <Link className="link" to={`${url}/manageorders`}>Manage All Orders</Link>
                    <Link className="link" to={`${url}/manageproducts`}>Manage All Products</Link>
                    <Link className="link" to={`${url}/addAdmin`}>Make An Admin</Link>
                    <Link className="link" to={`${url}/addproduct`}>Add a Product</Link>
                    {admin && <Link className="link" to={`${url}/addproduct`}>Add a Product</Link>}
                    {admin && <Link className="link" to={`${url}/manageorders`}>Manage All Orders</Link>}
                    {admin && <Link className="link" to={`${url}/manageproducts`}>Manage All Products</Link>}
                    {admin && <Link className="link" to={`${url}/addAdmin`}>Make An Admin</Link>}
                    <Link to="/home" className="link" onClick={logOut}>LogOut</Link>

                </Grid>
                <Grid item xs={12} md={9} className="routes">
                    <Switch>
                        <Route exact path={path}>
                            <YourOrders></YourOrders>
                        </Route>
                        <Route exact path={`${path}/Myorders`}>
                            <YourOrders></YourOrders>
                        </Route>
                        <Route exact path={`${url}/AddReview`}>
                            <AddReview></AddReview>
                        </Route>
                        <Route exact path={`${path}/payment`}>
                            <Payment></Payment>
                        </Route>
                        <Route path={`${path}/addAdmin`}>
                            <MakeAdmin></MakeAdmin>
                        </Route>
                        <Route path={`${path}/addProduct`}>
                            <AddProduct></AddProduct>
                        </Route>
                        <Route path={`${path}/manageproducts`}>
                            <ManageProducts></ManageProducts>
                        </Route>
                        <Route path={`${path}/manageorders`}>
                            <ManageOrders></ManageOrders>
                        </Route>
                    </Switch>

                </Grid>

            </Grid>
        </div>
    );
};

export default DashBoard;
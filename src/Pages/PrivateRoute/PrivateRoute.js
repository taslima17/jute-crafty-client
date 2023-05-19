import { CircularProgress } from '@mui/material';
import React from 'react';
import { Redirect, Route, Navigate, Routes } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import ProductsDetails from '../Home/Products/ProductsDetails/ProductsDetails';


const PrivateRoute = ({ children, ...rest }) => {
    const { user, loading } = useAuth();
    if (loading) {
        return <CircularProgress color="inherit" />
    }
    if (!user.email) {
        return <Navigate to="/login" state={{ from: rest.location }} />
    }
    return children;
};

export default PrivateRoute;
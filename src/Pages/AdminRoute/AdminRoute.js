import { CircularProgress } from '@mui/material';
import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const { user, loading, admin } = useAuth();
    if (loading) {
        return <CircularProgress color="inherit" />
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                admin && user?.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default AdminRoute;
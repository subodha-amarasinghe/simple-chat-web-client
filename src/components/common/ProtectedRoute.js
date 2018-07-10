import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ loggedIn, Component, ...rest }) => {

    console.log(loggedIn, '-->')
    return (
        <Route
            {...rest}
            render={ props => (
                loggedIn?<Component {...props}/>:<Redirect to="/login" />
            )}
        />
    )
}

export default ProtectedRoute;
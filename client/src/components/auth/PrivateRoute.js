import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalState';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { isAuthenticated, loading } = useContext(GlobalContext);

    return (
        <Route
            {...rest}
            render={props =>
                !isAuthenticated && !loading ? (
                    <Redirect to='login' />
                ) : (
                    <Component {...props} />
                )
            }
        />
    );
};

export default PrivateRoute;

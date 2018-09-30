import React from 'react';
import { 
    Route, 
    Redirect 
} from 'react-router-dom';

import { isAuthenticated } from '../../utils';

export const PrivateRoute = ({ component: Component, path, ...rest }) => {
    return (
        <Route
            path={path}
            private={rest.private}
            exact={rest.exact}
            render={props =>
                isAuthenticated() ? (
                <Component {...props} />
                ) : (
                <Redirect
                    to={{
                    pathname: "/login",
                    state: { from: props.location }
                    }}
                />
                )
            }
        />
    )
};
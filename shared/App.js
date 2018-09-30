import React from 'react';
import { 
    NavLink, 
    Route, 
    Switch
} from 'react-router-dom';

import { routes } from './routes';
import { NoMatch } from './components/NoMatch';
import { PrivateRoute } from './containers/common/PrivateRoute';
import { isAuthenticated } from '../shared/utils';

export const App = (props) => {
    return (
        <div>
            <ul className="fdt-navigation">
                <li>
                    <NavLink activeStyle={{fontWeight: 'bold'}} exact to={`/`}>Home</NavLink>
                </li>
                <li>
                    <NavLink activeStyle={{fontWeight: 'bold'}} exact to={`/projects`}>Projects</NavLink>
                </li>
                {!isAuthenticated() && <li>
                    <NavLink activeStyle={{fontWeight: 'bold'}} exact to={`/login`}>Login</NavLink>
                </li>}
                {isAuthenticated() && <li>
                    <NavLink activeStyle={{fontWeight: 'bold'}} exact to={`/logout`}>Logout</NavLink>
                </li>}
            </ul>
            <Switch>
                {
                    routes.map(item => {
                        const { path, exact, component: C, ...rest } = item;
                        return rest.private ? (
                            <PrivateRoute key={path} path={path} {...item} />
                         ) : ( 
                            <Route
                                key={path}
                                path={path}
                                private={rest.private}
                                exact={exact}
                                render={(props) => (
                                    <C {...props} {...rest} />
                                )}
                            />
                        )
                    })
                }
                <Route render={(props) => <NoMatch {...props} />} />
            </Switch>
        </div>
    );
};
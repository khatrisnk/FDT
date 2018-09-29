import React from 'react';
import { 
    NavLink, 
    Route, 
    Switch,
    Redirect 
} from 'react-router-dom';

import { routes } from './routes';
import { NoMatch } from './components/NoMatch';
import { PrivateRoute } from './containers/common/PrivateRoute';

export const App = () => {
    return (
        <div>
            <ul>
                <li>
                    <NavLink activeStyle={{fontWeight: 'bold'}} to={`/`}>Home</NavLink>
                </li>
                <li>
                    <NavLink activeStyle={{fontWeight: 'bold'}} to={`/login`}>Login</NavLink>
                </li>
                <li>
                    <NavLink activeStyle={{fontWeight: 'bold'}} to={`/projects`}>Projects</NavLink>
                </li>
            </ul>
            <Switch>
                {
                    routes.map(item => {
                        const { path, exact, component: C, ...rest } = item;
                        return rest.private ? (
                            <PrivateRoute key={path} {...item} />
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
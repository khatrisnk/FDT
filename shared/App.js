import React from 'react';
import { 
    NavLink, 
    Route, 
    Switch 
} from 'react-router-dom';

import { routes } from './routes';

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
                    routes.map(({ path, exact, component: C, ...rest }) => {
                    return (
                        <Route
                        key={path}
                        path={path}
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
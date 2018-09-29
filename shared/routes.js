import { Home } from './containers/Home';
import { Login } from './containers/Login';
import { Projects } from './containers/Projects';
import { ProjectDetails } from './containers/ProjectDetails';

export const routes = [
    {
        path: '/',
        exact: true,
        component: Home,
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/projects',
        component: Projects
    },
    {
        path: '/projects/:id',
        component: ProjectDetails
    }
]
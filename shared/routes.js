import { Home } from './containers/Home';
import Login from './containers/Login';
import Logout from './containers/Logout';
import { Projects } from './containers/Projects';
import { ProjectDetails } from './containers/ProjectDetails';

export const routes = [
    {
        path: '/',
        exact: true,
        component: Home,
        private: false
    },
    {
        path: '/login',
        component: Login,
        private: false
    },
    {
        path: '/projects',
        component: Projects,
        private: true
    },
    {
        path: '/projects/:id',
        component: ProjectDetails,
        private: true
    },
    {
        path: '/logout',
        component: Logout,
        private: false
    }
]
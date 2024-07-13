import {createBrowserRouter} from 'react-router-dom'
import App from '../App'
import Login from '../pages/Login';
import Register from '../pages/Register';
import { routeGenerator } from '../utils/routesGenerator';
import { adminPaths } from './admin.routes';
import { facultyPaths } from './faculty.routes';
import { studentPaths } from './student.routes';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/admin',
        element: <App />,
        children: routeGenerator(adminPaths)
    },
    {
        path: '/faculty',
        element: <App />,
        children: routeGenerator(facultyPaths)
    },
    {
        path: '/student',
        element: <App />,
        children: routeGenerator(studentPaths)
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    }

])


export default router;
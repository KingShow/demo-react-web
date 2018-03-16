import Home from './pages/home';

export default [
    {
        path: '/',
        component: Home,
        childRoutes: [
            {
                path: '', component: '',
            }
        ],
    }
];
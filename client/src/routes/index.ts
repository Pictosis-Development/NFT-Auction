import Marketplace from '../components/views/Marketplace';
import Create from '../components/views/Create';
import Token from '../components/views/Token';
import Dashboard from '../components/views/Dashboard';

export const routes = [
    {
        path: '/marketplace',
        component: Marketplace
    },
    {
        path: '/create',
        component: Create
    },
    {
        path: '/token/:id',
        component: Token
    },
    {
        path: '/dashboard',
        component: Dashboard
    }
]
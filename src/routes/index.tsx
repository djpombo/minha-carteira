import { BrowserRouter } from 'react-router-dom';

import { useAuth } from '../Hooks/Auth';

import App from './app.routes';
import AuthRoutes from './auth.routes';



const Routes: React.FC = () => {

    const { logged } = useAuth();

    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            {
                logged ? <App /> : <AuthRoutes />
            }
        </BrowserRouter>
    )
};

export default Routes;


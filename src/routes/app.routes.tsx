import { Routes, Route } from 'react-router-dom';
import Layout from '../Components/Layout';
import Dashboard from '../Pages/Dashboard';
import List from '../Pages/List';
import SingIn from '../Pages/SingIn';

const AppRoutes: React.FC = () => (
    <Layout>
        <Routes>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/list/:type' element={<List />} />
                
        </Routes>
    </Layout>

);

export default AppRoutes;




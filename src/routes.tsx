import { Routes, Route } from 'react-router-dom';
import ProtectRoute from './components/ProtectRoutes';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ShopPage from './pages/ShopPage';

const Router = () => (
  <Routes>
    <Route path='/' element={<LoginPage />} />
    <Route path='/register' element={<RegisterPage />} />

    <Route path='/shop' element={<ProtectRoute />}>
      <Route path='/shop' element={<ShopPage />} />
    </Route>
  </Routes>
);

export default Router;

/**
 * src/routes/MainRoute.tsx
 */

import { Routes, Route } from 'react-router-dom';
import App from '@/App';
import { HomeRoute, UserRoute } from '@/routes';

const MainRoutes = () => (
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/home/*" element={<HomeRoute />} />
    <Route path="/user/*" element={<UserRoute />} />
  </Routes>
);

export default MainRoutes;

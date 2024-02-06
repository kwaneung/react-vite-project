/**
 * src/routes/MainRoute.tsx
 */

import { Routes, Route } from 'react-router-dom';
import App from '@/App';
import HomeRoute from '@routes/HomeRoute';

const MainRoutes = () => (
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/home/*" element={<HomeRoute />} />
  </Routes>
);

export default MainRoutes;

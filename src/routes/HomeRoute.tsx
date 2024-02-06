/**
 * src/routes/HomeRoute.tsx
 */

import { Routes, Route } from 'react-router-dom';
import Home from '@pages/home/Home';
import SecondHome from '@pages/home/SecondHome';
import FirstHome from '@pages/home/FirstHome';

const HomeRoute = () => (
  <Routes>
    <Route path="/" element={<Home />}>
      <Route index element={<FirstHome />} />
      <Route path="/firsthome" element={<FirstHome />} />
      <Route path="/secondhome" element={<SecondHome />} />
    </Route>
  </Routes>
);
export default HomeRoute;

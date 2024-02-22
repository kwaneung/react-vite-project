/**
 * src/routes/UserRoute.tsx
 */

import { Routes, Route } from 'react-router-dom';
import Home from '@pages/home/Home';
import SecondHome from '@pages/home/SecondHome';
import FirstHome from '@pages/home/FirstHome';
import HomeUser from '@pages/home/HomeUser';

const UserRoute = () => (
  <Routes>
    <Route path="/" element={<Home />}>
      <Route index element={<FirstHome />} />
      <Route path="firsthome" element={<FirstHome />} />
      <Route path="secondhome" element={<SecondHome />} />
    </Route>
    <Route path="/homeuser" element={<HomeUser />} />
  </Routes>
);
export default UserRoute;

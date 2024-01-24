/**
 * src/routes/index.tsx
 */

import { Routes, Route } from 'react-router-dom';
import Home from '@pages/home/Home';
import SecondHome from '@pages/home/SecondHome';

const AppRouter = () => (
  <Routes>
    <Route index element={<Home />}></Route>
    <Route path="/home" element={<Home />} />
    <Route path="/secondhome" element={<SecondHome />} />
  </Routes>
);

export default AppRouter;

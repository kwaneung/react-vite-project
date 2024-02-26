/**
 * src/routes/UserRoute.tsx
 */

import { Routes, Route } from 'react-router-dom';
import UserHome from '@pages/user/UserHome';

const UserRoute = () => (
  <Routes>
    <Route path="/" element={<UserHome />}>
      {/* 여기에는 select, update, insert, delete 컴포넌트 넣어 */}
    </Route>
  </Routes>
);
export default UserRoute;

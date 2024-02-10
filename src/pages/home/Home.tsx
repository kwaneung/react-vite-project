/**
 * src/pages/home/Home.tsx
 */

import { Link, Outlet, useNavigate } from 'react-router-dom';

const Home = () => {
  console.log('Home component!!!');
  const navigate = useNavigate();

  const goToFirstHome = () => {
    navigate('/home/firsthome');
  };
  return (
    <>
      <h1>Home Component</h1>

      <Link to="/home/firsthome">
        <button>go to firsthome</button>
      </Link>
      <Link to="/home/secondhome">
        <button>go to secondhome</button>
      </Link>

      <button onClick={goToFirstHome}>Go to First Home</button>

      <Outlet />
    </>
  );
};

export default Home;

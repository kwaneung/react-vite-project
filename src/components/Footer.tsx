/**
 * src/components/Footer.tsx
 */
import { Link } from 'react-router-dom';

const Footer = () => (
  <div
    style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
      backgroundColor: '#f0f0f0',
      padding: '10px',
      textAlign: 'center',
    }}
  >
    <Link to="/">
      <button style={{ marginRight: '10px' }}>go main</button>
    </Link>
    <Link to="/home">
      <button style={{ marginRight: '10px' }}>go home</button>
    </Link>
    <Link to="/user">
      <button style={{ marginRight: '10px' }}>go user</button>
    </Link>
  </div>
);

export default Footer;

/**
 * src/components/Footer.tsx
 */

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
    <button style={{ marginRight: '10px' }}>Button 1</button>
    <button style={{ marginRight: '10px' }}>Button 2</button>
    <button style={{ marginRight: '10px' }}>Button 3</button>
    <button>Button 4</button>
  </div>
);

export default Footer;

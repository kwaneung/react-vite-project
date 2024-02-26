import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import MainRoutes from '@routes/MainRoute';
import Footer from '@components/Footer';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <MainRoutes />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
);

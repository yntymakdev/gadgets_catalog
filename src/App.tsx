import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { Footer } from './components/Footer/Footer';

import './scss/global.scss';

import { MainHeader } from './components/MainHeader';
import { MainLayout } from './layouts/MainLayout';

export const App = () => {
  return (
    <div className="app">
      <MainHeader />

      <MainLayout>
        <Outlet />
      </MainLayout>

      <ToastContainer />
      <Footer />
    </div>
  );
};

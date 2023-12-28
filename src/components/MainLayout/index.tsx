import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = (): JSX.Element => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

export default MainLayout;

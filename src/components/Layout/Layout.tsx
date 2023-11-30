import React from 'react';
import style from './Layout.module.css';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <header className={style.container}>
        <Header />
      </header>
      <main className={style.wrapper}>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;

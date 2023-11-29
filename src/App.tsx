import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import FormUN from './components/FormUn/FormUn';
import FormHook from './components/FormHook/FormHook';
import Error from './components/pages/Error/Error';
// import style from './App.module.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/formun" element={<FormUN />} />
      <Route path="/formhok" element={<FormHook />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;

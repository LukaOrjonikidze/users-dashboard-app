import React from 'react';
import classes from "./modules/App.module.css";
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route path="/users/:userId" element={<UserPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
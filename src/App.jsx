import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Stats from './pages/stats/Stats';
import { BookProvider } from './context/bookContext';
import Header from './component/header/Header';

const App = () => {
  return (
    <BookProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stats" element={<Stats />} />
      </Routes>
    </BookProvider>
  );
};

export default App;
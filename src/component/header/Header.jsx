import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

// tampilan header pada halaman web
const Header = () => {
  return (
    <header className="header">
      <h1>BookVentory</h1>
      <nav>
        <Link to="/">Beranda</Link>
        <Link to="/stats">Statistik</Link>
      </nav>
    </header>
  );
};

export default Header;
// /src/components/Header.jsx
import React, { useState } from 'react';
import './header.css'; // Importa los estilos

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-content">
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <a href="/">Home</a>
          <a href="/english">English</a>
          <a href="/french">French</a>
          <a href="/chinese">Chinese</a>
          <a href="/german">German</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

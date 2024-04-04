import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        {/* Your website logo or name */}
        <img src="/logo.png" alt="Website Logo" />
        <h1>Your Health Hub</h1>
      </div>
      <nav className="header__nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/articles">Articles</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

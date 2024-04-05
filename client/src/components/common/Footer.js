import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__logo">
          {/* Your website logo or name */}
          <img src="/logo.png" alt="Website Logo" />
          <h2>Your Health Hub</h2>
        </div>
        <div className="footer__links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Our Services</a></li>
            <li><a href="/articles">Articles</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer__contact">
          <h3>Contact Us</h3>
          <p>
            123 Health Street<br />
            Medical City, MD 12345<br />
            Phone: 123-456-7890<br />
            Email: info@yourhealthhub.com
          </p>
        </div>
      </div>
      <div className="footer__bottom">
        <p>&copy; {new Date().getFullYear()} Your Health Hub. All rights reserved.</p>
        <div className="footer__social">
          {/* Links to your social media profiles */}
          <a href="https://facebook.com"><i className="fab fa-facebook-f"></i></a>
          <a href="https://twitter.com"><i className="fab fa-twitter"></i></a>
          <a href="https://instagram.com"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

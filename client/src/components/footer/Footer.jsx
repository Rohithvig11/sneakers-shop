import React from 'react';

const Footer = () => {
  return (
    <footer
      className="footer"
      style={{ backgroundColor: '#444', color: '#f1f1f1' }}
    >
      <div className="content has-text-centered">
        <p>
          <strong style={{ color: '#f1f1f1' }}>
            Shopping Cart <em>Sneaker Heads </em>
          </strong>
          by
          <a href="https://github.com/Rohithvig11"> Rohith vigneshwar</a>. &copy;
          {new Date().getFullYear()}.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

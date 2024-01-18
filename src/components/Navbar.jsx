import React from 'react';
import CartWidget from './CartWidget';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-0">
      <div className="container">
        <a className="navbar-brand" href="#">Star Wars Store</a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#">Categoría 1</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Categoría 2</a></li>
          </ul>
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

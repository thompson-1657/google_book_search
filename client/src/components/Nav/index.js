import React from "react";
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Google Books
      </a>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link active" aria-current="page" href="#">Search</Link>
        </li>
        <li className="nav-item">
          <Link to="/saved" className="nav-link" href="#">Saved</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
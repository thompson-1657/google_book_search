import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Google Books
      </a>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Search</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Saved</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = ({ currentUser, logout }) => {
  const userInfo = currentUser ? (
    <div className="user-info">
      <p> {currentUser.username} </p>
      <button onClick={logout} className="nav-button">Logout</button>
    </div>
  ) : (
    <div className="user-info">
      <NavLink to="/login" className="nav-button"> Log In </NavLink>
      <NavLink to="/signup" className="nav-button"> Sign Up </NavLink>
    </div>
  );

  return (
    <header className="header">
      <h1 className="logo">Graph Share</h1>
      { userInfo }
    </header>
  );
};

export default Header;

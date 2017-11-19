import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = ({ currentUser, logout }) => {
  const userInfo = currentUser ? (
    <div className="user-info">
      <p> Username </p>
      <button onClick={logout}>Logout</button>
    </div>
  ) : (
    <div className="user-info">
      <NavLink to="/login"> Log In </NavLink>
      <NavLink to="/signup"> Sign Up </NavLink>
    </div>
  );

  return (
    <header className="header">
      <h1>Graph Share</h1>
      { userInfo }
    </header>
  );
};

export default Header;

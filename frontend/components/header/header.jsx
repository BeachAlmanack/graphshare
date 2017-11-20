import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = ({ currentUser, logout, clearErrors }) => {
  const userInfo = currentUser ? (
    <div className="user-info">
      <p> {currentUser.username} </p>
      <button onClick={logout} className="nav-button">Logout</button>
    </div>
  ) : (
    <div className="user-info">
      <NavLink to="/login" className="nav-button" onClick={clearErrors}> Log In </NavLink>
      <NavLink to="/signup" className="nav-button" onClick={clearErrors}> Sign Up </NavLink>
    </div>
  );

  return (
    <div className="header-container">
      <header className="header">
        <NavLink to="/" className="logo" />
        { userInfo }
      </header>
    </div>
  );
};

export default Header;

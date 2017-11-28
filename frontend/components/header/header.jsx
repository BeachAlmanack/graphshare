import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = ({ currentUser, logout, clearErrors }) => {
  const userInfo = currentUser ? (
    <div className="header-right">
      <div className="nav-links">
        <NavLink to={`/feed`} className="nav-link">Feed</NavLink>
        <NavLink to={`/charts`} className="nav-link">Charts</NavLink>
        <NavLink to={`/datasets`} className="nav-link">Datasets</NavLink>
      </div>
      <div className="user-info">
        <NavLink to={`/users/${currentUser.id}`} className="nav-link">{currentUser.username}</NavLink>
        <button onClick={logout} className="nav-button">Logout</button>
      </div>
    </div>
  ) : (
    <div className="user-info">
      <NavLink to="/login" className="nav-link" onClick={clearErrors}> Log In </NavLink>
      <NavLink to="/signup" className="nav-link" onClick={clearErrors}> Sign Up </NavLink>
    </div>
  );

  return (
    <div className="header-container">
      <header className="header">
        <NavLink to="/" className="logo"><span className="orange">Graph</span><span className="blue">Share</span></NavLink>
        { userInfo }
      </header>
    </div>
  );
};

export default Header;

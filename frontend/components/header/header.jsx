import React from 'react';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shown: false,
    };
    this.onHamburgerClick = this.onHamburgerClick.bind(this);
    this.hideMenu = this.hideMenu.bind(this);
  }

  componentDidMount() {
    this.hideMenu();
  }

  onHamburgerClick(event) {
    event.preventDefault();
    this.setState({
      shown: !this.state.shown,
    });
  }

  hideMenu() {
    this.setState({
      shown: false,
    });
  }

  render() {
    const { currentUser, logout, clearErrors } = this.props;
    const userInfo = currentUser ? (
      <div className={`header-right ${this.state.shown ? 'shown' : ''}`}>
        <div className="nav-links">
          <NavLink to={`/feed`} className="nav-link" onClick={this.hideMenu}>Feed</NavLink>
          <NavLink to={`/charts`} className="nav-link" onClick={this.hideMenu}>Charts</NavLink>
          <NavLink to={`/datasets`} className="nav-link" onClick={this.hideMenu}>Datasets</NavLink>
        </div>
        <div className="user-info">
          <NavLink to={`/users/${currentUser.id}`} className="nav-link user-nav-link" onClick={this.hideMenu}>
            <img src={currentUser.avatar_url} className="user-avatar" alt="user avatar" />
            <p>{currentUser.username}</p></NavLink>
          <button onClick={logout} className="nav-button">Logout</button>
        </div>
      </div>
    ) : (
        <div className={`header-right ${this.state.shown ? 'shown' : ''}`}>
          <div className="user-info">
              <NavLink to="/login" className="nav-link" onClick={clearErrors} onClick={this.hideMenu}> Log In </NavLink>
              <NavLink to="/signup" className="nav-link" onClick={clearErrors} onClick={this.hideMenu}> Sign Up </NavLink>
          </div>
        </div>
    );
    return (
      <div className="header-container">
        <header className="header">
          <div className="logo-menu">
            <NavLink to="/" className="logo"><span className="orange" onClick={this.hideMenu}>Graph</span><span className="blue">Share</span></NavLink>
            <button className="hamburger" onClick={this.onHamburgerClick}><i className="fa fa-bars" aria-hidden="true" /></button>
          </div>
          {userInfo}
        </header>
      </div>
    );
  }
};

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
  }

  handleChange(type) {
    return (event) => {
      this.setState({
        [type]: event.target.value,
      });
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.login(this.state);
  }

  handleDemoLogin(event) {
    event.preventDefault();
    this.props.login({
      username: 'demo',
      password: 'password',
    });
  }

  render() {
    return (
      <div className="login-page">
        <div className="form-container">
          <form className="form">
            <h2 className="form-title">Log In</h2>
            <label htmlFor="username"> Username:
              <input
                id="username"
                type="text"
                value={this.state.username}
                onChange={this.handleChange('username')}
                placeholder="username"
              />
            </label>
            <label htmlFor="password"> Password:
              <input
                id="password"
                type="password"
                value={this.state.password}
                onChange={this.handleChange('password')}
                placeholder="password"
              />
            </label>
            <button onClick={this.handleSubmit} className="form-button">Log In</button>
            <hr />
            <label>New to GraphShare?</label>
            <button onClick={this.handleDemoLogin} className="form-button-outline">Demo Log In</button>
            <Link to="/signup" className="form-button-outline">Sign Up</Link>
          </form>
          {
            (this.props.errors.length > 0) ? (
              <ul className="form-errors">
                <li> Could not Log In! </li>
                {this.props.errors.map(error => <li key={error}>{error}</li>)}
              </ul>) : ''
          }
        </div>
      </div>
    );
  }
}

export default Login;

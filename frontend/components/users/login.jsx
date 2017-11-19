import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

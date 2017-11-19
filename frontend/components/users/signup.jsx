import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      email: '',
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
    this.props.signup(this.state).then(() => this.props.history.push('/'));
  }

  render() {
    return (
      <div className="signup-page">
        <ul className="errors">
          {this.props.errors.map(error => <li key={error}>{error}</li>)}
        </ul>
        <form className="login-form">
          <label htmlFor="username"> Username:
            <input id="username" type="text" value={this.state.username} onChange={this.handleChange('username')} />
          </label>
          <label htmlFor="email"> Email:
            <input id="email" type="text" value={this.state.email} onChange={this.handleChange('email')} />
          </label>
          <label htmlFor="password"> Password:
            <input id="password" type="password" value={this.state.password} onChange={this.handleChange('password')} />
          </label>
          <button onClick={this.handleSubmit}>Log In</button>
        </form>
      </div>
    );
  }
}

export default Signup;

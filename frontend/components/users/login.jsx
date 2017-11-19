import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
    console.log(props.errors);
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
    this.props.login(this.state).then(() => this.props.history.push('/'));
  }

  render() {
    return (
      <div className="form-page">
        <ul className="errors">
          { this.props.errors.map(error => <li key={error}>{ error }</li>) }
        </ul>
        <form className="login-form">
          <label htmlFor="username"> Username:
            <input id="username" type="text" value={this.state.username} onChange={this.handleChange('username')} />
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

export default Login;

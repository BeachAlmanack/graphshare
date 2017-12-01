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
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
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
    this.props.signup(this.state);
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
      <div className="signup-page">
        
       
        <div className="form-container">
          <form className="form">
            <h2 className="form-title">Sign Up</h2>
            <label htmlFor="username"> Username:
              <input
                id="username"
                type="text"
                value={this.state.username}
                onChange={this.handleChange('username')}
                placeholder="username"
              />
            </label>
            <label htmlFor="email"> Email:
              <input
                id="email"
                type="text"
                value={this.state.email}
                onChange={this.handleChange('email')}
                placeholder="email"
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
            <button onClick={this.handleSubmit} className="form-button">Sign Up!</button>
            <hr />
            <label>Want to test the website?</label>
            <button onClick={this.handleDemoLogin} className="form-button-outline">Demo Log In</button>
          </form>
          {
            (this.props.errors.length > 0) ? (
              <ul className="form-errors">
                <li> Could not Sign Up! </li>
                {this.props.errors.map(error => <li key={error}>{error}</li>)}
              </ul>) : ''
          }
        </div>
      </div>
    );
  }
}

export default Signup;

import React, { Component } from 'react';

class Auth extends Component {

  state = {
    name: '',
    email: '',
    password: '',
    matchingPassword: ''
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { target: { elements } } = event;
    const { name, email, password, matchingPassword } = elements;
    console.log(
      name.value,
      email.value,
      password.value,
      matchingPassword.value
    );
    this.setState({ 
      name: '',
      email: '',
      password: '',
      matchingPassword: ''
    });
  };

  render() {
    const {
      name,
      email,
      password,
      matchingPassword
    } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:&nbsp;
          <input 
            required
            value={name}
            name="name"
            onChange={this.handleChange}
          >
          </input>
        </label>
        <br/>
        <label>
          Email:&nbsp;
          <input 
            required
            value={email}
            name="email"
            onChange={this.handleChange}
          >
          </input>
        </label>
        <br/>
        <label>
          Password:&nbsp;
          <input 
            required
            value={password} 
            name="password" 
            type="password"
            onChange={this.handleChange}
          >
          </input>
        </label>
        <br/>
        <label>
          Retype Password:&nbsp;
          <input 
            required 
            value={matchingPassword}
            name="matchingPassword" 
            type="password"
            onChange={this.handleChange}
          >
          </input>
        </label>
        <br/>
        <button type="submit">Sign Up</button>
      </form>
    );
  }
}

export default Auth;
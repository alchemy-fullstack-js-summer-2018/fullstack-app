import React, { Component } from 'react';

class Auth extends Component {

  render() {
    return (
      <form>
        <label>
          Email:&nbsp;
          <input required name="email"></input>
        </label>
        <br/>
        <label>
          Password:&nbsp;
          <input required name="password" type="password"></input>
        </label>
        <br/>
        <label>
          Retype Password:&nbsp;
          <input required name="password" type="password"></input>
        </label>
        <br/>
        <button type="submit">Sign Up</button>
      </form>
    );
  }
}

export default Auth;
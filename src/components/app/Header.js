import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUser } from '../auth/reducers';
import { logout } from '../auth/actions';
import { NavLink } from 'react-router-dom';
import Error from './Error';
import styles from './Header.css';

class Header extends Component {

  static propTypes = {
    user: PropTypes.object,
    logout: PropTypes.func.isRequired
  };

 

  render() { 
    const { user, logout } = this.props;

    return (
      <div className={styles.header}>
        <section>
          <div>
            <h1>GORTS</h1>
          </div>
          <nav>
            <ul>
              <li>
                <NavLink exact to="/">Home</NavLink>
              </li>
              <li>
                <NavLink exact to="/leaderboard">Leaderboard</NavLink>
              </li>
              <li>
                <NavLink exact to="/players">Players</NavLink>
              </li>
              <li>
                { user
                  ? <NavLink to="/" onClick={logout}>Logout</NavLink>
                  : <NavLink to="/auth">Login</NavLink>
                }
              </li>
            </ul>
          </nav>
          {user && <span>Logged in as {user.profile.name}</span>}
        </section>

        <Error/>
      </div>
    );
  }
}
 
export default connect(
  state => ({ user: getUser(state) }),
  { logout }
)(Header);
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signin, signup } from './actions';
import { getUser } from './reducers';
import Credentials from './Credentials';

class Auth extends PureComponent {
  
  static propTypes = {
    user: PropTypes.object,
    signin: PropTypes.func.isRequired,
    signup: PropTypes.func.isRequired,
    location: PropTypes.object
  };

  render() { 
    const { user, signin, signup, location } = this.props;
    console.log('SIGNUP', signup)
    console.log(location);
    console.log('user', user);
    const redirect = location.state ? location.state.from : '/';
    console.log('redirect is', redirect);
    if(user) return <Redirect to={redirect}/>;

    return (
      // <section>
      //   <Switch>
      //     <Route path="/auth/signin" component={() => (
      //       <div>
      //         <p>Not a user? <Link to="/auth/signup">Sign Up</Link></p>
      //         <Credentials action="Sign In" submit={signin}/>
      //       </div>
      //     )}/>
      //     <Route path="/auth/signup" render={() => (
            // <div>
            //   <p>Already have an account?<Link to="/auth/signin">Sign In</Link></p>
            //   <Credentials action="Sign Up" submit={signup} allowName={true}/>
            // </div>
      //     )}/>
      //     <Redirect to="/auth/signin"/>
      //   </Switch>
      // </section>
      <section>
        <div>
          <p>Already have an account?<Link to="/auth/signin">Sign In</Link></p>
          <Credentials action="Sign Up" submit={signup} allowName={true}/>
        </div>
      </section>
    );
  }
}
 
export default connect(
  state => ({
    user: getUser(state)
  }),
  { signup, signin }
)(Auth);
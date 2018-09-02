import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Credentials extends PureComponent {
  state = { 
    name: '',
    email: '',
    password: ''
  };

  static propTypes = {
    submit: PropTypes.func.inRequired,
    action: PropTypes.string.isRequired,
    allowName: PropTypes.bool
  };

  render() { 
    return (
      <form onSubmit={this.handleSubmit}>
        
      </form>
    );
  }
}
 
export default Credentials;
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import FormControl from '../shared/FormControl';

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
    const { action, allowName = false } = this.props;
    const { name, email, password } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        { allowName &&
          <FormControl label="name">
            <input name="name" value={name} onChange={this.handleChange}/>
          </FormControl>
        }
        <FormControl label="email">
          <input name="email" value={email} onChange={this.handleChange}/>
        </FormControl>
        <FormControl label="password">
          <input name="password" type="password" value={password} onChange={this.handleChange}/>
        </FormControl>

        <FormControl label="password">
          <button>{action}</button>
        </FormControl>
      </form>
    );
  }
}
 
export default Credentials;
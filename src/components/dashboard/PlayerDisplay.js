import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class PlayerDisplay extends PureComponent {
  state = { 
    editing: false
  };

  static propTypes = {
    profile: PropTypes.object.isRequired
  };

  render() { 

    const { name, location, avatar } = this.props;

    return ( 
      <section>
        <h1>player</h1>
      </section>
    );
  }
}
 
export default PlayerDisplay;
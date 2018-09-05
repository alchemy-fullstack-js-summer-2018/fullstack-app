import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { loadAlbums } from './actions';
import Album from './Album';
import AddAlbum from './AddAlbum';

class Albums extends PureComponent {

  componentDidMount() {
    this.props.loadAlbums();
  }

  render() {
    const { albums } = this.props;
    if(!albums) return null;

    return (
      <Fragment>
        <h2>Albums</h2>
        <ul>
          {albums.map(album => <Album key={album._id} {...album}/>)}
        </ul>
        <AddAlbum/>
      </Fragment>
    );
  }
}



export default connect(
  ({ albums }) => ({ albums }),
  { loadAlbums }
)(Albums);
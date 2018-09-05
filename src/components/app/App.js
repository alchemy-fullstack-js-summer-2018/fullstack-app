import React, { PureComponent, Fragment } from 'react';
import { 
  BrowserRouter as Router, 
  Switch, Route, Redirect,
  Link } from 'react-router-dom';
import Header from './Header';
import Albums from '../albums/Albums';
import AlbumDetail from '../albums/AlbumDetail';


export default class App extends PureComponent {

  render() {
    return (
      <Router>
        <div>
          <Header/>
          <main>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/albums" component={Albums}/>
              <Route path="/albums/:id" component={AlbumDetail}/>
              <Redirect to="/"/>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

class Home extends PureComponent {
  render() {
    return (
      <Fragment>
        <h2>Home Page</h2>
        <p>This is a placeholder for Home!</p>
        <Link to="/albums">View Albums</Link>
      </Fragment>
    );
  }
}

import './App.css';
import React, { Component } from 'react';

import Homepage from "./page/Homepage/homepage";
import { Route } from 'react-router-dom';
import Shop from './page/Shop/shop';
import Header from './component/header/header';
import SignIn from './page/signIn/signIn';
import { auth } from './firebase/firebase-utility'

class App extends React.Component {
  state = {
    currentUser: null
  }

  unSubscribeFromAuth = null;
  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(this.state.currentUser);
      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/login" component={SignIn} />
        </switch>
      </div>
    )
  }
}


export default App;

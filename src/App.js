import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import ESPN from './components/espn/Espn'
import Navbar from './components/Navbar';
import { Route } from 'react-router-dom';
import CNN from './components/cnn/Cnn';
import Buzzfeed from './components/buzzfeed/Buzzfeed';
import Custom from './components/Custom';
import Login from './components/Login';
// import SignUp from './components/SignUp';
import Profile from './components/Profile';
import { app } from './base';
import { Dimmer, Loader, Segment } from 'semantic-ui-react';
import Logout from './components/Logout';

class App extends Component {
  constructor() {
    super()

    this.state = {
      currentUser: null,
      authenticated: false,
      loading: true
    }
  }

  componentWillMount() {
    this.removeAuthListener = app.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ 
          authenticated: true,
          currentUser: user,
          loading: false
        })
      } else {
        this.setState({ 
          authenticated: false,
          loading: false
       })
      }
    })
  }

  componentWillUnmount() {
    this.removeAuthListener();
  }

  setCurrentUser = (user) => {
    if (user) {
      this.setState({
        currentUser: user,
        authenticated: true
      })
    } else {
      this.setState({
        currentUser: null,
        authenticated: false
      })
    }
  }

  render() {
    if (this.state.loading === true) {
      return (
        <Segment>
          <Dimmer active>
            <Loader>Loading</Loader>
          </Dimmer>
        </Segment>
      )
    }

    console.log("user in App", this.state.currentUser)

    return (
      <div>
        <Navbar authenticated={this.state.authenticated} currentUser={this.state.currentUser} />
        <Route exact path='/' component={Home} />
        <Route exact path='/espn' render={() => <ESPN espn={this.state.espn} />}/>
        <Route exact path='/cnn' render={() => <CNN cnn={this.state.cnn} />} /> 
        <Route exact path='/buzzfeed' component={Buzzfeed} />
        <Route exact path='/other' render={() => <Custom /> }/>
        <Route exact path='/login' render={() => <Login setCurrentUser={this.setCurrentUser} /> } />
        <Route exact path='/logout' component={Logout} />

        <Route exact path='/profile' render={() => <Profile user={this.state.currentUser} />} />
      </div>
    );
  }
}
        // <Route exact path='/signup' render={() => <SignUp signUpUser={this.signUpUser} />} /> 

export default App;

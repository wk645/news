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
import SignUp from './components/SignUp';
import Profile from './components/Profile';
import { app } from './base';
import { Dimmer, Loader, Segment } from 'semantic-ui-react';
import Logout from './components/Logout';

class App extends Component {
  constructor() {
    super()

    this.state = {
      espn: [],
      cnn: [],
      buzzfeed: [],
      news: [],
      currentUser: {},
      authenticated: false,
      loading: true
    }
  }

  componentDidMount() {
    // this.fetchEspn();
    // this.fetchCNN();
    // this.fetchBuzzFeed();
  }

  componentWillMount() {
    this.removeAuthListener = app.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ 
          authenticated: true,
          currentUser: user.displayName,
          loading: false
        })
        console.log(user)
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

  fetchEspn() {
    fetch('https://newsapi.org/v1/articles?source=espn&sortBy=top&apiKey=6c3c0586700d42f186c867bfd45f05e1')
    .then(res => res.json())
    .then(data => this.setState({ espn: data.articles })
  )}

  fetchCNN() {
    fetch('https://newsapi.org/v1/articles?source=cnn&sortBy=top&apiKey=6c3c0586700d42f186c867bfd45f05e1')
    .then(res => res.json())
    .then(data => this.setState({ cnn: data.articles }))
  }

  fetchBuzzFeed() {
    fetch('https://newsapi.org/v1/articles?source=buzzfeed&sortBy=top&apiKey=6c3c0586700d42f186c867bfd45f05e1')
    .then(res => res.json())
    .then(data => this.setState({ buzzfeed: data.articles }))
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

    return (
      <div>
        <Navbar authenticated={this.state.authenticated} currentUser={this.state.currentUser} />
        <Route exact path='/' component={Home} />
        <Route exact path='/espn' render={() => <ESPN espn={this.state.espn} />}/>
        <Route exact path='/cnn' render={() => <CNN cnn={this.state.cnn} />} /> 
        <Route exact path='/buzzfeed' render={() => <Buzzfeed buzzfeed={this.state.buzzfeed} />} />
        <Route exact path='/other' render={() => <Custom /> }/>
        <Route exact path='/login' component={Login} />
        <Route exact path='/logout' component={Logout} />

        <Route exact path='/signup' render={() => <SignUp signUpUser={this.signUpUser} />} /> 
        <Route exact path='/profile' render={() => <Profile user={this.state.currentUser} />} />
      </div>
    );
  }
}

export default App;

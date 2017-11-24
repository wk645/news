import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import ESPN from './components/espn/Espn'
import Navbar from './components/Navbar';
import { Route } from 'react-router-dom';
import CNN from './components/cnn/Cnn';
import Buzzfeed from './components/buzzfeed/Buzzfeed';
import Custom from './components/Custom';
// import Auth from './adapters/Auth';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Profile from './components/Profile';
import { app } from './base';

class App extends Component {
  constructor() {
    super()

    this.state = {
      espn: [],
      cnn: [],
      buzzfeed: [],
      news: [],
      currentUser: {},
      authenticated: false
    }
  }

  componentDidMount() {
    // this.checkUser();
    // this.fetchEspn();
    // this.fetchCNN();
    // this.fetchBuzzFeed();
  }

  componentWillMount() {
    this.removeAuthListener = app.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ 
          authenticated: true,
          currentUser: user.displayName
        })
      } else {
        this.setState({ authenticated: false })
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

  // signUpUser = (userParams) => {
  //   return Auth.signup(userParams)
  //   .then(res => {
  //     if (res.success) {
  //       localStorage.setItem('jwt', res.jwt)
  //       this.setState({ currentUser: res.user })
  //     } else {
  //       return res
  //     }
  //   })
  // }

  // loginUser = (userParams) => {
  //   return Auth.login(userParams)
  //   .then(res => {
  //     if (res.message) {
  //       return res
  //     } else {
  //       localStorage.setItem('jwt', res.jwt)
  //       this.setState({ currentUser: res.user })
  //     }
  //   })
  // }

  // checkLoggedIn = (target) => {
  //   return localStorage.getItem('jwt') ? (
  //     <Redirect to='/' />
  //     ) : ( 
  //     target
  //    )
  // }

  render() {

    // console.log("object in app", this.state.currentUser)
    // console.log("jwt token in app", localStorage.getItem('jwt'))
    
    return (
      <div>
        <Navbar authenticated={this.state.authenticated} currentUser={this.state.currentUser} />
        <Route exact path='/' component={Home} />
        <Route exact path='/espn' render={() => <ESPN espn={this.state.espn} />}/>
        <Route exact path='/cnn' render={() => <CNN cnn={this.state.cnn} />} /> 
        <Route exact path='/buzzfeed' render={() => <Buzzfeed buzzfeed={this.state.buzzfeed} />} />
        <Route exact path='/other' render={() => <Custom /> }/>
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' render={() => <SignUp signUpUser={this.signUpUser} />} /> 
        <Route exact path='/profile' render={() => <Profile user={this.state.currentUser} />} />
      </div>
    );
  }
}

export default App;

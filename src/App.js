import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import ESPN from './components/espn/Espn'
import Navbar from './components/Navbar';
import { Route, Redirect } from 'react-router-dom';
import CNN from './components/cnn/Cnn';
import Buzzfeed from './components/buzzfeed/Buzzfeed';
import Custom from './components/Custom';
import Auth from './adapters/Auth';
import Login from './components/Login';
import SignUp from './components/SignUp';

class App extends Component {
  constructor() {
    super()

    this.state = {
      espn: [],
      cnn: [],
      buzzfeed: [],
      news: [],
      currentUser: {}
    }
  }

  componentDidMount() {
    this.checkUser();
    this.fetchEspn();
    this.fetchCNN();
    this.fetchBuzzFeed();
  }

  checkUser() {
    if (localStorage.getItem('jwt')) {
      return Auth.userInfo()
      .then(json => this.setState({ currentUser: json.user }))
    }
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

  signUpUser = (userParams) => {
    return Auth.signup(userParams)
    .then(res => {
      if (res.success) {
        localStorage.setItem('jwt', res.jwt)
        this.setState({ currentUser: res.user })
      } else {
        return res
      }
    })
  }

  loginUser = (userParams) => {
    return Auth.login(userParams)
    .then(res => {
      if (res.message) {
        return res
      } else {
        localStorage.setItem('jwt', res.jwt)
        this.setState({ currentUser: res.user })
      }
    })
  }

  checkLoggedIn = (target) => {
    return localStorage.getItem('jwt') ? (<Redirect to='/' />) : ( 
      target
     )
  }

  render() {
    return (
      <div>
        <Navbar currentUser={this.state.currentUser} />
        <Route exact path='/' component={Home} />
        <Route exact path='/espn' render={() => <ESPN espn={this.state.espn} />}/>
        <Route exact path='/cnn' render={() => <CNN cnn={this.state.cnn} />} /> 
        <Route exact path='/buzzfeed' render={() => <Buzzfeed buzzfeed={this.state.buzzfeed} />} />
        <Route exact path='/other' render={() => <Custom /> }/>
        <Route exact path='/login' render={() => this.checkLoggedIn(<Login loginUser={this.loginUser} />)} />
        <Route exact path='/signup' render={() => this.checkLoggedIn(<SignUp signUpUser={this.signUpUser} />)} /> 
      </div>
    );
  }
}

export default App;

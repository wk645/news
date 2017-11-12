import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import ESPN from './components/espn/Espn'
import Navbar from './components/Navbar';
import { Route } from 'react-router-dom';
import CNN from './components/cnn/Cnn';
import Buzzfeed from './components/buzzfeed/Buzzfeed';
import Custom from './components/Custom';

class App extends Component {
  constructor() {
    super()

    this.state = {
      espn: [],
      cnn: [],
      buzzfeed: [],
      news: []
    }
  }

  componentDidMount() {
    this.fetchEspn();
    this.fetchCNN();
    this.fetchBuzzFeed();
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
    return (
      <div>
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route exact path='/espn' render={() => <ESPN espn={this.state.espn} />}/>
        <Route exact path='/cnn' render={() => <CNN cnn={this.state.cnn} />} /> 
        <Route exact path='/buzzfeed' render={() => <Buzzfeed buzzfeed={this.state.buzzfeed} />} />
        <Route exact path='/other' render={() => <Custom /> }/>
      </div>
    );
  }
}

export default App;

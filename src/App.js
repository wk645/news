import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import ESPN from './components/Espn'

class App extends Component {
  constructor() {
    super()

    this.state = {
      news: []
    }
  }

  componentDidMount() {
    this.fetchEspn()
  }

  fetchEspn() {
    fetch('https://newsapi.org/v1/articles?source=espn&sortBy=top&apiKey=6c3c0586700d42f186c867bfd45f05e1')
    .then(res => res.json())
    .then(data => this.setState({ news: data.articles })
  )}

  render() {
    return (
      <div>
        <Home />
        <ESPN news={this.state.news} />
      </div>
    );
  }
}

export default App;

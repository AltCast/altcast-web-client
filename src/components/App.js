import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Header from './Header';
import ExchangeGroup from './ExchangeGroup';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {ticks: []};
    this.parseData = this.parseData.bind(this);
  }

  parseData(data) {
    const exchanges = Object.keys(data);

    let ticks = exchanges.map(key => {
      return {
        exchange: key,
        ticks: data[key]
      };
    });

    return ticks;
  }

  componentDidMount() {
    axios.get('http://localhost:4000/')
      .then(result => {
        this.setState({ticks: this.parseData(result.data)});
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { ticks } = this.state;

    return (
      <div className="App">
        <Header />
        <ExchangeGroup ticks={ticks} />
      </div>
    );
  }
}

export default App;

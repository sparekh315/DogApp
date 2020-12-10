
import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import aurora from './images/aurora.jpg';
import newman from './images/newman.jpg';
import hammy from './images/hammy.jpg';

class App extends Component {
  static defaultProps = {
    dogs: [
      {
        name: 'Aurora',
        age: 1,
        src: aurora, 
        facts: [
          'Aurora loves eating popcorn',
          'Aurora is a terrible gaurd dog',
          'Aurora wants to cuddle with you!'
        ] 
      },
      {
        name: 'Newman',
        age: 1,
        src: newman, 
        facts: [
          'Newman has soooo much energy!',
          'Newman is highly intelligent',
          'Newman loves people more than dogs.'
        ] 
      },
      {
        name: 'Hammy',
        age: 1,
        src: hammy, 
        facts: [
          'Hammy is not the brightest dog',
          'Hammy does not like walks or excercise',
          'Hammy loves eating food'
        ] 
      }
    ]
  }
  render() {
  return (
    <div className="App">
    <Route path='/dogs' render={() => <h1>Dog List!</h1>} />
    </div>
  );
  }
}

export default App;

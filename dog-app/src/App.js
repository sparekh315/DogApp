
import React, { Component } from 'react';
import DogList from './Components/DogList';
import DogDetails from './Components/DogDetails';
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
    const getDoggo = props => {
      let name = props.match.params.name;
      let currentDoggo = this.props.dogs.find(
        dog => dog.name.toLowerCase() === name.toLowerCase()
      );
      return <DogDetails {...props} dog={currentDoggo}/>
    }
  return (
    <div className="App">
      { /* this.props.dogs comes the default props above */ }
      <Switch>
        <Route exact path='/dogs' render={() => <DogList dogs={this.props.dogs}/>} />
        <Route exact path='/dogs/:name' render={getDoggo} />
      </Switch>
    </div>
  );
  }
}

export default App;

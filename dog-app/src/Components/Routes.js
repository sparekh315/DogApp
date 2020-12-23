import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import DogList from './DogList';
import DogDetails from './DogDetails';


class Routes extends Component {
    render() {
        const getDoggo = props => {
            let name = props.match.params.name;
            let currentDoggo = this.props.dogs.find(
              dog => dog.name.toLowerCase() === name.toLowerCase()
            );
            return <DogDetails {...props} dog={currentDoggo}/>
        };
        return (
                <Switch>
                    <Route exact path='/dogs' render={() => <DogList dogs={this.props.dogs}/>} />
                    <Route exact path='/dogs/:name' render={getDoggo} />
                    <Redirect to='/dogs' />
                </Switch>
        );
    };
};

export default Routes;
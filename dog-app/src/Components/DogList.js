import React, { Component } from 'react';
import './DogList.css'

class DogList extends Component {
    render() {
        return (
            <div>
            { /* these are boot strap classes on the title */ }
                <hi className='display-1 text-center'>Dog List!</hi>
               { /* this is the bootstrap grid system. It must be in a container div. Uses rows and columns. There are 12 units per row, and each column can take up some portion of that. In this case, each dog is taking up 4 units. */ }
                <div className='container'>
                    <div className='row'>
                        {this.props.dogs.map( dog => (
                             /* you can still add normal classes along with the bootstrap ones. In this case, we have class Dog for styling purposes. */ 
                              /* the md-4 is to make it responsive. Works like a media query. This says that it will take up 4 for anything above medium, and then go to single row each and stacking.  */ 
                            <div className='Dog col-md-4 text-center' key={dog.name}>
                                <img src={dog.src} alt={dog.name}/>
                                <h3>{dog.name}</h3>
                            </div>
                        ))}
                        
                    </div>
                </div>
            </div>
        )
    };
};


export default DogList;
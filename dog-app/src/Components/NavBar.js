import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom';

class NavBar extends Component {
    render() {
        const doggoLinks = this.props.dogs.map(doggo => {
           return (
               <li className='nav-item' key={doggo.name}>
                    <NavLink exact to={`/dogs/${doggo.name}`} className='nav-link' >
                    {doggo.name}
                    </NavLink>
                </li> 
           )    
        });
        return(
             /* this bootstrap style tells the navbar to be collapsed unless at large size. It also says the background should be dark and text light */ 
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                <Link className='nav-brand'  to='/dogs'>
                    Dog App
                </Link>
                <button
                    /* these button specifications for the hamburger menu are all straight from bootstrap docs*/ 
                    className='navbar-toggler'
                    type='button'
                    data-toggle='collapse'
                    data-target='#navbarNav'
                    aria-controls='navbarNav'
                    aria-expanded='false'
                    aria-label='Toggle Navigation'
                    >
                        <span className='navbsr-toggler-icon' />
                </button>
                <div className='collapse navbar-collapse' id='navbarNav'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <NavLink exact to='/dogs' className='nav-link'>Home</NavLink>
                        </li>
                        {doggoLinks}
                    </ul>
                </div>
            </nav>
        )
    };
};


export default NavBar;
import React, { Component } from 'react';

export default class Navbar extends Component {
    render() {
        return ( 
            <div className='homeHeader'>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#myNavbar'>
                            <span className='sr-only'>Toggle Navigation</span>
                            <span className='icon-bar'></span>
                            <span className='icon-bar'></span>
                            <span className='icon-bar'></span>
                            </button>
                            <a className="navbar-brand" href="/">Visit Wisconsin</a>
                        </div>
                        <div className='navbar-collapse collapse' id='myNavbar'>
                            <ul className='nav navbar-nav navbar-right'>
                                <li><a href='/#/'>Home</a></li>
                                <li><a href="/#/dining">Dining</a></li>
                                <li><a href="/#/outdoors">Outdoors</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
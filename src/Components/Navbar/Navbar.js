import React, { Component } from 'react';

export default class Navbar extends Component {
    render() {
        return ( 
            <div className='homeHeader'>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>
                            <span className='sr-only'>Toggle Navigation</span>
                            <span className='icon-bar'></span>
                            <span className='icon-bar'></span>
                            <span className='icon-bar'></span>
                            </button>
                            <a className="navbar-brand" href="/">Visit Wisconsin</a>
                        </div>
                        <div className='navbar-collapse collapse'>
                            <ul className='nav navbar-nav navbar-right'>
                                <li><a href='/#/'>Home</a></li>
                                <li><a href="/#/dining">Dining</a></li>
                                <li><a href="/#/outdoors">Outdoors</a></li>
                                <li><a href="/#/explore">Explore</a></li>
                            </ul>
                        </div>
                            {/*search bar*/}
                        {/* <form className="navbar-form navbar-left">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search"/>
                                    <div className="input-group-btn">
                                        <button className="btn btn-default" type="submit">
                                            <i className="glyphicon glyphicon-search"></i>
                                        </button>
                                    </div>
                            </div>
                        </form> */}
                    </div>
                </nav>
            </div>
        )
    }
}
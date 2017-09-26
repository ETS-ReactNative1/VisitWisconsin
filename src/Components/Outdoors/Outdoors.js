import React, { Component } from 'react';

export default class Outdoors extends Component {
    render() {
        return (
            <div>
                <div className='homeHeader'>
                    <nav className="navbar navbar-inverse">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <a className="navbar-brand" href="/">Visit Wisconsin</a>
                            </div>
                            
                            <ul className="nav navbar-nav">
                                <li><a href="http://localhost:3000/#/">Home</a></li>
                                <li><a href="http://localhost:3000/#/dining">Dining</a></li>
                                <li className="active"><a href="http://localhost:3000/#/outdoors">Outdoors</a></li>
                                <li><a href="http://localhost:3000/#/explore">Explore</a></li>
                            </ul>
                            
                            <form className="navbar-form navbar-left">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Search"/>
                                        <div className="input-group-btn">
                                            <button className="btn btn-default" type="submit">
                                                <i className="glyphicon glyphicon-search"></i>
                                            </button>
                                        </div>
                                </div>
                            </form>
                        </div>
                    </nav>
                </div>
            </div>

        )
    }
}

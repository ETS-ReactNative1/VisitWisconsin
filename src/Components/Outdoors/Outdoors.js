import React, { Component } from 'react';
import '../../styles/outdoors_component/_outdoors.scss';
import Navbar from '../Navbar/Navbar';

export default class Outdoors extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div className='spaceForNavBar'>
    
                </div>
                <div className='titleConatiner'>
                <div className='popularNowTitle'>
                    Popular Now
                </div>
                </div>

            </div>

        )
    }
}

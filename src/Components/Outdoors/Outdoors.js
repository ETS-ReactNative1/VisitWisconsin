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

                <div className='culinaryPicContainer'>
                    <img className='culinaryPic' src="https://images.pexels.com/photos/407293/pexels-photo-407293.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb"/>
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

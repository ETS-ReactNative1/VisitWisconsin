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
                <div className='outdoorPicContainer'>
                    <img className='outdoorPic' src='https://www.tnvacation.com/sites/default/files/styles/hero/public/article/Nature%26Outdoors_CustomContent_HeroPhoto.jpg'/>
                </div>
                <div className='topTenContainer'>
                    Top 10 Outdoor Activies
                    <div className='activity'>
                        <div className='containerOne'>
                            <img className='activityPhoto' src='https://media-cdn.tripadvisor.com/media/photo-f/05/ac/9e/b5/bigfoot-zipline.jpg'/>
                            <h2>Bigfoot Zipline</h2>
                        </div>
                        <h3>Location: Wisconsin Dells</h3>
                        <h3>Address: 1550 Wisconsin Dells Pkwy</h3>
                    </div>

                    <div className='activity'>
                        <div className='containerOne'>
                            <img className='activityPhoto' src='https://media-cdn.tripadvisor.com/media/photo-i/0e/4b/c8/0a/pedal.jpg'/>
                            <h2>Milwaukee Pedal Tavern</h2>
                        </div>
                        <h3>Location: Milwaukee</h3>
                        <h3>Address: 800 S 2nd St, Steny's Tavern</h3>
                    </div>

                    <div className='activity'>
                        <div className='containerOne'>
                            <img className='activityPhoto' src='https://media-cdn.tripadvisor.com/media/photo-s/01/e0/48/7a/is-it-a-a-tornado-or.jpg'/>
                            <h2>Lost Canyon Tours</h2>
                        </div>
                        <h3>Location: Wisconsin Dells</h3>
                        <h3>Address: 720 Canyon Rd</h3>
                    </div>

                    <div className='activity'>
                        <div className='containerOne'>
                            <img className='activityPhoto' src='https://media-cdn.tripadvisor.com/media/photo-f/01/f7/b3/50/guides-have-it-all-under.jpg'/>
                            <h2>Lake Geneva Canopy Tours</h2>
                        </div>
                        <h3>Location: Lake Geneva</h3>
                        <h3>Address: N3232 County Road H</h3>
                    </div>

                    <div className='activity'>
                        <div className='containerOne'>
                            <img className='activityPhoto' src='https://media-cdn.tripadvisor.com/media/photo-s/07/d7/5f/32/segway-the-door.jpg'/>
                            <h2>Glide N.E.W. - Segway the Door Tours</h2>
                        </div>
                        <h3>Location: Ellison Bay</h3>
                        <h3>Address: 215 WI-42</h3>
                    </div>

                    <div className='activity'>
                        <div className='containerOne'>
                            <img className='activityPhoto' src='https://media-cdn.tripadvisor.com/media/photo-f/02/28/55/6a/lake-shore-path-on-south.jpg'/>
                            <h2>Geneva Lake Shore Path</h2>
                        </div>
                        <h3>Location: Lake Geneva</h3>
                        <h3>Address: Lake Geneva, WI</h3>
                    </div>

                    <div className='activity'>
                        <div className='containerOne'>
                            <img className='activityPhoto' src='https://media-cdn.tripadvisor.com/media/photo-f/00/18/a4/b1/polar-beer.jpg'/>
                            <h2>Henry Vilas Zoo</h2>
                        </div>
                        <h3>Location: Madison</h3>
                        <h3>702 S Randall Ave</h3>
                    </div>

                    <div className='activity'>
                        <div className='containerOne'>
                            <img className='activityPhoto' src='https://media-cdn.tripadvisor.com/media/photo-f/00/18/8d/33/original-wisconsin-ducks.jpg'/>
                            <h2>Original Wisconsin Ducks</h2>
                        </div>
                        <h3>Location: Wisconsin Dells</h3>
                        <h3>Address: 1890 Wisconsin Dells Pkwy</h3>
                    </div>

                    <div className='activity'>
                        <div className='containerOne'>
                            <img className='activityPhoto' src='https://media-cdn.tripadvisor.com/media/photo-f/00/16/7e/2a/milwaukee-county-zoo.jpg'/>
                            <h2>Milwaukee County Zoo</h2>
                        </div>
                        <h3>Location: Milwaukee</h3>
                        <h3>Address: 10001 W Bluemound Rd</h3>
                    </div>

                    <div className='activity'>
                        <div className='containerOne'>
                            <img className='activityPhoto' src='https://media-cdn.tripadvisor.com/media/photo-s/05/f1/4f/99/door-county-adventure.jpg'/>
                            <h2>Door County Adventure Rafting</h2>
                        </div>
                        <h3>Location: Fish Creek</h3>
                        <h3>Address: Fish Creek Launch Ramp, Town Dock, Fish Creek, WI</h3>
                    </div>
                </div>
                <div className='footer'>
                <a href='#'>Contact</a>&nbsp;
                <a href='#'>|</a>&nbsp;
                <a href='#'>Privacy & Terms</a>&nbsp;
                <a href='#'>|</a>&nbsp;
                <a href='#'>Send feedback</a>
            </div>

            </div>

        )
    }
}

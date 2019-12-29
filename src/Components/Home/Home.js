import React, { Component } from 'react';
import '../../styles/home_component/_home.scss';
import Slider from '../SlideShow/Slider';
import Navbar from '../Navbar/Navbar';
import { HashLink as Link } from 'react-router-hash-link';




export default class Home extends Component {
    render() {
        return (
            <div className='homeComponent'>
                <Navbar/>
                
                    <div className='slideShowContainer'>
                        <Slider/>
                        <div className='homeText'>
                            Your Greatest Adventure
                        </div>

                        <div className='homeText2'>
                            Awaits You...
                        </div>
                    </div>

                    <div className='discoverButton'>
                        <Link to='#Events'>Click to Discover More</Link>
                    </div>
                        <div className='eventsAroundTheState'>
                            <a id='Events'>Events</a>
                        </div>
                    <div className='mainContentContainer'>

                        <div className='eventOne'>
                            <div className='eventOneImageContainer'>
                                <img className='eventOneImage' src='https://hanshowe.files.wordpress.com/2019/07/airplanes-arrive-at-oskosh-airshow-2019-all-of-them-at-once-hal-davis.jpg?w=468&h=263'/>
                            </div>

                            <div className='eventOneDescription'>
                                <h1 className='eventOneTitle'>Oshkosh Air Show</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Etiam est sem, volutpat sit amet tincidunt faucibus, ultrices quis magna.
                                In tincidunt sem ante, quis faucibus ligula congue vel. 
                                Quisque blandit commodo erat a sodales. 
                                Sed orci orci, hendrerit non orci volutpat, consequat viverra purus. 
                                Proin erat nisi, porttitor vestibulum condimentum eu, bibendum ut magna. 
                                In sem nulla, ornare in massa sit amet, dictum mattis nisl. 
                                Suspendisse nec quam nisl. Cras malesuada, justo vitae ultrices pulvinar, 
                                tortor lectus ultricies erat, in dapibus eros turpis ac est. 
                                Fusce sed varius sapien, eget scelerisque leo. Nam non bibendum est. 
                                Proin dignissim elit at ante ultricies, vel scelerisque neque vestibulum. 
                                Donec euismod ante et lectus dignissim, id tempor ligula imperdiet.</p>
                            </div>
                        </div>

                        <div className='eventTwo'>
                            <div className='eventTwoImageContainer'>
                                <img className='eventTwoImage' src='http://bobber.discoverwisconsin.com/media/state-fair-1024x678.jpg'/>
                            </div>

                            <div className='eventTwoDescription'>
                                <h1 className='eventTwoTitle'>Wisconsin State Fair</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Etiam est sem, volutpat sit amet tincidunt faucibus, ultrices quis magna.
                                In tincidunt sem ante, quis faucibus ligula congue vel. 
                                Quisque blandit commodo erat a sodales. 
                                Sed orci orci, hendrerit non orci volutpat, consequat viverra purus. 
                                Proin erat nisi, porttitor vestibulum condimentum eu, bibendum ut magna. 
                                In sem nulla, ornare in massa sit amet, dictum mattis nisl. 
                                Suspendisse nec quam nisl. Cras malesuada, justo vitae ultrices pulvinar, 
                                tortor lectus ultricies erat, in dapibus eros turpis ac est. 
                                Fusce sed varius sapien, eget scelerisque leo. Nam non bibendum est. 
                                Proin dignissim elit at ante ultricies, vel scelerisque neque vestibulum. 
                                Donec euismod ante et lectus dignissim, id tempor ligula imperdiet.</p>
                            </div>
                        </div>

                        <div className='eventThree'>
                            <div className='eventThreeImageContainer'>
                                <img className='eventThreeImage' src='http://cdn.onlyinyourstate.com/wp-content/uploads/2016/04/z-138-700x410.jpg'/>
                            </div>

                            <div className='eventThreeDescription'>
                                <h1 className='eventThreeTitle'>Visit Lambeau Field</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Etiam est sem, volutpat sit amet tincidunt faucibus, ultrices quis magna.
                                In tincidunt sem ante, quis faucibus ligula congue vel. 
                                Quisque blandit commodo erat a sodales. 
                                Sed orci orci, hendrerit non orci volutpat, consequat viverra purus. 
                                Proin erat nisi, porttitor vestibulum condimentum eu, bibendum ut magna. 
                                In sem nulla, ornare in massa sit amet, dictum mattis nisl. 
                                Suspendisse nec quam nisl. Cras malesuada, justo vitae ultrices pulvinar, 
                                tortor lectus ultricies erat, in dapibus eros turpis ac est. 
                                Fusce sed varius sapien, eget scelerisque leo. Nam non bibendum est. 
                                Proin dignissim elit at ante ultricies, vel scelerisque neque vestibulum. 
                                Donec euismod ante et lectus dignissim, id tempor ligula imperdiet.</p>
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
                    
            </div>

        )
    }
}
import React, { Component } from 'react';
import '../../styles/home_component/_home.scss';
import Slider from '../SlideShow/Slider';
import { HashLink as Link } from 'react-router-hash-link';




export default class Home extends Component {
    render() {
        return (
            <div className='homeComponent'>
                <div className='homeHeader'>
                    <nav className="navbar navbar-inverse">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <a className="navbar-brand" href="/">Visit Wisconsin</a>
                            </div>
                            
                            <ul className="nav navbar-nav">
                                <li className="active"><a href="http://localhost:3000/#/">Home</a></li>
                                <li><a href="http://localhost:3000/#/dining">Dining</a></li>
                                <li><a href="http://localhost:3000/#/outdoors">Outdoors</a></li>
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
                        <Link to='#Events'><strong>Click to Discover More</strong></Link>
                    </div>
                        <div className='eventsAroundTheState'>
                            <a id='Events'>Events</a>
                        </div>
                    <div className='mainContentContainer'>

                        <div className='eventOne'>
                            <div className='eventOneImageContainer'>
                                <img className='eventOneImage' src='http://vannoppen.co/static/media/uploads/airventure-oshkosh-2015/air_show_p51_field_lr.jpg'/>
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

                        </div>
                    </div>
                    
            </div>

        )
    }
}
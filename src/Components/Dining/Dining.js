import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import axios from 'axios';
import '../../styles/dining_component/_dining.scss';

export default class Dining extends Component {
    constructor() {
        super()
        this.state = {
            first_name: '',
            restraunt_name: '',
            restraunt_address: '',
            rating: '',
            city_id: [],
            form: []
        }
    }

    updateFirstName(input) {
        this.setState({
            first_name: input
        });
    }

    updateRestrauntName(input) {
        this.setState({
            restraunt_name: input
        });
    }

    updateRestrauntAddress(input) {
        this.setState({
            restraunt_address: input
        });
    }

    updateRating(input) {
        this.setState({
            rating: input
        });
    }

    updateCity(input) {
        this.setState({
            city_id: input
        });
    }

    submitForm(form) {
        this.setState({
            form: [this.state.first_name,
            this.state.restraunt_name,
            this.state.restraunt_address,
            this.state.rating,
            this.state.city_id
            ]
        })
        axios.post('http://localhost:3030/api/form', {
            first_name: this.state.first_name,
            restraunt_name: this.state.restraunt_name,
            restraunt_address: this.state.restraunt_address,
            rating: this.state.rating,
            city_id: this.state.city_id[0]
        })

        .then(function (response) {
            console.log(response)
          })
          .catch(function (error) {
            console.log(error)
          })}

    
          
          render() {
              console.log(this.state);
              return (
            <div>
                <Navbar/>

                <div className='headerSpacing'></div>

                <div className='mainContent'>

                <div className='culinaryPicContainer'>
                    <img className='culinaryPic' src="https://images.pexels.com/photos/407293/pexels-photo-407293.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb"/>
                </div>

                <div className='text1'>Not see your favorite restraunt? Add it to our list!</div>
                    <div className='formContainer'>
                        <input className='firstName' placeholder='First Name' type='text' onChange={(e) => this.updateFirstName(e.target.value)}/>
                        <input className='restrauntName' placeholder='Restraunt Name' type='text' onChange={(e) => this.updateRestrauntName(e.target.value)}/>
                        <input className='restrauntAddress' placeholder='Restraunt Address' type='text' onChange={(e) => this.updateRestrauntAddress(e.target.value)}/>
                        <input className='rating' type='text' placeholder='Rating 1-5' onChange={(e) => this.updateRating(e.target.value)}/><br/>
                        <div className='whatCity1'>What city is the restraunt in?</div>
                        <form className='whatCity' onChange={(e) => this.updateCity(e.target.value)} action='/action_page.php'>
                            <select onChange={(e) => this.updateCity(+e.target.value)} name='city'>
                                <option onClick={()=>{this.setState({city_id: 1})}} value='1'>Milwaukee</option>
                                <option value='2'>Madison</option>
                                <option value='3'>Green Bay</option>
                                <option value='4'>Kenosha</option>
                                <option value='5'>Racine</option>
                                <option value='6'>Appleton</option>
                                <option value='7'>Waukesha</option>
                                <option value='8'>Eau Claie</option>
                                <option value='9'>Oshkosh</option>
                                <option value='10'>Janesville</option>
                            </select>
                        </form>

                    </div>
                        <button className='submitButton' type='submit' value='Submit' onClick={() => this.submitForm()}>Submit</button>
                </div>

            </div>

        )
    }
}
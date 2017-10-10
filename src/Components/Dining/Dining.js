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

    submitForm(form) {
        this.setState({
            form: [this.state.first_name,
            this.state.restraunt_name,
            this.state.restraunt_address,
            this.state.rating
            ]
        })
        axios.post('http://localhost:3030/api/form', {
            first_name: this.state.first_name,
            restraunt_name: this.state.restraunt_name,
            restraunt_address: this.state.restraunt_address,
            rating: this.state.rating
        })

        .then(function (response) {
            console.log(response)
          })
          .catch(function (error) {
            console.log(error)
          })}

    


    render() {
        return (
            <div>
                <Navbar/>

                <div className='headerSpacing'></div>

                <div className='mainContent'>
                    <div className='formContainer'>
                        <input className='firstName' placeholder='First Name' type='text' onChange={(e) => this.updateFirstName(e.target.value)}/>
                        <input className='restrauntName' placeholder='Restraunt Name' type='text' onChange={(e) => this.updateRestrauntName(e.target.value)}/>
                        <input className='restrauntAddress' placeholder='Restraunt Address' type='text' onChange={(e) => this.updateRestrauntAddress(e.target.value)}/>
                        <input className='rating' type='text' placeholder='Rating 1-5' onChange={(e) => this.updateRating(e.target.value)}/><br/>
                        <button className='submitButton' type='submit' value='Submit' onClick={() => this.submitForm()}>Submit</button>
                    </div>
                </div>

            </div>

        )
    }
}
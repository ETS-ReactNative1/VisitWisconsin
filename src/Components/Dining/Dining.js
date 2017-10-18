import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import axios from 'axios';
import '../../styles/dining_component/_dining.scss';

export default class Dining extends Component {
    constructor() {
        super()
        this.state = {
            first_name: '',
            restaurant_name: '',
            restaurant_address: '',
            rating: '',
            city_id: [],
            form: [],
            category_id: [],
            formData: []
        }
    }

    componentDidMount() {
        axios.get('/api/form').then(response => {
            console.log(response.data);
            this.setState({
                formData: response.data
            })
        })
    }

    updateFirstName(input) {
        this.setState({
            first_name: input
        });
    }

    updateRestaurantName(input) {
        this.setState({
            restaurant_name: input
        });
    }

    updateRestaurantAddress(input) {
        this.setState({
            restaurant_address: input
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

    updateCategory(input) {
        this.setState({
            category_id: input
        });
    }

    submitForm(form) {
        this.setState({
            form: [this.state.first_name,
            this.state.restaurant_name,
            this.state.restaurant_address,
            this.state.rating,
            this.state.city_id,
            this.state.category_id
            ]
        })
        axios.post('http://localhost:3030/api/form', {
            first_name: this.state.first_name,
            restaurant_name: this.state.restaurant_name,
            restaurant_address: this.state.restaurant_address,
            rating: this.state.rating,
            city_id: this.state.city_id,
            category_id: this.state.category_id
        })

        .then(function (response) {
            console.log(response)
          })
          .catch(function (error) {
            console.log(error)
          }) 
    }

    
          
          render() {
              console.log(this.state.formData);

            //    let formData = this.state.formData.map(function(data) {
            //       return(
            //           <div>
            //               <div>
            //               {data.restaurant_name}
            //               </div>
            //         </div>
            //         ) 
                    
            //   })
              
              return (
            <div>
                <Navbar/>

                <div className='headerSpacing'></div>

                <div className='mainContent'>

                <div className='culinaryPicContainer'>
                    <img className='culinaryPic' src="https://images.pexels.com/photos/407293/pexels-photo-407293.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb"/>
                <div className='whiteHeader'>~ Popular Now ~</div>
                </div>

                <div className='restaurantsContainer'>
                    <form className='citySearch'>
                        <select name='cityChoice'>
                            <option value='1'>Milwaukee</option>
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

                    {/* {tableData} */}
                </div>


                <div className='text1'>Not see your favorite restaurant? Add it to our list!</div>
                    <div className='formContainer'>
                        <input className='firstName' placeholder='First Name' type='text' onChange={(e) => this.updateFirstName(e.target.value)}/>
                        <input className='restaurantName' placeholder='restaurant Name' type='text' onChange={(e) => this.updateRestaurantName(e.target.value)}/>
                        <input className='restaurantAddress' placeholder='restaurant Address' type='text' onChange={(e) => this.updateRestaurantAddress(e.target.value)}/>
                        <input className='rating' type='text' placeholder='Rating 1-5' onChange={(e) => this.updateRating(e.target.value)}/><br/>
                        <div className='whatCity1'>What city is the restaurant in?</div>
                        <form className='whatCity' onChange={(e) => this.updateCity(e.target.value)} action='/action_page.php'>
                            <select onChange={(e) => this.updateCity(+e.target.value)} name='city'>
                                <option value='1'>Milwaukee</option>
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

                        <div className='whatCategory1'>What category is this restaurant?</div>
                        <form className='whatCategory' onChange={(e) => this.updateCategory(e.target.value)} action='/action_page.php'>
                            <select onChange={(e) => this.updateCategory(+e.target.value)} name='category'>
                                <option value='1'>German</option>
                                <option value='2'>American</option>
                                <option value='3'>Seafood</option>
                                <option value='4'>French</option>
                                <option value='5'>Italian</option>
                                <option value='6'>Steakhouse</option>
                                <option value='7'>Bar</option>
                                <option value='8'>Breakfast</option>
                                <option value='9'>Pizza</option>
                                <option value='10'>Indian</option>
                                <option value='11'>Chinese</option>
                                <option value='12'>Thai</option>
                                <option value='13'>Mexican</option>
                                <option value='14'>Irish</option>
                                <option value='15'>Mediterranean</option>
                                <option value='16'>Japanese</option>
                                <option value='17'>Sushi</option>
                            </select>
                        </form>

                    </div>
                        <input type='button' value='Submit' id='btnSubmit' onClick={() => this.submitForm()}/>

            </div>
            </div>

        )
    }
}
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
            formData: [],
            filterCityId: 0,
            editRating: ''
        }
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

    updateFilterCityId(input) {
        this.setState({
            filterCityId: input
        });
        axios.get('/api/form/' + input).then(response => {
            // console.log(response.data);
            this.setState({
                formData: response.data
            })
        })
    } 

    deleteSubmission(sub) {
        console.log(sub);
        axios.delete(`/api/form/${sub}/${this.state.filterCityId}`).then((response) => {
            this.setState({
                formData: response.data
            })
        })
    }

    editRating(input) {
        this.setState({
            editRating: input
        })
    }

    updateCategory(input) {
        this.setState({
            category_id: input
        });
    }

    submitEdit(input) {

        axios.put(`/api/form/${input}/${this.state.filterCityId}`, {rating: this.state.editRating}).then((response) => {
            this.setState({
                formData: response.data
            })
            console.log(response);
        })
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
            //   console.log(this.state);
               let formData = this.state.formData.map((data) => {
                   console.log(data.id);
                  return(
                      <div>
                          <div className='formDataContainer'>
                            <table className='dataTable'>
                                <tr>

                                </tr>
                                <tr>
                                    <div className='dataInfo1'>
                                    <td>{data.restaurant_name} | </td>
                                    <td>{data.restaurant_address}&nbsp;| </td>
                                    <td>{data.rating} | </td>
                                    <td>{data.category_id}</td>
                                    </div>
                                </tr>
                            </table>
                            <div className='editDeleteContainer'>
                                <input type='text' className='editInput' placeholder='Edit Rating' onChange={(e) => this.editRating(e.target.value)}/>
                                <button style={{cursor: 'pointer'}} className='editSubmitButton' onClick={() => this.submitEdit(data.id)}>Submit</button>
                                <button style={{cursor: 'pointer'}} className='deleteButton' onClick={() => this.deleteSubmission(data.id)}>Delete</button>
                            </div>
                        </div>
                    </div>
                    ) 
                    
              })
            
            
              
              return (
            <div>
                <Navbar/>

                <div className='headerSpacing'></div>

                <div className='mainContent'>

                <div className='culinaryPicContainer'>
                    <img className='culinaryPic' src="https://images.pexels.com/photos/407293/pexels-photo-407293.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb"/>
                <div className='whiteHeader'><div>~ Popular Now ~</div></div>
                </div>

                <div className='restaurantsContainer'>
                    <form className='citySearch'>
                        <select onChange={(e) => this.updateFilterCityId(+e.target.value)} name='cityChoice'>
                            <option value='1'>Milwaukee</option>
                            <option value='2'>Madison</option>
                            <option value='3'>Green Bay</option>
                            <option value='4'>Kenosha</option>
                            <option value='5'>Racine</option>
                            <option value='6'>Appleton</option>
                            <option value='7'>Waukesha</option>
                            <option value='8'>Eau Claire</option>
                            <option value='9'>Oshkosh</option>
                            <option value='10'>Janesville</option>
                        </select>
                    </form>
                    <div className='labelContainer'>
                    <div className='name'>Name |</div>&nbsp;&nbsp;
                    <div className='address'>Address |</div>&nbsp;&nbsp;
                    <div className='rating'>Rating |</div>&nbsp;&nbsp;
                    <div className='category'>Category</div>
                    </div>

                    <div className='formDataContainer'>
                    {formData}
                    </div>
                    
                </div>


                    <div className='formContainer'>
                        <div className='text1'>Not see your favorite restaurant? Add it to our list!</div>
                        <input className='firstName' placeholder='First Name' type='text' onChange={(e) => this.updateFirstName(e.target.value)}/>
                        <input className='restaurantName' placeholder='Restaurant Name' type='text' onChange={(e) => this.updateRestaurantName(e.target.value)}/>
                        <input className='restaurantAddress' placeholder='Restaurant Address' type='text' onChange={(e) => this.updateRestaurantAddress(e.target.value)}/>
                        <input className='rating' type='text' placeholder='Rating 1-5' onChange={(e) => this.updateRating(e.target.value)}/><br/>
                        <div className='whatCity1'>What city is the restaurant in?
                        <form className='whatCity' onChange={(e) => this.updateCity(e.target.value)} action='/action_page.php'>
                            <select onChange={(e) => this.updateCity(+e.target.value)} name='city'>
                                <option value='1'>Milwaukee</option>
                                <option value='2'>Madison</option>
                                <option value='3'>Green Bay</option>
                                <option value='4'>Kenosha</option>
                                <option value='5'>Racine</option>
                                <option value='6'>Appleton</option>
                                <option value='7'>Waukesha</option>
                                <option value='8'>Eau Claire</option>
                                <option value='9'>Oshkosh</option>
                                <option value='10'>Janesville</option>
                            </select>
                        </form>
                        </div>

                        <div className='whatCategory1'>What category is this restaurant?
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

                    </div>
                    <div className='submitContainer'>
                        <input type='button' value='Submit' className='btnSubmit' onClick={() => this.submitForm()}/>
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
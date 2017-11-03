import React, { Component } from 'react';

const SlideOne= (props) => {
    let background = {
        backgroundImage: 'url(https://lh4.googleusercontent.com/mxD8B1qy8ATKsOPAhiELCpAtj9u-77_Fw3OCcUMg0MsPCA8YsdgSj1By9-3UfEKfn5QsEAXvw-6_iXQ=w1920-h947-rw)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%'
    }

  return <div style={ background } className="slide"></div>
}

export default SlideOne;
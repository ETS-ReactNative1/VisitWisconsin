import React, { Component } from 'react';

const SlideOne= (props) => {
    let background = {
        backgroundImage: 'url(https://lh6.googleusercontent.com/N7S4ew94M1_yxmyDA89mOP_EcyHGYtesl0eoFhp9HskfXQhrW0oAvLhdmqmRiLpolkQjI-jbi81hiI4=w1920-h947-rw)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%'
    }

  return <div style={ background } className="slide"></div>
}

export default SlideOne;
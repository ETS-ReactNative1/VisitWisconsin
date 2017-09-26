import React, { Component } from 'react';

const SlideFive= (props) => {
    let background = {
        backgroundImage: 'url(https://cdn.pixabay.com/photo/2014/05/18/19/23/farmhouse-347434_960_720.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%'
    }

  return <div style={ background } className="slide"></div>
}

export default SlideFive;
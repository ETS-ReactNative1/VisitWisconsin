import React, { Component } from 'react';

const SlideTwo= (props) => {
    let background = {
        backgroundImage: 'url(https://cdn.pixabay.com/photo/2016/11/15/17/02/wisconsin-1826836_960_720.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%'
    }

  return <div style={ background } className="slide"></div>
}

export default SlideTwo;
import React, { Component } from 'react';

const SlideThree= (props) => {
    let background = {
        backgroundImage: 'url(https://cdn.pixabay.com/photo/2016/01/28/20/45/winter-1166962_960_720.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%'
    }

  return <div style={ background } className="slide"></div>
}

export default SlideThree;
import React, { Component } from 'react';

const SlideTwo= (props) => {
    let background = {
        backgroundImage: 'url(https://lh5.googleusercontent.com/CmDJotiwM8alYeOGWjlGECq6EpnlbLbO1WK1RNBaFuQGUNyAwXtc8yaABLY2qGKDeuI9tkQzyRsIgDM=w1920-h947-rw)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%'
    }

  return <div style={ background } className="slide"></div>
}

export default SlideTwo;
import React, { Component } from 'react';

const SlideFive= (props) => {
    let background = {
        backgroundImage: 'url(https://lh6.googleusercontent.com/zMum6BuDGuY6pRhEF_nn2o4r5xFqtufpmTkVcYc2a3tt2bl2UZolNydl1O-EjOqznZkHawlbiOYtM2k=w1920-h947-rw)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%'
    }

  return <div style={ background } className="slide"></div>
}

export default SlideFive;
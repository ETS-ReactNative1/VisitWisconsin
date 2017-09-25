import React, { Component } from 'react';

const SlideFour= (props) => {
    let background = {
        backgroundImage: 'url(https://cdn.pixabay.com/photo/2015/11/12/00/25/landscapes-1039443_960_720.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%'
    }

  return <div style={ background } className="slide"></div>
}

export default SlideFour;
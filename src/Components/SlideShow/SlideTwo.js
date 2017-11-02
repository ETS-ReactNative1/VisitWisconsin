import React, { Component } from 'react';

const SlideTwo= (props) => {
    let background = {
        backgroundImage: 'url(https://lh3.googleusercontent.com/_Hb3ctG94x8MFGlUTOlduT7RzmaA_sYZsS89kTpRkLU-9UIbaithem3Aa3fkQ1_C5ldhwQDMHMiBXx8=w1920-h947-rw)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%'
    }

  return <div style={ background } className="slide"></div>
}

export default SlideTwo;
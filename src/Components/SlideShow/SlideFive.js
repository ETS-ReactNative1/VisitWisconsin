import React, { Component } from 'react';

const SlideFive= (props) => {
    let background = {
        backgroundImage: 'url(https://lh5.googleusercontent.com/rBqdoVoCuTEt_o-AUQw7bWsN0eX4NjPhgnlu62zA4bVo5-LctoZki_hYfiMCTgd6PDodWr6cy_EqJXY=w1920-h947-rw)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%'
    }

  return <div style={ background } className="slide"></div>
}

export default SlideFive;
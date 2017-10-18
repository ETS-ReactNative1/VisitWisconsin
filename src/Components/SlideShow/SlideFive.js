import React, { Component } from 'react';

const SlideFive= (props) => {
    let background = {
        backgroundImage: 'url(https://lh3.googleusercontent.com/AeQUSw1LmbR43S5zV254HCXgyULPzept5FIFAJGymT3Enj-n38NclLiLGghi2zeIJ87v0YOJqoYj1IA=w1920-h887-rw)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%'
    }

  return <div style={ background } className="slide"></div>
}

export default SlideFive;
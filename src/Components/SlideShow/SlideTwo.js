import React, { Component } from 'react';

const SlideTwo= (props) => {
    let background = {
        backgroundImage: 'url(https://img0.etsystatic.com/006/1/7227043/il_fullxfull.377957588_5dhc.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%'
    }

  return <div style={ background } className="slide"></div>
}

export default SlideTwo;
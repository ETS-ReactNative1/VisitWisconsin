import React, { Component } from 'react';

const SlideOne= (props) => {
    let background = {
        backgroundImage: 'url(https://cdn.pixabay.com/photo/2016/11/08/15/54/milwaukee-1808689_960_720.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%'
    }

  return <div style={ background } className="slide"></div>
}

export default SlideOne;
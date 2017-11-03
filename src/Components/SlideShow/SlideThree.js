import React, { Component } from 'react';

const SlideThree= (props) => {
    let background = {
        backgroundImage: 'url(https://lh4.googleusercontent.com/l_hw75vOn9VR_sSASpiqLlZj36W8C0jNDjQ006unaPGOzH03jzGoIqW7t3VqRajZLMm1h6ET3kdWp3Y=w1920-h947-rw)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%'
    }

  return <div style={ background } className="slide"></div>
}

export default SlideThree;
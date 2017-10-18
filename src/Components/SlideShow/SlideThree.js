import React, { Component } from 'react';

const SlideThree= (props) => {
    let background = {
        backgroundImage: 'url(https://lh6.googleusercontent.com/umcONr3D0v5hQnQ39hxu0POlKmg24GIaZySJcE4je5ZCuipPW1frFD7Ve5nmXYrc9WLT1UkKaNJSYPw=w1920-h887-rw)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%'
    }

  return <div style={ background } className="slide"></div>
}

export default SlideThree;
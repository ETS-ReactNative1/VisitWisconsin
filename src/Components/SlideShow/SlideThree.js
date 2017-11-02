import React, { Component } from 'react';

const SlideThree= (props) => {
    let background = {
        backgroundImage: 'url(https://lh4.googleusercontent.com/cto8ZovF2x3fpdw0X1h01c_nYcek0Ygf8pmTtl0x3z_gq8n6T0quIAp0qMwhDcxG_IHKxK5rA10LLng=w1920-h947-rw)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%'
    }

  return <div style={ background } className="slide"></div>
}

export default SlideThree;
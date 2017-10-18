import React, { Component } from 'react';

const SlideOne= (props) => {
    let background = {
        backgroundImage: 'url(https://lh3.googleusercontent.com/_5NQ4LJjrtTcA0vxMLUai_lsgzj_c1O_Mu6G7Uz_w8gZm4b3J4T4i1MBPMVW284Kwof2R9NiC_fBnv0=w1920-h887-rw)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%'
    }

  return <div style={ background } className="slide"></div>
}

export default SlideOne;
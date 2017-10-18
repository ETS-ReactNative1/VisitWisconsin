import React, { Component } from 'react';

const SlideTwo= (props) => {
    let background = {
        backgroundImage: 'url(https://lh5.googleusercontent.com/b--ddwygCJMlP4AIc2sBNadj7UgZ91ZU_IjM111mXnExWAmum5Y7tVLl1QsvVDMxYmnU2p4rr7--Ah8=w1920-h887-rw)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%'
    }

  return <div style={ background } className="slide"></div>
}

export default SlideTwo;
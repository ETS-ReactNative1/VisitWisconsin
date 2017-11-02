import React from 'react';

const SlideFour= (props) => {
    let background = {
        backgroundImage: 'url(https://lh4.googleusercontent.com/1B7nyFkSXzlCyFhE6XgJsfnDS4igZ-WCy_f3JxJt36EX2QPftaC76RQRbsmHd6zCo_GOnX30lrlLGUc=w1920-h947-rw)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%'
    }

  return <div style={ background } className="slide"></div>
}

export default SlideFour;
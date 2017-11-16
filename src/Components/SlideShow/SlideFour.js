import React from 'react';

const SlideFour= (props) => {
    let background = {
        backgroundImage: 'url(https://www.socwall.com/images/wallpapers/37989-2560x1600.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%'
    }

  return <div style={ background } className="slide"></div>
}

export default SlideFour;
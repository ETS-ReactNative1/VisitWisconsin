import React from 'react';

const SlideFour= (props) => {
    let background = {
        backgroundImage: 'url(https://lh6.googleusercontent.com/9R0iATlr5uhh3nFiUxLXuWti-Y7b6sNkraI45vb5PY0-QQOg-CACThJcmQN8AemrcXZjXcBaZLO_HbE=w1920-h947-rw)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%'
    }

  return <div style={ background } className="slide"></div>
}

export default SlideFour;
import React from 'react';

const SlideFour= (props) => {
    let background = {
        backgroundImage: 'url(https://lh6.googleusercontent.com/gx8qiUc1Ynhzj3pmSbSxcrdRfwxIUrMWQ4bpkhCbjk0g_JAirB6V6vKfOQ7DYywje6Vy-GWRfOvxd7k=w1920-h887-rw)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%'
    }

  return <div style={ background } className="slide"></div>
}

export default SlideFour;
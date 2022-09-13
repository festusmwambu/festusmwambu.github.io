import React from 'react';
import FeaturedCard from '../../components/FeaturedCard/FeaturedCard';
import Node from '../../images/node-js-hexagon-wallpaper-preview.jpg'
import code from '../../images/code.jpg'
import ReactLogo from '../../images/react-logo.png'

import './Features.css'

function Features() {

  const featured = [
    {
      src: Node,
      className: 'back-end-dev',
      id: 'back-end-dev',
      title: 'Back End Development',
      text: 'Node.js (Node) is an open source development platform for executing JavaScript code server-side. It  is useful for developing applications that require a persistent connection from the browser to the server and is often used for real-time applications such as chat, news feeds and web push notifications.',
      alt: 'alt text'
    },
    {
      src: ReactLogo,
      className: 'front-end-dev',
      id: 'front-end-dev',
      title: 'Front End Development',
      text: 'React is a JavaScript library created for building fast and interactive user interfaces for web and mobile applications. it is maintained by Facebook and a community of individual developers and companies. React makes it easier to create dynamic web applications because it requires less coding and offers more functionality.',
      alt: 'alt text'
    },
    {
      src: code,
      className: 'responsive-design',
      id: 'responsive-design',
      title: 'Responsive Design',
      text: 'Using Bootstrap, web applications can be responsively created to support mobile devices and different screen sizes. It is easy to set up and master, it has a lot of components, a good grid system, styling for many HTML elements ranging from typography to buttons, as well as support of JavaScript plugins, making it even more flexible. ',
      alt: 'alt text'
    },

  ]

  return (
    <div className="features-container col-12" id='features-container'>
      <div className='features-wrapper'>
        <div className='row'>
          <h1 className='display-3 text-center col-12'>Features</h1>
        </div>
        <div className='row' style={{ margin: '0 auto', width: '90%' }}>
          {featured.map((item, i) => (
            <FeaturedCard
              {...featured}
              key={i}
              src={item.src}
              alt={item.alt}
              id={item.id}
              text={item.text}
              title={item.title}
              className={item.className}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;
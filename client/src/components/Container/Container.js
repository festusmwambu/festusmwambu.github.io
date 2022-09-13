import React from 'react';
import './Container.css'

function Container(props) {
  return <div className={`${props.className}`} style={props.style} id={props.id} {...props} />;
}

export default Container;
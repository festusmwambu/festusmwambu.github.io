import React from 'react';
import Card from 'react-bootstrap/Card';

import './FeaturedCard.css'

function FeaturedCard(props) {
  return (

    <Card className='featured-card'>
      <div className='img-wrapper'>
        <Card.Img
          variant="top"
          src={props.src}
          alt={props.alt}
          className={props.className}
          id={props.className + '-' + props.id} />
        <div className="overlay"></div>
      </div>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.text}
        </Card.Text>
      </Card.Body>
    </Card>

  );
}

export default FeaturedCard;
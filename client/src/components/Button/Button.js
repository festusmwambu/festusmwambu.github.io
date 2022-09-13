import React from 'react';
import Button from 'react-bootstrap/Button';
import './Button.css'

function ButtonComponent(props) {
  return (
    <Button type={props.type} variant={props.variant} href={props.href} className={`button-component ${props.className}`} id={props.id}>{props.children}</Button>
  );
}

export default ButtonComponent;
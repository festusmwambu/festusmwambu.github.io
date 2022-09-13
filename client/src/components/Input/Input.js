import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap'
import './input.css'

function Input(props) {
  return (

    <InputGroup className={`mb-3 ${props.className}`} style={props.style}>
      <InputGroup.Prepend>
        <InputGroup.Text id="basic-addon1">{props.name}</InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        as={props.as}
        placeholder={props.placeholder}
        aria-label={props.lavel}
        aria-describedby="basic-addon1"
      />
    </InputGroup>

  );
}

export default Input;
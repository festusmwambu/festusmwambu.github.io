// Dependencies
import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import axios from 'axios'

// Libs
import { onError } from "../../libs/errorLib";

// Components
import Container from '../../components/Container/Container';
import LoaderButton from "../../components/LoaderButton/LoaderButton";

// CSS
import './Contact.css';

function Contact(props) {
  const [isLoading, setIsLoading] = useState(false);

  const [fields, setFields] = useState({
    name: "",
    email: "",
    textarea: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFields({ ...fields, [name]: value })
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setIsLoading(true);

    try {
      await axios({
        method: "POST",
        url: "/api/sendMail",
        data: fields
      }).then((response) => {
        if (response.data.status === 'success') {
          alert("Message Sent.");
          setIsLoading(false)
          setFields({
            name: "",
            email: "",
            textarea: ""
          })
        } else if (response.data.status === 'fail') {
          alert("Message failed to send.")
          setIsLoading(false);
        }
      })
    } catch (e) {
      onError(e);
    }
  }

  return (
    <Container className='contact-container col-12' id='contact-container'>
      <Form onSubmit={handleSubmit} className='contact-wrapper'>
        <div className='row'>
          <h1 className="display-3 text-center col-12" style={{ color: 'white', marginTop: '10px' }}>Contact</h1>
        </div>
        <Form.Group controlId="formHorizontalName" size="lg" controlId="name">
          <Form.Control
            name='name'
            placeholder='Name'
            // autoFocus
            type="name"
            value={fields.name}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="formHorizontalEmail" size="lg" controlId="email">
          <Form.Control
            name='email'
            placeholder='email'
            // autoFocus
            type="email"
            value={fields.email}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="formHorizontalTextarea" size="lg" controlId="textarea">
          <Form.Control
            as='textarea'
            name='textarea'
            placeholder='Message...'
            // autoFocus
            type="textarea"
            value={fields.textarea}
            onChange={handleInputChange}
          />
          <LoaderButton
            block
            size="lg"
            type="submit"
            isLoading={isLoading}
            style={{ marginTop: '25px' }}
          >
            Send
        </LoaderButton>
        </Form.Group>
      </Form>
    </Container>
  );
}

export default Contact;
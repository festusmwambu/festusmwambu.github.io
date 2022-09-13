import React from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { FaExternalLinkSquareAlt, FaGithub } from 'react-icons/fa'
import config from '../../config'

import './Modal.css'

function MyModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <div className='title-wrapper'>
            {props.title}
          </div>
          <div className='icon-wrapper'>
            <a href={props.link} target='_blank' style={{ color: config.colors.purple }}><FaExternalLinkSquareAlt className='modal-icon' /></a>
            <a href={props.github} target='_blank' style={{ color: config.colors.blue }}><FaGithub className='modal-icon' /></a>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='col-12'>
          <div className='row modal-row'>
            <img
              src={props.src}
              alt={props.alt}
              className={`col-md-12 col-lg-4 modal-img ${props.className}`}
              id={`modal-img ${props.id}`}
            />
            <p className='col-md-12 col-lg-8 p-modal-text'>{props.text}</p>
          </div>
          <div className='row'>
            <h4 className='col-12' style={{ marginTop: '20px' }}>Technologies</h4>
            <h6 className='col-12' style={{ lineHeight: '1.5' }}>{props.tech}</h6>

          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyModal;
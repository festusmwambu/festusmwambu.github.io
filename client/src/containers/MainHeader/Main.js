// Dependencies
import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap'

// CSS
import './Main.css'
import styled, { keyframes } from 'styled-components'

// Images
import mainWebDev from '../../images/mainWebDev.png'

// Doc
import Resume from '../../assets/Resume.docx'

// Components
import Button from '../../components/Button/Button'
import Container from '../../components/Container/Container'

// Containers
import Languages from '../Languages/Languages';


// Main Header - Landing Container
function Main(props) {
  const adjectives = ['Interactive', 'Professional', 'Beautiful', 'Functional', 'Innovative']
  let [text, setText] = useState('Responsive')
  let i = 0

  useEffect(() => {
    changeTxt(adjectives[0])
  }, []);

  const changeTxt = () => {
    var interval = setInterval(function () {
      setText(adjectives[i++ % adjectives.length]);
    }, 2000);
    setTimeout(function () { clearInterval(interval); }, 11000);
  }

  const AnimateOnChange = keyframes`
  from {
    color: black;
  }
  to {
    color: white;
  }
  `;

  const AnimateMainTxt = styled.h1`
  animation: ${AnimateOnChange};
  animation-delay: 0s
  `;

  return (
    <Container className='main-container container-fluid col-12' id='main-container'>
      <Row className='col-12 my-auto' style={{ height: '100%' }}>
        <div className="col-sm-12 col-md-12 col-lg-8 col-xl-6">
          <h2 className="main-h2">You Too Deserve A Website That's</h2>
          <AnimateMainTxt className="main-h1" id="text-state">{text}</AnimateMainTxt>
          <h3 className="main-h3">Web Development by Jared Seefried</h3>
        </div>
        <div className='col-4 main-img-wrapper'>
          <img id="mainwebdev" src={mainWebDev} alt="web development main image" />
        </div>
        <div className="buttons-container col-12">
          <div className="row row-container row-buttons col-sm-12 col-md-6">
            <Button type="button"
              variant='outline-primary'
              href='#projects-container'
              className="portfolio-button"
              id="portfolio-button" >
              Portfolio
              </Button>
            <Button type="button"
              variant='outline-secondary'
              href='#contact-container'
              className="contact-button"
              id="contact-button" >
              Contact
              </Button>
            <Button type="button"
              variant='outline-secondary'
              href={Resume}
              className="download-link"
              id="download-link" >
              Resume
              </Button>
          </div>
        </div>
        <Languages />
      </Row>
    </Container >
  );
}

export default Main;
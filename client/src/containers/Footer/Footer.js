import React from 'react';
import { AiFillGithub } from 'react-icons/ai'
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa'

// Containers
import Container from '../../components/Container/Container';

//Components

//Images
import Jared from '../../images/jared.png'

//CSS 
import './Footer.css'

function Footer(props) {
  return (
    <Container className='footer-container col-12' id='footer-container'>
      <div className='row' style={{ padding: '20px 0px', height: '100%' }}>
        <div className='about-me col-md-12 col-lg-6'>
          <img className='jared-img' src={Jared} alt='Jared Seefried' />
          <p className='about-me-text'>With a certificate in Full Stack Web Development, focusing on JavaScript and Node.js, this experienced technical engineer has 10+ years of experience working within Agile development life cycles as an active team contributor, result driven problem solver with a desire to master Object-Oriented Programming.</p>
        </div>
        <div className='social-links col-2 d-flex flex-row-reverse'>
          <ul>
            <a href="https://github.com/jaredseefried" target='_blank'><li className="footer-list-item"><AiFillGithub className="footer-icon github-icon" /></li></a>

            <a href="https://linkedin.com/in/jaredseefried" target='_blank'><li className="footer-list-item"><FaLinkedinIn className="footer-icon linkedin-icon" /></li></a>

            <a href="https://twitter.com/denver_dev" target='_blank'><li className="footer-list-item"><FaTwitter className="footer-icon twitter-icon" /></li></a>

          </ul>
        </div>
        <div className='page-links col-2 d-flex flex-row-reverse'>
          <ul>
            <a href='#home-container' ><li>Home</li></a>
            <a href='/signup' target='_blank'><li>Signup</li></a>
            <a href='/login' target='_blank'><li>Login</li></a>
          </ul>
        </div>
      </div>
    </Container>
  );
}

export default Footer;
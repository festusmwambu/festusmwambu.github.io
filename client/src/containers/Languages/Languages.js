// Dependencies
import React from 'react';

// CSS
import './Languages.css'

// Logos
import HTMLLogo from '../../images/HTML.png'
import CSSLogo from '../../images/CSS.png'
import JavaScriptLogo from '../../images/javascript.png'
import MongoDB from '../../images/mongo.png'
import ExpressJS from '../../images/express.png'
import ReactJS from '../../images/react.png'
import NodeJS from '../../images/Node.png'
import AWS from '../../images/aws.png'
import Serverless from '../../images/serverless.png'
import BootstrapLogo from '../../images/Bootstrap.png'
import Container from '../../components/Container/Container';

function Languages(props) {

  const LangLogos = [
    {
      id: 1,
      src: HTMLLogo,
      alt: "html-logo"
    },
    {
      id: 2,
      src: CSSLogo,
      alt: "css-logo"
    },
    {
      id: 3,
      src: JavaScriptLogo,
      alt: "javascript-logo"
    },
    {
      id: 4,
      src: NodeJS,
      alt: "nodejs-logo"
    },
    {
      id: 5,
      src: ReactJS,
      alt: "react-logo"
    },
    {
      id: 6,
      src: MongoDB,
      alt: "mongodb-logo"
    },
    {
      id: 7,
      src: ExpressJS,
      alt: "express-logo"
    },
    {
      id: 8,
      src: AWS,
      alt: 'aws-logo'
    },
    {
      id: 9,
      src: Serverless,
      alt: 'serverless-logo'
    },
    {
      id: 10,
      src: BootstrapLogo,
      alt: 'bootstrap-logo'
    }

  ]

  return (
    <Container className="languages-container col-12" id='languages-container'>
      <div className="row">
        {LangLogos.map((image) => (
          <img
            {...LangLogos}
            key={image.id}
            src={image.src}
            alt={image.alt}
            id={image.alt}
            className='language-logo' />
        ))}
      </div>
    </Container>
  )
}

export default Languages;
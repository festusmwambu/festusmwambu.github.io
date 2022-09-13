import React from "react";

// Components
import Container from "../../components/Container/Container";
import MyModal from "../../components/Modal/Modal";

// Containers
import Main from "../../containers/MainHeader/Main";
import Features from "../../containers/Features/Features.js";
import MyProjects from '../../containers/MyProjects/MyProjects'
import Contact from '../../containers/Contact/Contact'
import Footer from "../../containers/Footer/Footer";

// CSS
import "./Home.css";

//Particles.js
import Particles from '../../containers/Particles/Particles'

export default function Home() {

  return (

    <Container className="home-container" id='home-container'>
      <Particles />
      <Main />
      <Features />
      <MyProjects />
      <MyModal />
      <Contact />
      <Footer />
    </Container>
  );
}
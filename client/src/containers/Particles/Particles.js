import React, { Component } from 'react'
import Particles from "react-tsparticles";

const randomColors = () => {
  setInterval(() => {
    const colorsArray = ['#695ca8', '#00acfc', '#fff', '#696969']
    return colorsArray[Math.floor(Math.random() * colorsArray.length)]
  }, 2000)
}
class ParticlesBG extends Component {
  constructor(props) {
    super(props);
    this.particlesInit = this.particlesInit.bind(this);
    this.particlesLoaded = this.particlesLoaded.bind(this);
  }

  particlesInit(main) {
    // console.log(main);
    // randomColors()
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  }

  particlesLoaded(container) {
    // console.log(container);
  }

  render() {
    return (
      <Particles
        id="tsparticles"
        init={this.particlesInit}
        loaded={this.particlesLoaded}
        options={{
          background: {
            color: {
              value: "#121212",
            },
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "window",
            events: {
              onClick: {
                enable: false,
                mode: "push",
              },
              onHover: {
                enable: false,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: randomColors(),
            },
            links: {
              color: "#eee",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 0.24,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.3,
              random: true,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
              anim: {
                enable: true,
                random: true
              }
            },
          },
          detectRetina: true,
        }}
      />
    );
  }
}

export default ParticlesBG
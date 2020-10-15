import React from "react"
import Container from '../components/Container'
import "../styles/about.scss"
export default function About() {
  return (<Container>
    <div className="About">
      <div className="About__texto">
      <h1>About Me</h1> 
      <p>
        I'm Carlos Córdova, I studied Systems Engineer at the Continental University.
        I'm 24 year old and I live in Huancayo Perú.
        <br />
        I'm Front-End Developer with <a href="https://vuejs.org/" rel="noreferrer" className="morado" target="_blank">Vue Js</a> and now I learning <a href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer" className="morado">Gatsby Js</a>
      </p>
      </div>
      <div className="About__img">
        <img src="https://media-cdn.tripadvisor.com/media/photo-s/06/ef/dd/75/plaza-de-la-contitucion.jpg"
        alt="Imagen Huancayo" />
      </div>
    </div> 
    </Container>)
}


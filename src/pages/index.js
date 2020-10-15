import React from "react"
import Container from '../components/Container'
import Slider from '../components/Home/Slider'

export default function Home() {
  return (
    <Container>
    <Slider />
    <div className="Home">
      <h1>This is my first project in <a href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer" className="morado">Gatsby Js</a></h1>
    </div>
    </Container>
    )
}

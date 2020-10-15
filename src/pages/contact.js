import React from 'react'
import Container from '../components/Container'
import Formulario from '../components/Contact/Formulario'
import "../styles/contact.scss"
export default function contact() {
    return (
        <Container>
           <div className="Contacto">
           <h1>Contact Me</h1> 
           <Formulario />
           </div>           
        </Container>
    )
}

import React from 'react'
import { Link } from 'gatsby'
import Gatsby from '../img/gatsby.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faAddressCard, faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
    return (
        <div className="Navbar">
            <div className="Navbar__ancho">
            <div className="Navbar__logo">
            <img src={Gatsby} alt="Logo Gatsby"/> <h2>First Gastby</h2>
            </div>
            <ul className="Navbar__contenedor">
            <li><Link className="Navbar--lista" to="/"><FontAwesomeIcon icon={faHome} /> Home</Link></li>
            <li><Link className="Navbar--lista" to="/about"><FontAwesomeIcon icon={faAddressCard} /> About</Link></li>
            <li><Link className="Navbar--lista" to="/contact"><FontAwesomeIcon icon={faEnvelope} /> Contact</Link></li>
            </ul>
            </div>
        </div>
    )
}

import React from 'react'
import "../styles/footer.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faTwitterSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons'
export default function Footer() {
    return (
        <div className="Footer">
            <div className="Footer__contenedor">
                <div className="Footer__info">
                    <p>Carlos C. Dev. &copy; 2020</p>
                </div>
                <div className="Footer__social">
                <a href="https://www.facebook.com/carloscdev/" rel="noreferrer" className="socialIcon" target="_blank"><FontAwesomeIcon icon={faFacebookSquare} /> </a>
                <a href="https://twitter.com/carloscdev" rel="noreferrer" className="socialIcon" target="_blank"><FontAwesomeIcon icon={faTwitterSquare} /> </a>
                <a href="https://www.instagram.com/carlosc.dev/" rel="noreferrer" className="socialIcon" target="_blank"><FontAwesomeIcon icon={faInstagramSquare} /> </a>
                </div>
            </div>
        </div>
    )
}

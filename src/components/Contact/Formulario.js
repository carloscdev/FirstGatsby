import React from 'react'

export default function Formulario() {
    return (
        <div className="Contacto__formulario">
            <form className="Contacto__formulario--contenedor">
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Celphone" />
                <input type="mail" placeholder="Email" />
                <input type="text" placeholder="Subject" />
                <textarea row="10"></textarea>
                <button className="botonContacto">Send Mail</button>
            </form>
        </div>
    )
}

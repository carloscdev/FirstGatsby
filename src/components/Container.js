import React from 'react'
import Navbar from "./Navbar"
import Footer from "./Footer"
import "../styles/global.scss"

export default function Container({children}) {
    return (
        <div>
            <Navbar />        
        <div className="Container">
            {children}        
        </div> 
            <Footer />
        </div>
        )
}

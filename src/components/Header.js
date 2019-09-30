import React from 'react'

import { IoMdContact } from 'react-icons/io'

import './Header.css'
import logo from '../assets/logo.png'

function Header() {
    return (
        <div className="header">
            <img src={logo} className="logo" />
            
            <span className="header-profile">
                Meu perfil
                <IoMdContact className="user-icon" />
            </span>
        </div>
    )
}

export default Header
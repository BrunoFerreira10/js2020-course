import React from 'react'
import './Logo.css'
import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.png'

export default props => 
    <aside className="logo">
        <Link to="/" className="logo">
            <img src={logo} alt="logo"/>
        </Link>
    </aside>
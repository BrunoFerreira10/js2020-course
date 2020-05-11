import React from 'react'
import './Nav.css'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            {/* Refactor at home!! */}
            <a href="#/">
                <i className="fa fa-home"></i> Start
            </a>
            <a href="#/users">
                <i className="fa fa-users"></i> Users
            </a>
        </nav>
    </aside>
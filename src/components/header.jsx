import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
    return (
        <header>
            <h1>Header</h1>
            <ul>
                <li>
                    <Link to='/'>Home</Link>

                </li>
                <li>
                    <Link to='/name'>Name</Link>

                </li>
                <li>
                    <Link to='/photo'>Photo</Link>

                </li>
            </ul>
        </header>
    )
}

export default Header

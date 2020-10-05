import React from 'react'
import { Link } from 'gatsby'


const header = () => {
    return (
        <header>
            <Link to='/'>Home</Link>
            <Link to='/blog'>Blog</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/about'>About</Link>
        </header>
    )
}

export default header

import React from 'react'

const Navbar = () => {


    const handleScroll=(id) => 
    {
        document.getElementById(id).scrollIntoView({behavior:"smooth"});
    }
  return (
    <nav className='navbar'>
            <h1 className='logo'>MyPortfolio</h1>
            <ul className='nav-links'>
                <li onClick={() => handleScroll("hero")}>Home</li>
                <li onClick={() => handleScroll("about")}>About</li>
                <li onClick={() => handleScroll("skills")}>Skills</li>
                <li onClick={() => handleScroll("projects")}>Projects</li>
                <li onClick={() => handleScroll("contact")}>Contact</li>
            </ul>
    </nav>
  )
}

export default Navbar;
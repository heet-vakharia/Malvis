import React from 'react'
import heroImg from './../../../Assets/hero.jpg'
import './Navbar.scss'
const Navbar = ()=>{
    return(
        <div className='Navbar' id='Navbar'>
           
            <nav className='Navbar__nav'>
                <div className = 'Navbar__items'>
                    <a href=' ' className='Navbar__nav--malvis'>M<span className='Navbar__nav--malvis--A'>a</span>lvis</a>
                    <div className='Navbar__nav--item'>
                        <a href=' ' className = 'Navbar__nav--item--link'>Movies</a>
                    </div>
                    <div className='Navbar__nav--item'>
                        <a href= ' ' className='Navbar__nav--item--link'>Web Series</a>
                    </div>
                    <div className='Navbar__nav--item'>
                        <a href=' ' className='Navbar__nav--item--right' >Admin Login</a>
                    </div>
                </div>
                
                
            </nav>
            <img src = {heroImg} className='Navbar__heroImg' alt='Hero Img'/>
        </div>
    )
}

export default Navbar;
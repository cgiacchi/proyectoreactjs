import './Navbar.css';  
import CartWidget from '../CartWidget/CartWidget';
import React from 'react'

const Navbar = () => {
    return (
        <div className="row header__Navbar">
        <div className="col-lg-3">
            <a href="home"><img className="header__logo header__nav" src='./images/merlotblanco.png' alt="logo Merlot"></img></a>
            </div>
            <div className="col-lg-9">
            <nav className="header__menu" data-aos="zoom-in">
                <ul className="header__nav">
                    <li><a className="navbar-brand header__nav" href='/departamentos'>DEPARTAMENTOS</a></li>
                    <li><a className="navbar-brand header__nav" href='/suites'>SUITES</a></li>
                    <li><a className="navbar-brand header__nav" href='/studios'>STUDIOS</a></li>
                    <li><a className="navbar-brand header__nav" href='/spa'>SPA</a></li>
                    <a href='/carrito'><CartWidget/></a>
                </ul>
            </nav>     
        </div>
        </div>
        
    )
}
export default Navbar

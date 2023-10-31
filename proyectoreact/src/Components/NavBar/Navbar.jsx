import React from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css"

const NavBar = () => {
    return(
            <div className="row header__Navbar">
                        <div className="col-lg-9 header__nav">
                            <nav className="navbar navbar-expand-lg header__Navbar">
                                <div className="container-fluid">
                                    <Link className="navbar-brand" to={"/"}><img className="header__logo header__nav" src='../images/merlotbordo.png' alt="logo Merlot" width={200} /></Link>
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarNav">
                                    <ul className="navbar-nav header__nav">
                                        <li className="nav-item header__nav">
                                        <NavLink className="nav-link" aria-current="page" to="/category/suites" >SUITES</NavLink>
                                        </li>
                                        <li className="nav-item header__nav">
                                        <NavLink className="nav-link" to="/category/studios">STUDIOS</NavLink>
                                        </li>
                                        <li className="nav-item header__nav">
                                        <NavLink className="nav-link" to="/category/spa">SPA</NavLink>
                                        </li>      
                                    </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                        <div className="col-lg-3 cartWidget">
                            <CartWidget/>
                        </div>        
            </div>

    )
}

export default NavBar;
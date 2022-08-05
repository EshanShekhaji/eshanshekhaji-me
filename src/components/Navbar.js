import React from "react";


let navbarButtons = <ul className="nav-buttons">
<li className="nav-button-li"><a className="nav-button" href="."><span className="nav-btn-text">Home</span></a></li>
<li className="nav-button-li"><a className="nav-button" href="."><span className="nav-btn-text">About</span></a></li>
<li className="nav-button-li"><a className="nav-button" href="."><span className="nav-btn-text">Contact</span></a></li>
</ul>


export default function Navbar()
{
    return(
        <nav>
            <h1 className="nav-logo">eshanshekhaji<span className="bold">.me</span></h1>
            <a href="." className="toggle-button">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </a>
            {navbarButtons}
        </nav>
    )
}
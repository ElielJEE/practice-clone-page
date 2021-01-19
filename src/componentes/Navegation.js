import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navegation.css';

export default function Navegation(props) {  
    const [scroll, setScroll] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", actualiza)
    }, [])

    const actualiza = () => {
        if(window.pageYOffset > 100){
            setScroll(true)
        }else{
            setScroll(false)
        }
    }
    return(
        <nav className={scroll ? "navbar" : "navbar-top"}>
            <ul>
                <li>
                    <NavLink to={'/home'} activeClassName="active">
                        <span>Home</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/gallery'} activeClassName="active">
                        <span>Gallery</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/about'} activeClassName="active">
                        <span>About</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/button'} activeClassName="active">
                        <span>Button</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/contact'} activeClassName="active">
                        <span>Contact</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/comments'} activeClassName="active">
                        <span>Comments</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}
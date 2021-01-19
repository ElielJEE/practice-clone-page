import React,{Component} from 'react';
import { Link, NavLink } from 'react-router-dom';
import { GrFacebookOption, GrPinterest, GrInstagram } from 'react-icons/gr';
import './Footer.css';

export default class Footer extends Component {

    render() {
        return (
            <footer className="footer">
                <div className="footer-content">
                    <div className="side1">
                        <div>
                            <span className="footer-name">It Was Hers</span>
                        </div>
                        <div>
                            Copyright &copy; All rights reserved
                        </div>
                        <div>
                            <span className="privacy">Privacy</span>
                        </div>
                        <div className="reference">
                            Covered by 
                            <Link href="#"> Eliel el master </Link>
                            -
                            <a href="https://www.aliezinwaterland.com/" target="_blank" rel="noreferrer"> Orginal Site</a>
                        </div>
                    </div>
                    <div className="side2">
                        <ul>
                            <li>
                                <NavLink to={'/Comments'} className="footer-nav">
                                    <span>Comments</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={'/Contact'} className="footer-nav">
                                    <span>Contact</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={'/Videos'} className="footer-nav">
                                    <span>Videos</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={'/About'} className="footer-nav">
                                    <span>About</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={'/Gallery'} className="footer-nav">
                                    <span>Gallery</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={'/home'} className="footer-nav">
                                    <span>Home</span>
                                </NavLink>
                            </li>
                        </ul>
                        <div className="social-icons">
                            <ul>
                                <li className="icons">
                                    <a className="icon-link" href="https://www.instagram.com/ghostripping/" target="_blank" rel="noreferrer">
                                        <GrInstagram className="icon"/>
                                    </a>
                                </li>
                                <li className="icons">
                                    <a className="icon-link" href="https://www.facebook.com/profile.php?id=100054927326570" target="_blank" rel="noreferrer">
                                        <GrPinterest className="icon"/>
                                    </a>
                                </li>
                                <li className="icons">
                                    <a className="icon-link" href="https://www.facebook.com/profile.php?id=100054927326570" target="_blank" rel="noreferrer">
                                        <GrFacebookOption className="icon"/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
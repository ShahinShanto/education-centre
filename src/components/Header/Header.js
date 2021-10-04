import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/Logo-01.png';
import './Header.css';

const Header = () => {
    return (
        <div className="px-5">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/home">
                        <img src={Logo} alt="" width="130" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link text" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text" to="/services">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text" to="/blog">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text" to="/aboutus">About US</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
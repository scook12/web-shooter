import React, { Component } from 'react';
import logo from './logo.png';

class Top extends Component {
    render() {
        return (
            <nav className="navbar logo fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="index.html">
                        <img src={logo} className="img-fluid size" alt="" />
                    </a>
                </div>
            </nav>
        );
    }
}

export default Top;
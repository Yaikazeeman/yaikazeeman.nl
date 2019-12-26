import React, { Component } from 'react';
import './Nav.css';

export default class Nav extends Component {
    render() {
        return (
            <div class="nav-bar flex-container">
                <div class="logo-box">
                    <span ><span class="logo-small">Yaika</span><span class="logo"> || </span><span class="logo-small">Zeeman</span></span>
                </div>
                <div class="nav-links flex-container">
                    <a><p>HOME</p></a>
                    <a> <p>ABOUT</p></a>
                    <a> <p>EXPERIANCE</p></a>
                    <a> <p>SKILLS</p></a>
                    <a> <p>CONTACT</p></a>
                </div>
            </div>
        )
    }
}

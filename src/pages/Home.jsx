import React, { Component } from 'react';
import Nav from '../components/Nav';
import './Home.css';

export default class Home extends Component {
    render() {
        return (
            <div class="homepage">
                <Nav/>
                <div class="container-home">
                    <div class="flex-container homepage-div">
                        <div class="text-div">
                            <h1>I'm Yaika Zeeman</h1>
                            <h3>A junior web- and mobile-app developer.</h3>
                            <div class="social-links"> 
                                <a href="https://www.linkedin.com/in/yaika-zeeman/" > <i class="fa fa-linkedin-square"></i></a>
                                <a href="https://github.com/Yaikazeeman"> <i class="fa fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react';
import Nav from '../components/Nav';
import './Home.css';

export default class Home extends Component {
    render() {
        return (
            <div class="homepage">
                
                <div class="container-home">
                    <div class="homepage-div">
                        <div class="text-div">
                            <h1>I'm Yaika Zeeman</h1>
                            <h3>A junior web- and mobile-app developer.</h3>
                        </div>
                        <div class="content-div flex-container">
                            <div class="leftside-container">
                                <img src="/images/yaika-zeeman.JPG" alt="Yaika Zeeman"/>
                                <div class="leftside-text-div">
                                    <h3>About me</h3>
                                    <h4>Born: 29-08-1997</h4>
                                    <h4>Home: Utrecht</h4>
                                    <h4>Email: yaikazeeman@gmail.com</h4>
                                    <h4>Nationality: Dutch</h4>
                                    <h4>Languages: Dutch, English</h4>
                                </div>
                                <div class="social-links"> 
                                <a href="https://www.linkedin.com/in/yaika-zeeman/" target="_blank" > <i class="fa fa-linkedin-square"></i></a>
                                <a href="https://github.com/Yaikazeeman" target="_blank"> <i class="fa fa-github"></i></a>
                        </div>
                            </div>
                            <div class="rightside-container">
                                <h2>Experience</h2>
                                <div class="experience-item">
                                    
                                    <div class="experience-text-div">
                                        <h3>Vollce</h3>
                                        <p class="date">09/2019 - now</p>
                                        <p>Web- and mobile-app developer</p>
                                    </div>
                                    <div class="experience-text-div">
                                        <h3>Bol.com</h3>
                                        <p class="date">02/2019 - 06/2019</p>
                                        <p>Intern online-merchandising</p>
                                    </div>
                                    <div class="experience-text-div">
                                        <h3>Ijsvogel retail</h3>
                                        <p class="date">02/2018 - 08/2018</p>
                                        <p>Intern online-marketing</p>
                                    </div>
                                    <div class="experience-text-div">
                                        <h3>Ruiter en dier Zeeman</h3>
                                        <p class="date">02/2018 - 08/2019</p>
                                        <p>Sales assistent</p>
                                    </div>
                                </div>
                            </div>
                        </div>
   
                        <div class="projects">
                            <h2>Projects</h2>
                            <div class="project-container flex-container">
                                <a href="https://ultracoin.yaikazeeman.nl/" target="_blank">
                                    <div class="project-item">
                                        <h3>Ultracoin</h3>
                                        <h4>Javascript game for desktop</h4>
                                    </div>
                                </a>
                                <a href="https://petstagram-yaika.herokuapp.com/login" target="_blank">
                                    <div class="project-item">
                                        <h3>Petstagram</h3>
                                        <h4>Instagram for pet-owners</h4>
                                    </div>
                                </a>
                                <a>
                                    <div class="project-item">
                                        <h3>Vollce connect</h3>
                                        <h4>Mobile app for the Vollce V1</h4>
                                    </div>
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

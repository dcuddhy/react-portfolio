import React, { Component } from 'react';
import ProfileImage from "../assets/images/profile.png";


class Header extends Component {
    render() {
        return (
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <img id="profile-image" className="img-responsive" src={ProfileImage} alt="" />
                            <div className="intro-text">
                                <span className="name">Software Engineer</span>
                                <hr className="star-light"></hr>
                                <span className="skills">Web Developer & User Interface Designer</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;

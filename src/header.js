import React, { Component } from 'react';


class Header extends Component {
    render() {
        return (
            <header>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <img id="profile-image" class="img-responsive" src="img/profile2.png" alt="" />
                            <div class="intro-text">
                                <span class="name">Software Engineer</span>
                                <hr class="star-light"></hr>
                                <span class="skills">Web Developer & User Interface Designer</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;

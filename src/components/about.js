import React, { Component } from 'react';


class About extends Component {
    render() {
        return (
            <section className="success" id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2>About</h2>
                            <hr className="star-light" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-lg-offset-2">
                            <p>I'm a front end software engineer.  I've been at it professionally since 2015.  But before that, I spent years building static websites for hobby projects and eventually for my own photography business.</p>
                        </div>
                        <div className="col-lg-4">
                            <p>As a former photographer, I have a great eye for detail.  I love putting a polish on projects.  I can produce beautiful mockups or execute pixel perfect pages or components from your designer's vision.</p>
                        </div>
                        <div className="col-lg-8 col-lg-offset-2 text-center">
                            <a className="btn btn-lg btn-outline">
                                <i className="fa fa-download"></i> Download
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;

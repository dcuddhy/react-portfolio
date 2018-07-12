import React, { Component } from 'react';


class Resume extends Component {
    render() {
        return (
            <section className="success" id="resume">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2>Resume</h2>
                            <hr className="star-light" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-lg-offset-3">
                            <p>Would you like to know more?  You can download my resume and find me on LinkedIn among other places.  I'm easy to find.</p>
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

export default Resume;

import React, { Component } from 'react';


class Resume extends Component {
    render() {
        return (
            <section class="success" id="resume">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 text-center">
                            <h2>Resume</h2>
                            <hr class="star-light" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 col-lg-offset-3">
                            <p>Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional LESS stylesheets for easy customization.</p>
                        </div>
                        <div class="col-lg-8 col-lg-offset-2 text-center">
                            <a class="btn btn-lg btn-outline">
                                <i class="fa fa-download"></i> Download
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Resume;

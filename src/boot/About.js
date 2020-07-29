import React from 'react';
import about from '../about-3.jpg'
class About extends React.Component{
    render(){
        return(
            <div className="all-about" id="about">
                <div className="about1">
                    <img src={about} className="wow fadeIn" data-wow-duration="1s" data-wow-delay=".2s">
                    </img>
                </div>
                <div className="about2">
                    <h2 className="wow fadeIn" data-wow-duration="1s" data-wow-delay=".3s">About Us</h2>
                    <p className="wow fadeIn" data-wow-duration="1s" data-wow-delay=".4s">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum,</p>
                    <div className="about wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".5s">
                        <h3>Who we are</h3>
                        <p>There are many vtions of passages of Lorem Ipsum available, but the majority have suffered.</p>
                    </div>
                    <div className="about wow fadeInRight" data-wow-duration="1s" data-wow-delay=".6s">
                        <h3>Who we are</h3>
                        <p>There are many vtions of passages of Lorem Ipsum available, but the majority have suffered.</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default About;
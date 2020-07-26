import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

class Secslider extends React.Component{
render(){
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        lazyLoad: 'ondemand',
        autoplay:true,
        slidesToScroll: 1,
        centerPadding:'70px',

         responsive: [
                            {
                              breakpoint: 1200,
                              settings: {
                                slidesToShow: 4,
                                slidesToScroll: 1
                              }
                            },
                            {
                              breakpoint: 1008,
                              settings: {
                                slidesToShow: 3,
                                slidesToScroll: 1
                              }
                            },
                            {
                              breakpoint: 800,
                              settings:{
                                slidesToShow: 2,
                                slidesToScroll: 1
                              }
                            },
                            {
                              breakpoint: 600,
                              settings:{
                                slidesToShow: 2,
                                slidesToScroll: 1
                              }
                            }

                          ]
    };
    return(
        <div className="second" id="work">
            <h2 className="wow fadeIn" data-wow-duration="2s" data-wow-delay=".3s">Our Works</h2>
            <p className="wow fadeInUp" data-wow-duration="2s" data-wow-delay=".3s">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
        <Slider {...settings} >



        <div class="container">
  <img src="images/sec1.jpg" alt="Avatar" class="image"/>
  <div class="overlay">
  <div className="text">
        <p>Development</p>
        <span>getting text to the big </span>
        <br></br>
        <button>Case Studr</button>
        </div>
  </div>
</div>
<div class="container">
  <img src="images/sec2.jpg" alt="Avatar" class="image"/>
  <div class="overlay">
  <div className="text">
        <p>Development</p>
        <span>getting text to the big </span>
        <br></br>
        <button>Case Studr</button>
        </div>
  </div>
</div>
<div class="container">
  <img src="images/sec3.jpg" alt="Avatar" class="image"/>
  <div class="overlay">
  <div className="text">
        <p>Development</p>
        <span>getting text to the big </span>
        <br></br>
        <button>Case Studr</button>
        </div>
  </div>
</div>
<div class="container">
  <img src="images/sec4.jpg" alt="Avatar" class="image"/>
  <div class="overlay">
  <div className="text">
        <p>Development</p>
        <span>getting text to the big </span>
        <br></br>
        <button>Case Studr</button>
        </div>
  </div>
</div>
<div class="container">
  <img src="images/sec1.jpg" alt="Avatar" class="image"/>
  <div class="overlay">
  <div className="text">
        <p>Development</p>
        <span>getting text to the big </span>
        <br></br>
        <button>Case Studr</button>
        </div>
  </div>
</div>
<div class="container">
  <img src="images/sec2.jpg" alt="Avatar" class="image"/>
  <div class="overlay">
  <div className="text">
        <p>Development</p>
        <span>getting text to the big </span>
        <br></br>
        <button>Case Studr</button>
        </div>
  </div>
</div>
<div class="container">
  <img src="images/sec3.jpg" alt="Avatar" class="image"/>
  <div class="overlay">
  <div className="text">
        <p>Development</p>
        <span>getting text to the big </span>
        <br></br>
        <button>Case Studr</button>
        </div>
  </div>
</div>
<div class="container">
  <img src="images/sec4.jpg" alt="Avatar" class="image"/>
  <div class="overlay">
  <div className="text">
        <p>Development</p>
        <span>getting text to the big </span>
        <br></br>
        <button>Case Studr</button>
        </div>
  </div>
</div>
{/* <div class="container">
      <img src="images/sec4.jpg"className="image"/>
  <div class="overlay">
    <div className="text">
        <p>Development</p>
        <span>getting text to the big </span>
        <button>Case Studr</button>
        </div>
  </div>
</div> */}


      </Slider>

      </div>
    )
}
}

export default Secslider;
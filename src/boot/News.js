import React from 'react';
import blog1 from '../blog-01.jpg';
import blog2 from '../blog-02.jpg';
import blog3 from '../blog-03.jpg';

class News extends React.Component{
  render(){
      return(
  
        <div className="news" id="news">
        <h2>Latest News</h2>
        <h3>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</h3>
        <div className="all-news">
        <div class="container wow slideInLeft" data-wow-duration="1.5s" data-wow-delay=".3s">
        <img src={blog1} alt="Avatar" class="image"/>
        <div class="overlay">
        <div class="text">
                <p>Design</p>
            <span>the home of the future cloud babes</span>
           <br></br> <button>LEARN MORE...</button>
            </div>
          </div>
        </div>
        <div class="container wow fadeIn" data-wow-duration="1.5s" data-wow-delay=".9s">
        <img src={blog2} alt="Avatar" class="image"/>
        <div class="overlay">
        <div class="text">
                <p>Design</p>
            <span>the home of the future cloud babes</span>
           <br></br> <button>LEARN MORE...</button>
            </div>
          </div>
        </div>
        <div class="container wow slideInRight" data-wow-duration="1.5s" data-wow-delay=".7s">
        <img src={blog3} alt="Avatar" class="image"/>
        <div class="overlay">
        <div class="text">
                <p>Design</p>
            <span>the home of the future cloud babes</span>
           <br></br> <button>LEARN MORE...</button>
            </div>
        </div>
        </div>
    </div>
        </div>
     
      
      )
  }
}
export default News;
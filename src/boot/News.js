import React from 'react';
class News extends React.Component{
  render(){
      return(
  
        <div className="news" id="news">
        <h2>Latest News</h2>
        <h3>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</h3>
        <div className="all-news">
        <div class="container wow slideInLeft" data-wow-duration="1.5s" data-wow-delay=".3s">
        <img src="images/blog-01.jpg" alt="Avatar" class="image"/>
        <div class="overlay">
        <div class="text">
                <p>Design</p>
            <span>the home of the future cloud babes</span>
           <br></br> <button>LEARN MORE...</button>
            </div>
          </div>
        </div>
        <div class="container wow fadeIn" data-wow-duration="1.5s" data-wow-delay=".9s">
        <img src="images/blog-02.jpg" alt="Avatar" class="image"/>
        <div class="overlay">
        <div class="text">
                <p>Design</p>
            <span>the home of the future cloud babes</span>
           <br></br> <button>LEARN MORE...</button>
            </div>
          </div>
        </div>
        <div class="container wow slideInRight" data-wow-duration="1.5s" data-wow-delay=".7s">
        <img src="images/blog-03.jpg" alt="Avatar" class="image"/>
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
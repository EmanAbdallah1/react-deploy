import React from 'react';
import $ from "jquery";
class Counter extends React.Component{
    componentDidMount=()=>{
      $('.counter').each(function() {
        var $this = $(this),
            countTo = $this.attr('data-count');
        
        $({ countNum: $this.text()}).animate({
          countNum: countTo
        },
      
        {
      
          duration: 6000,
          easing:'linear',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            $this.addClass('done');
          }
      
        });  
        
        
      
      });
    }
    render(){

return(
     <div className="all-counters" id="facts">
         <h2>Our Fun Facts</h2>
         <div class="container">
  <div class="row">
    <div class="col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2">
      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-6  "> 
          <div class="counter-wrapper wow jackInTheBox" data-wow-duration="5s" data-wow-delay=".3s">
            <div class="counter" data-count="23">0</div> 
            <div class="counter-info">Years as a credentialed Tour Manufacturer</div>
          </div>        </div>
        <div class="col-lg-4 col-md-6 col-sm-6  ">
          <div class="counter-wrapper counter-wrapper wow jackInTheBox" data-wow-duration="5s" data-wow-delay=".5s">
            <div class="counter" data-count="100">0</div>
            <div class="counter-info">
              Tour Pros using Foresight Sports technology
            </div>
          </div>
        </div>
        <div class= "col-lg-4 col-md-6 col-sm-6 ">
          <div class="counter-wrapper counter-wrapper wow jackInTheBox" data-wow-duration="5s" data-wow-delay=".7s">
            <div class="counter" data-count="5">0</div>
            <div class="counter-info">
              PGA Tours using Foresight Sports technology
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
)
    }
}
export default Counter;

import React from 'react';
import twoo from '../02.jpg';
import threee from '../03.jpg';
import onee from '../010.jpg';
import twwoo from '../020.jpg';
import thrre from '../030.jpg';
import four from '../040.jpg';



class Footer extends React.Component{
    render(){
        return(
            <div class="footer" id="footer">
  <div className="container">
    <div className="row">
      <div className="col-lg-3 col-md-6 col-sm-6 col-xm-12">
        <div className="footer-widget">
          <h3>Stay in touch</h3>
          <div className="footer-widget-content">
            <a href="mailto:sales@example.com" class="contact-link">sales@example.com</a>
            <a href="mailto:support@example.com" class="contact-link red"> support@example.com </a>
            <a href="tel:0121234" class="contact-link">(123) 456-789</a>
            <div className="footer-social">
            <ul>
              <li><a href="#"><i className="fa fa-facebook"></i></a></li>
              <li><a href="#"><i className="fa fa-twitter"></i></a></li>
              <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
              <li><a href="#"><i className="fa fa-youtube"></i></a></li>
              <li><a href="#"><i className="fa fa-rss"></i></a></li>
            </ul>
              </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-6 col-xm-12">
      <div className="footer-widget">
        <h3>Latest Events</h3>
        <div className="footer-widget-content">
          <div className="media">
              <div className="media-left">
                 <a href="#"><img className="media-object" src={threee} alt="..."/></a>
              </div>
              <div className="media-body">
                 <p><a href="#">vulputate velit esse consequat. </a></p>
              </div>
           </div>
          <div className="media">
              <div class="media-left">
                 <a href="#"><img class="media-object" src={twoo} alt="..."/></a>
              </div>
              <div className="media-body">
                 <p><a href="#">vulputate velit esse consequat. </a></p>
              </div>
           </div>
        </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-6 col-xm-12">
      <div className="footer-widget">
        <h3>Opening Hour</h3>
        <div className="footer-widget-content">
        <div className="open-time ">
          <ul className="opening-time">
            <li><span><i class="fa fa-times"></i></span><p class="clock-time"><strong>monday :</strong> closed</p>
             </li>
            <li><span><i class="fa fa-check"></i></span><p><strong>tue-fri :</strong> 8am - 12am</p></li>
            <li><span><i class="fa fa-check"></i></span><p><strong>sat-sun :</strong> 7am - 1am</p></li>
            <li><span><i class="fa fa-check"></i></span><p><strong>holydays :</strong> 12pm-12am</p></li>
          </ul>
           </div>
        </div>
        </div></div>
      
      <div className="col-lg-3 col-md-6 col-sm-6 col-xm-12">
      <div className="footer-widget">
        <h3>Latest Events</h3>
        <div className="footer-widget-content">
          <div className="images-gellary">
            <ul>
              <li><a href="#"><img src={onee}alt="Instagram 01"/></a></li>
              <li><a href="#"><img src={twwoo}  alt="Instagram 02"/></a></li>
                <li><a href="#"><img src={onee}alt="Instagram 01"/></a></li>
              <li><a href="#"><img src={four}  alt="Instagram 04"/></a></li>
   
            </ul>
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
export default Footer;
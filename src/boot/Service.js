import React from 'react';
import axios from 'axios';
import WOW from 'wowjs';
import myJson from '../Data/data.json'

import {
    Card, CardTitle, CardText,
    CardBody
} from 'reactstrap';
class Service  extends React.Component{
    state={
        service:[]
    }
    componentDidMount(){
        // axios.get('js/data.json').then(res=>{ this.setState({service: res.data.service})})  ;
        this.setState({
            service: myJson["service"]
        })
        new WOW.WOW().init();
    }
    render(){
        const{service}=this.state;
        const servicelist=service.map((serviceItem)=>{
            return(


                <Card className="ser"  key={serviceItem.id}>
                    <CardBody>
                        <i className={serviceItem.icon}></i>
                        <CardTitle>{serviceItem.titlle}</CardTitle>
                        <CardText>{serviceItem.bodyy}</CardText>

                    </CardBody>

                </Card>


            )
        })





        return(
            <div className="service" id="servivce">
                <div className="servie1">
                    <h2 className="wow flipInX" data-wow-duration="2s" data-wow-delay=".5s">Services</h2>
                    <p className="wow fadeIn" data-wow-duration="2s" data-wow-delay=".6s">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                    <span className="wow fadeIn" data-wow-duration="2s" data-wow-delay=".7s">Request Custom Service</span>
                    <hr className="wow fadeIn" data-wow-duration="2s" data-wow-delay=".8s"></hr>

                </div>
                <div className="servie2 wow zoomIn" data-wow-duration="2s" data-wow-delay=".9s">
                    {servicelist}
                </div>

            </div>
        )
    }
}
export default Service;
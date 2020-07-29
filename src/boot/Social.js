import React from 'react';
import axios from 'axios';
import WOW from 'wowjs';
// import Rellax from 'rellax';
import myJson from '../Data/data.json'

import {
    Card, CardTitle, CardText,
    CardBody
} from 'reactstrap';
class Social extends React.Component{
    state={
        social:[]
    }
    componentDidMount(){
        // axios.get('js/data.json').then(res=>{ this.setState({social: res.data.social})})  ;
        new WOW.WOW().init();
        //  new Rellax('.rellax', {
        //     speed: -2,
        //     center: false,
        //     wrapper: null,
        //     round: true,
        //     vertical: true,
        //     horizontal: false
        //   });

        this.setState({
            social: myJson["social"]
        })
    }
    render(){
        const{social}=this.state;
        const sociallist=social.map((socialItem)=>{
            return(

                <div className="social" key={socialItem.id}>

                    <Card>
                        <CardBody>
                            <img src={socialItem.image} ></img>
                            <CardTitle>{socialItem.title}</CardTitle>
                            <CardText>{socialItem.body}</CardText>

                        </CardBody>

                    </Card>


                </div>

            )
        })
        return(

            <div className="social-media ">
                <h2 className="wow fadeIn" data-wow-duration="2s" data-wow-delay=".3s">A digital agency.</h2>
                {sociallist}
            </div>
        )
    }

}
export default Social;

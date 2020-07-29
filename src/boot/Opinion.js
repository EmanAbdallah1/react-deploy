import React from 'react';
import axios from 'axios';
import myJson from '../Data/data.json'

class Opinion extends React.Component{
    state={
        images:[],
        img:[]
    }
    componentDidMount(){
        // axios.get('js/data.json').then(res=>{ this.setState({images: res.data.images})})  ;
        // axios.get('js/data.json').then(res=>{ this.setState({img: res.data.img})})  ;
        this.setState({
            images: myJson["images"],
            img: myJson["img"]
        })
       
    }
    render(){
     
        const{images}=this.state;
        const imageslist=images.map((imagesItem)=>{
            return(
            <img src={imagesItem.image}/>
                )
        })


        const{img}=this.state;
        const imglist=img.map((imgItem)=>{
            return(
            <img src={imgItem.image}/>
                )
        })
        return(
            <div className="opinion">
          <h2 class="counter-wrapper wow jackInTheBox" data-wow-duration="2s" data-wow-delay=".3s">Aklima The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.</h2>
        <div className="img-row wow fadeIn" data-wow-duration="2s" data-wow-delay=".6s">
            {imageslist}
        </div>
        <div className="img-row2 wow fadeIn" data-wow-duration="1s" data-wow-delay=".9s">
            {imglist}

        </div>
        </div>
          )
    }
}
export default Opinion;
import React from 'react';
import axios from 'axios';

class Team extends React.Component{
    state={
        teamimg:[]
    }
    componentDidMount(){
        axios.get('js/data.json').then(res=>{ this.setState({teamimg: res.data.teamimg})})  
    }
    
    render(){
            const{teamimg}=this.state;
            const teamimglist=teamimg.map((teamimgItem)=>{
                return(
                    <div class="container">
                        <div className="imgg"> <img src={teamimgItem.image} alt="Avatar" class="imagee" /></div>
                   
                    <div class="overlay">
                      <div class="text">
                          <p>{teamimgItem.text}</p>
                      <span>{teamimgItem.textt}</span>
           
                      </div>
                    </div>
                    </div>
                )
            })
            return(
            <div className="newss" id="team">
            <h2 class="counter-wrapper wow jackInTheBox" data-wow-duration="2s" data-wow-delay=".3s">Skilled Team</h2>
            <p >There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
            <div className="all-news">
             {teamimglist}
            </div>
        
            </div>
        )
    }
}

export default Team;
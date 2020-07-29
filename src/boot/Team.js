import React from 'react';
import myJson from '../Data/data.json';
class Team extends React.Component{
    state={
        teamimg:[]
    } 
    componentDidMount(){
        this.setState({
            teamimg: myJson["teamimg"]
        })
        console.log(myJson["teamimg"][0])
    }
    render(){
        console.log(this.props)
            return(
            <div className="newss" id="team">
            <h2 class="counter-wrapper wow jackInTheBox" data-wow-duration="2s" data-wow-delay=".3s">Skilled Team</h2>
                <p >There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
            <div className="all-news">
             {this.state.teamimg.map((teamimgItem)=>{
                 return(
                     <div class="container">
                         <div className="imgg"> <img src={teamimgItem.image} alt="Avatar" class="imagee" /></div>

                         <div class="overlay">
                             <div class="text">
                                 <p>{teamimgItem.text}</p>
                                 <p>{teamimgItem.text}</p>
                                 <span>{teamimgItem.textt}</span>

                             </div>
                         </div>
                     </div>
                 )
             })}
            </div>
        
            </div>
        )
    }
}

export default Team;
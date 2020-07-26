import React from 'react';
import axios from 'axios';

class Company extends React.Component{
    state={
        company:[]
    }
    componentDidMount(){
        axios.get('js/data.json').then(res=>{ this.setState({company: res.data.company})})  
    }
    render(){
        const{company}=this.state;
        const companylist=company.map((companyItem)=>{
            return(
        <img src={companyItem.image}/>
            )
        })
        return(
        <div className="brands wow fadeIn" data-wow-duration=".3s" data-wow-delay=".1s">{companylist}</div>
        )
    }
}
export default Company;
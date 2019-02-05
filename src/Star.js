import React, { Component } from 'react';



class StarRating extends Component{
    construcror(props){
        this.state = {
            StarSelected:0
        }
    }
    duSums = () => {
    this.li1ref.className = "work"
        
    }
    render(){
        return(
            <ul>
            <li className="work" ref={(node)=>{this.li1ref = node}}></li>   
            <li ref={(node)=>{this.li2ref = node}}></li>   
            <li ref={(node)=>{this.li3ref = node}}></li>   
            </ul>
            
            
        )
    }
}

    StarRating.defaultProps = {
        totalStars: 5
    }


export default StarRating
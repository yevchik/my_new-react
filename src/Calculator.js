import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';

const Numb =({numeration,onClick=f=>f},className) =>
<div className={numeration + " numbers"} onClick={onClick}>{numeration} </div>

class Calculator extends React.Component{
    constructor(props){
        super(props)
            this.state = {
                summe:"",
                number:10,
                number_point:[]
            }
            this.Plus = this.Plus.bind(this);
            this.Result = this.Result.bind(this);
            this.Reborn = this.Reborn.bind(this);
            this.Pluser = this.Pluser.bind(this);
    }
    
    Plus(i){
        this.state.summe = this.state.summe + i;
        
        console.log(i+" -i");
        console.log(this.state.summe);
    }
    
    Result(){
        this.state.summe = eval(this.state.summe) + "";
        this.Pluser(this.state.summe);
        console.log(this.state.summe);
    }
    
    Reborn(){
        this.state.summe = "";
    }
    
    Pluser(point){
        this.state.number_point.push(point);
        console.log(this.state.number_point);
        this.setState((props)=>{
            return {number_point:this.state.number_point}
        })
    }
    render(){
        return(
            <div id="Calculator">
                {[...Array(this.state.number)].map((n,i)=>
                <Numb numeration={i} onClick={() =>this.Plus(i)} key={i}></Numb>)}
                <div onClick={()=>this.Plus("-")} className="numbers -">-</div>
                <div onClick={()=>this.Plus("+")} className="numbers +">+</div>
                <div onClick={()=>this.Result()} className="numbers =">=</div>
                <div onClick={()=>this.Reborn()} className="Erase numbers">Erase</div>
                <div>{this.state.number_point.map((n,i)=>
                <Numb key={i} numeration={n}></Numb>)}</div>           
            </div>         
        )
    }
}
export default Calculator;
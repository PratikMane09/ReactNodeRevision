import React, { Component } from 'react'
import Child from './components/Child'
import Didmount from './components/Didmount'
export default class App extends Component 
{ 
  constructor()
   {  
    super() 
     this.state={
         counter:0,show:false  
    }  
     console.log("Constructor Called") 
    } componentDidUpdate()
     {  
      if(this.state.counter<5)  
      {  this.setState({counter:this.state.counter+1}) 
       console.log("Update called") 
       } } 
       render() {  console.log("Mounting") 
        return (   <div>  
            <h1>Class Component Life Cycle</h1>       
            <button onClick={()=>this.setState({counter:this.state.counter+1})}>Change state</button><br/><br/>  
              {this.state.show?<Child counter={this.state.counter}/>:null}   
               <button onClick={()=>this.setState({show:!this.state.show})}>Toggle</button>   
               <Didmount/>
               </div>  ) 
      }}
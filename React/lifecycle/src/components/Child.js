import React, { Component } from 'react'
export default class Child extends Component
 {  constructor() 
    {    super()    
    this.state={      qty:0    }  } 
     componentWillUnmount()  {    console.log("Now Child is hidden")  } static getDerivedStateFromProps(props,state)  {    console.log(props,state)  }  getSnapshotBeforeUpdate(preprop,prestate)  {    console.log(preprop,prestate)  } render() {  return (   <div>    <h2>{this.props.counter}</h2>    <h2>Child Component</h2>    <h3>Quantity: {this.state.qty}</h3>    <button onClick={()=>this.setState({qty:this.state.qty+10})}>Change Quantity</button>   </div>  ) }}
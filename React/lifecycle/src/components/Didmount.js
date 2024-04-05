import React, { Component } from 'react'

export default class Didmount extends Component {
    constructor()
    {
        super()
        console.log("constructor")
        this.state={
            data:false
        }
    }
    componentDidMount(){
        console.log("componentDidmount")
        this.setState({data:true})
    }
    shouldComponentUpdate(preprop,prestate)
    {
        if(this.state.item ===3)
        {
            return false
        }
        else{
            return true
        }
    }
  render()
   {
    console.log("render")
    return (
      <div>
        <h1>component DisMount Method</h1>
        <h2>{this.state.data}</h2>
        <h2>{this.state.item}</h2>
        <button onClick={()=>this.setState({item:this.state.item+1})}>Update</button>
      </div>
    )
  }
}

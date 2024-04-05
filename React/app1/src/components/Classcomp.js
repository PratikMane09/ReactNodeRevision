import React from 'react'
import style from './style1.module.css'
class Classcomp extends React.Component
{
    constructor()
    {
        super()
        this.state={
            name:"AAA",
            count:0
        }
    }
    change()
    {
        this.setState({
            name:"Sevenmentor",
            count:this.state.count+1
        })
    }
    minus()
    {
        this.setState({
            count:this.state.count-1
        })
    }
    render()
    {
        return (
            <div>
        <h1>Class  Component</h1>
        <h2 className={style.head1}>My name is {this.state.name}</h2>
        <h2>Counter is {this.state.count}</h2>
        <button onClick={()=>this.change()}>Change State</button>
        <button onClick={()=>this.minus()}>Decrement</button>
        </div>
        )
    }
}
export default Classcomp
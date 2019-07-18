import React, { Component } from 'react'

export default class right extends Component {
    render() {
        console.log(this.props.item)
        return (
            <div>
                {this.props.item.map((item,index)=>{
                    return <li key={index}>{item}</li>
                })}
            </div>
        )
    }
}

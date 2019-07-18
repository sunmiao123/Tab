import React, { Component } from 'react'
import Right from './right'
import './style.css'
export default class left extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 0,
            // back:'',
            list: [
                {
                    tit: "食品",
                    name: ['薯片', '辣条', '旺仔', 'AD钙', '棒棒糖']
                },
                {
                    tit: '水果',
                    name: ['苹果', '香蕉', '芒果', '火龙果', '猕猴桃']
                },
                {
                    tit: '品牌',
                    name: ['李宁', '安踏', '特步', '鸿星尔克', '以纯']
                },
                {
                    tit: '美妆',
                    name: ['兰蔻', '珀莱雅', '百雀羚']
                }
            ]
        }
    }
    clickFn(index){
        // console.log(index,'index')
        this.setState({
            num: index
        })
        // console.log(this.state.num)
    }
    render() {
        // console.log(this.state.list[this.state.num].name)
        // console.log(this.state.num)
        return (
            <div>
                <ul className='left'>
                    {this.state.list.map((item, index) => {
                        return <li key={index} className={this.state.num==index?'active':''} onClick={this.clickFn.bind(this,index)}>{item.tit}</li>
                    })}
                </ul>
                {/* {this.state.list[this.state.num].name.map((item,index)=>{
                    return <span>{item}</span>
                })} */}
                <Right item={this.state.list[this.state.num].name}></Right>
            </div>
        )
    }
}

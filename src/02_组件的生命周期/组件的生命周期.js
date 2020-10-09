import React, { Component } from 'react'

class ChildCpn extends Component {
  render(){
    return(
      <div>我是ChildCpn组件</div>
    )
  }
  componentWillUnmount(){
    console.log('我是ChildCpn中的componentWillUnmount方法');
  }
}

export default class App extends Component {
  constructor() {
    super();
    console.log('我是constructor方法');
    this.state = {
      name: "sky",
      isShow: true
    }
  }
  render() {
    const { name, isShow } = this.state;
    console.log('我是render方法');
    return (
      <div>
        <h2>我是生命周期</h2>
        <h2>{ name }</h2>
        <button onClick={ e => this.ContextChange()}>改变文本</button>
        <hr/>
        <button onClick={ e => this.ChildCpnChange()}>childCpn切换</button>
        { isShow && <ChildCpn />}
      </div>
    )
  }
  ContextChange(){
    this.setState({
      name: this.state.name = "我是改变后的sky"
    })
  }
  ChildCpnChange(){
    this.setState({
      isShow: !this.state.isShow
    })
  }
  componentDidMount() {
    console.log('我是componentDidMount方法');
  }
  componentDidUpdate(){
    console.log('我是componentDidUpdate方法');
  }
}

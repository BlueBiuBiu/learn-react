import React, { PureComponent } from 'react'
import { EventEmitter } from 'events'

const eventBus = new EventEmitter();

class Child1 extends PureComponent {
  componentDidMount(){
    eventBus.addListener("sayHello",this.handleSayHello)
  }
  componentWillUnmount(){
    eventBus.removeListener("sayHello",this.handleSayHello)
  }
  handleSayHello(args1,args2){
    console.log("信息:",args1,args2);
  }
  render(){
    return(
      <div>
        <h2>我是Child1</h2>
      </div>
    )
  }
}

class Child2 extends PureComponent {
  render(){
    return(
      <div>
        我是Child2
        <button onClick={ e => this.eventEmit()}>发送</button>
      </div>
    )
  }
  eventEmit(){
    eventBus.emit("sayHello","Hello Child1","我是Child2")
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Child1 />
        <Child2 />
      </div>
    )
  }
}

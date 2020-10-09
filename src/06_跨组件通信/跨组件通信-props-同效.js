import React, { Component } from 'react'

class Child2 extends Component {
  render(){
    const { name, age } = this.props;
    return(
      <div>
        <h2>名字: { name }</h2>
        <h2>年龄: { age }</h2>
      </div>
    )
  }
}

class Child1 extends Component {
  constructor(props){
    super();
  }
  render(){
    // const { name, age } = this.props;
    return(
      <div>
        <Child2 {...this.props}/>
        <ul>
          <li>sky1</li>
          <li>sky2</li>
          <li>sky3</li>
          <li>sky4</li>
          <li>sky5</li>
        </ul>
      </div>
    )
  }
}
export default class App extends Component {
  constructor(props){
    super();
    this.state={
      name: "sky",
      age: 22
    }
  }

  render() {
    // const { name, age } = this.state;
    return (
      <div>
        <Child1 {...this.state}/>
      </div>
    )
  }
}

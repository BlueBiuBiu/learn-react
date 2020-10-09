import React, { Component } from 'react'
const UserInfo = React.createContext({
  name: "sky",
  age: 16
})

class Child2 extends Component {
  render() {
    console.log(this.context);
    const { name, age } = this.context;
    return (
      <div>
        <h2>名字: { name }</h2>
        <h2>年龄: { age }</h2>
      </div>
    )
  }
}
Child2.contextType = UserInfo
class Child1 extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div>
        <Child2 />
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
  constructor(props) {
    super();
    this.state = {
      name: "sky",
      age: 22
    }
  }

  render() {
    return (
      <div>
        <UserInfo.Provider value={this.state}>
          <Child1 />
        </UserInfo.Provider>
      </div>
    )
  }
}

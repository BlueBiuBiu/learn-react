import React, { PureComponent, createContext } from 'react'

const UserInfo = createContext({
  name: "sky",
  age: 16,
  region: "中国"
})

class Home extends PureComponent {
  render() {
    console.log(this.context);
    return (
      <div>
        <h2>Home</h2>
        {`名字: ${this.context.name} 年龄: ${this.context.age} 地区: ${this.context.region}`}
      </div>
    )
  }
}
Home.contextType = UserInfo
class About extends PureComponent {
  render() {
    return (
      <div>
        <h2>About</h2>
        {`名字: ${this.context.name} 年龄: ${this.context.age} 地区: ${this.context.region}`}
      </div>
    )
  }
}
About.contextType = UserInfo
export default class App extends PureComponent {
  constructor(props) {
    super();
    this.state = {
      name: "sky",
      age: "22"
    }
  }
  render() {
    return (
      <div>
        <UserInfo.Provider value={this.state}>
          <Home />
          <About />
        </UserInfo.Provider>
      </div>
    )
  }
}

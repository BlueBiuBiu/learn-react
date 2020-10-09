import React, { PureComponent, createContext } from 'react'

const UserInfo = createContext({
  name: "sky",
  age: 16,
  region: "中国"
})


function withUser(WrappedComponent){
  return props => {
    return (
      <UserInfo.Consumer>
        {
          user => {
            return <WrappedComponent {...user}/>
          }
        }
      </UserInfo.Consumer>
    )
  }
}

class Home extends PureComponent {
  render() {
    console.log(this.props);
    return (
      <div>
        <h2>Home</h2>
        {`名字: ${this.props.name} 年龄: ${this.props.age} 地区: ${this.props.region}`}
      </div>
    )
  }
}
class About extends PureComponent {
  render() {
    return (
      <div>
        <h2>About</h2>
        {`名字: ${this.props.name} 年龄: ${this.props.age} 地区: ${this.props.region}`}
      </div>
    )
  }
}
const UserHome = withUser(Home)
const UserAbout = withUser(About)
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
          <UserHome />
          <UserAbout />
        </UserInfo.Provider>
      </div>
    )
  }
}

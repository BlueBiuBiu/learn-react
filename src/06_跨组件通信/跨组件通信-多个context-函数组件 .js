import React, { Component } from 'react'
const UserInfo = React.createContext({
  name: "sky",
  age: 16
})
const LikeInfo = React.createContext({
  like: "football"
})
function Child2() {
  return (
    <UserInfo.Consumer>
      {
        value => {
          return (
            <LikeInfo.Consumer>
              {
                value2 => {
                  return (
                    <div>
                      <h2>名字: {value.name}</h2>
                      <h2>年龄: {value.age}</h2>
                      <h2>喜欢: {value2.like}</h2>
                    </div>
                  )
                }
              }
            </LikeInfo.Consumer>
          )
        }
      }
    </UserInfo.Consumer>
  )
}
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
          <LikeInfo.Provider value={{ like: "playGames" }}>
            <Child1 />
          </LikeInfo.Provider>
        </UserInfo.Provider>
      </div>
    )
  }
}

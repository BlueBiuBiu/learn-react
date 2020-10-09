import React, { Component } from 'react'

function ChildCpn(props) {
  const { name, age, list } = props;
  return (
    <div>
      <h2>我是ChildCpn组件</h2>
      {name + ' ' + age}
      <ul>
        {
          list.map(item => {
            return <li>{ item }</li>
          })
        }
      </ul>

    </div>
  )
}

export default class App extends Component {
  render() {
    return (
      <div>
        <ChildCpn name="sky" age={22} list={['abc', 'cba']} />
      </div>
    )
  }
}

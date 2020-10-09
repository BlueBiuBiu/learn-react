import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ChildCpn extends Component {
  render(){
    const { name, age } = this.props;
    return(
      <div>
        <h2>我是ChildCpn组件</h2>
        {name + " " + age}
      </div>
    )
  }
}

ChildCpn.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number
}
ChildCpn.defaultProps = {
  name: "xixi",
  age: 16
}

export default class App extends Component {
  render() {
    return (
      <div>
        <ChildCpn name="sky" age={ 22 }/>
        <ChildCpn name="sky" age="22"/>
        <ChildCpn age={ 22 }/>
        <ChildCpn />
      </div>
    )
  }
}

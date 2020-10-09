import React, { Component } from 'react'
import NavBar from './NavBar'
import NavBar2 from './NavBar2(推荐)'

export default class App extends Component {
  constructor(props){
    super();
    this.state={
      
    }
  }
  render() {
    return (
      <div>
        <NavBar>
          <div>1111</div>
          <span>2222</span>
          <a href="/#">3333</a>
        </NavBar>
        <NavBar2 leftSlot={ <div>1111</div> }
          centerSlot={ <span>2222</span> }
          rightSlot={ <a href="/#">3333</a> }
        />
      </div>
    )
  }
}

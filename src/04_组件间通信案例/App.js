import React, { Component } from 'react'
import TabBar from './TabBar'

export default class App extends Component {
  constructor(props) {
    super();
    this.state = {
      titles: ["新款", "流行", "精选"],
      currentTitle: "新款"
    }
  }

  render() {
    const { titles, currentTitle } = this.state;
    return (
      <div>
        <TabBar titles={titles} itemClick={ index => this.itemClick(index)}/>
        <h2>{ currentTitle }</h2>
      </div>
    )
  }
  itemClick(index){
    console.log(index);
    this.setState({
      currentTitle: this.state.titles[index]
    })
  }
}

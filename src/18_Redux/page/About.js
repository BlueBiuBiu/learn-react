import React, { PureComponent } from 'react'
import store from '../store/index'
import { increment } from '../store/actionCreators'

export default class About extends PureComponent {
  constructor(props){
    super(props);
    this.state={
      counter: store.getState().counter
    }
  }
  componentDidMount(){
    this.unsubscribe = store.subscribe(() => {
      this.setState({
        counter: store.getState().counter
      })
    })
  }
  componentWillUnmount(){
    this.unsubscribe();
  }
  render() {
    return (
      <div>
        <hr/>
        <h2>About</h2>
        <p>当前计数: {this.state.counter}</p>
        <button onClick={ e => this.addNum(1)}>+1</button>
        <button onClick={ e => this.addNum(5)}>+5</button>
      </div>
    )
  }
  addNum(num){
    store.dispatch(increment(num))
  }
}


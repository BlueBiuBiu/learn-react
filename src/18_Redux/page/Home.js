import React, { PureComponent } from 'react'
import store from '../store/index'
import { decrement } from '../store/actionCreators'

export default class Home extends PureComponent {
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
        <h2>About</h2>
        <p>当前计数: {this.state.counter}</p>
        <button onClick={ e => this.subNum(1)}>-1</button>
        <button onClick={ e => this.subNum(5)}>-5</button>
      </div>
    )
  }
  subNum(num){
    store.dispatch(decrement(num))
  }
}

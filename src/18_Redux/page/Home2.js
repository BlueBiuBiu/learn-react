import React, { PureComponent } from 'react'
import { connect } from '../utils/connect'
import { decrement } from '../store/actionCreators'

class Home extends PureComponent {
  render() {
    return (
      <div>
        <h2>Home2</h2>
        <p>当前计数: {this.props.counter}</p>
        <button onClick={ e => this.props.decrement(1)}>-1</button>
        <button onClick={ e => this.props.decrement(5)}>-5</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  }
}
const mapDispatchToProps = dispatch => {
  return {
    decrement(num){
      dispatch(decrement(num));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

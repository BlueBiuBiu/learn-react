import React, { PureComponent } from 'react'
import axios from 'axios'
import { connect} from 'react-redux'
import { increment, change_banner } from '../store/actionCreators'

class HomeRedux extends PureComponent {
  componentDidMount() {
    axios({
      url: "http://123.207.32.32:8000//home/multidata"
    }).then(res => {
      console.log(res.data.data);
      const data = res.data.data
      this.props.change_banner(data.banner.list)
    })
  }
  render() {
    return (
      <div>
        <h2>HomeRedux</h2>
        <p>当前计数: {this.props.counter}</p>
        <button onClick={e => this.props.increment(1)}>+1</button>
        <button onClick={e => this.props.increment(5)}>+5</button>
        <h2>banner</h2>
        <ul>
          {
            this.props.banner.map((item, index) => {
              return <li key={item.acm}>{item.title}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter,
    banner: state.banner
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increment(num) {
      dispatch(increment(num));
    },
    change_banner(banner) {
      dispatch(change_banner(banner))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeRedux)
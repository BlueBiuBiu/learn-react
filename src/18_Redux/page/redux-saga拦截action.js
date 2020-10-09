import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { increment, fetch_banner} from '../store/actionCreators'

class HomeRedux extends PureComponent {
  componentDidMount() {
    this.props.getBanner();
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
    banner: state.bannerInfo.banner
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increment(num) {
      dispatch(increment(num));
    },
    getBanner(){
      dispatch(fetch_banner);
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeRedux)
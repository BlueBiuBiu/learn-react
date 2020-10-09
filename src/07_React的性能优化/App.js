import React, { PureComponent, memo } from 'react'

const MemoHeader= memo(
  function Header() {
    console.log("我是Header");
     return(
       <div>
          <h2>我是Header</h2>
       </div>
      )
    }
)
function MainContent() {
  return (
    <div>
      <ul>
        <li>商品1</li>
        <li>商品2</li>
        <li>商品3</li>
        <li>商品4</li>
        <li>商品5</li>
      </ul>
    </div>
  )
}
class Main extends PureComponent {
  render() {
    console.log("我是Main的render()");
    return (
      <div>
        <h2>我是Main</h2>
        <MainContent />
      </div>
    )
  }
}
class Footer extends PureComponent {
  render() {
    console.log("我是Footer的render()");
    return (
      <div>
        <h2>我是Footer</h2>
      </div>
    )
  }
}
export default class App extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      counter: 0
    }
  }
  render() {
    console.log("我是App的render()");
    const { counter } = this.state;
    return (
      <div>
        <h2>{ counter }</h2>
        <button onClick={ e => this.Increment()}>+1</button>
        <MemoHeader />
        <Main />
        <Footer />
      </div>
    )
  }
  Increment(){
    this.setState({
      counter: this.state.counter + 1
    })
  }
}


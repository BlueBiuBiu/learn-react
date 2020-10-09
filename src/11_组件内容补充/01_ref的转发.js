import React, { PureComponent, createRef, forwardRef } from 'react'

class Home extends PureComponent{
  render(){
    return(
      <div>
        <h2>Home</h2>
      </div>
    )
  }
}
const Home2 = forwardRef(
  function Home2(props,ref){
    return(
      <div>
        <h2 ref={ ref }>Home2</h2>
      </div>
    )
  }
)
export default class App extends PureComponent {
  constructor(){
    super();
    this.homeRef = createRef();
    this.home2Ref = createRef();
  }
  render() {
    return (
      <div>
        <Home ref={ this.homeRef }/>
        <Home2 ref={ this.home2Ref }/>
        <button onClick={ e => this.printRef()}>打印ref</button>
      </div>
    )
  }
  printRef(){
    console.log(this.homeRef.current);
    console.log(this.home2Ref.current);
  }
}

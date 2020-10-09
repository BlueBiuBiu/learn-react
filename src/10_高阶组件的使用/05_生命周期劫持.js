import React, { PureComponent } from 'react'

function withRenderTime(WrappedComponents){
  return class extends PureComponent{
    UNSAFE_componentWillMount(){
      this.beginTime = Date.now();
    }
    componentDidMount(){
      this.endTime = Date.now();
      this.interval = this.endTime - this.beginTime
      console.log(`${WrappedComponents.name}渲染时间: ${this.interval}`);
    }
    render(){
      return <WrappedComponents />
    }
  }
}
class Home extends PureComponent{
  render(){
    return (
      <div>
        <h2>Home</h2>
      </div>
    )
  }
}
class About extends PureComponent{
  render(){
    return (
      <div>
        <h2>About</h2>
      </div>
    )
  }
}
const HomeTime = withRenderTime(Home)
const AboutTime = withRenderTime(About)

export default class App extends PureComponent {
  constructor(props){
    super();
    this.state={

    }
  }
  render() {
    return (
      <div>
        <HomeTime />
        <AboutTime />
      </div>
    )
  }
}

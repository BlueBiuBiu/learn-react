import React, { PureComponent } from 'react'

function enhanceRegionProps(WrappedComponent){
  return props => {
    return <WrappedComponent {...props} region="中国"/>
  }
}
class Home extends PureComponent{
  render(){
    return (
      <div>
        <h2>Home</h2>
        {`名字: ${this.props.name} 年龄: ${this.props.age} 地区: ${this.props.region}`}
      </div>
    )
  }
}
class About extends PureComponent{
  render(){
    return (
      <div>
        <h2>About</h2>
        {`名字: ${this.props.name} 年龄: ${this.props.age} 地区: ${this.props.region}`}
      </div>
    )
  }
}

const EnhanceHome = enhanceRegionProps(Home)
const EnhanceAbout = enhanceRegionProps(About)

export default class App extends PureComponent {
  constructor(props){
    super();
    this.state={
      name: "sky",
      age: "22"
    }
  }
  render() {
    return (
      <div>
        <EnhanceHome {...this.state}/>
        <EnhanceAbout {...this.state}/>
      </div>
    )
  }
}

import React, { PureComponent } from 'react'
import { ThemeProvider } from "styled-components"
import Home from './Home'
import{
  IndexWrapper,
  IndexInput
} from './style.js'


export default class index extends PureComponent {
  constructor(props){
    super(props);
    this.state={
      color: "blue"
    }
  }
  render() {
    return (
      <IndexWrapper>
        <IndexInput color={this.state.color}/>
        <div className="app">我是app</div>
        <div className="banners">
          <p>我是轮播图</p>
          <ul className="banners-list">
            <li>列表1</li>
            <li className="active">列表2</li>
            <li>列表3</li>
            <li>列表4</li>
            <li>列表5</li>
          </ul>
          <ThemeProvider theme={{themeColor: "pink",fontSize: "16px"}}>
            <Home />
          </ThemeProvider>
        </div>
      </IndexWrapper>
    )
  }
}

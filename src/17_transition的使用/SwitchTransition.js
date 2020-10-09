import React, { PureComponent } from 'react'
import './SwitchTransition.css'
import { SwitchTransition, CSSTransition } from "react-transition-group"

export default class SwitchTransitionDemo extends PureComponent {
  constructor(props){
    super(props);
    this.state={
      isShow: false
    }
  }
  render() {
    const {isShow} = this.state;
    return (
      <div style={{textAlign: "center",padding: "20px"}}>
        <SwitchTransition mode="out-in">
          <CSSTransition key={isShow? "on": "off"}
                        classNames="btn"
                        timeout={300}>
            <button onClick={ e => {this.setState({isShow: !isShow})}}>{ isShow? "on": "off"}</button>
          </CSSTransition>
        </SwitchTransition>
      </div>
    )
  }
}

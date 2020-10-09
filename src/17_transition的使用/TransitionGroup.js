import React, { PureComponent } from 'react'
import './TransitionGroup.css'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

export default class TransitionGroupDemo extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: ["sky", "coder", "blue"]
    }
  }
  render() {
    const { name } = this.state;
    return (
      <TransitionGroup>
        {
          name.map((item, index) => {
            return(
              <CSSTransition key={index}
                            classNames="item"
                            timeout={300}>
                <div>{ item }</div>
              </CSSTransition>
            )
          })
        }
        <button onClick={ e => this.addName()}>添加名字</button>
      </TransitionGroup>
    )
  }
  addName(){
    this.setState({
      name: [...this.state.name, "sky"]
    })
  }
}

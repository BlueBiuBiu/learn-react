import React, { PureComponent,createRef } from 'react'

export default class App extends PureComponent {
  constructor(props){
    super();
    this.usernameRef = createRef();
  }
  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor="username">
            用户: <input type="text" id="username" ref={ this.usernameRef }/>
          </label>
          <button type="submit">提交</button>
        </form>
      </div>
    )
  }
  handleSubmit(event){
    event.preventDefault();
    console.log(this.usernameRef.current.value);
  }
}

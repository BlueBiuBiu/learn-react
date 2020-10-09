import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  constructor(props){
    super();
    this.state={
      username: ""
    }
  }
  render() {
    const { username } = this.state;
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor="username">
            用户: <input type="text" id="username" 
                  onChange={ e => this.inputChange(e)}
                  value={ username }/>
          </label>
          <button type="submit">提交</button>
        </form>
      </div>
    )
  }
  handleSubmit(event){
    event.preventDefault();
    console.log(event);
  }
  inputChange(event){
    //console.log(event.target.value);
    this.setState({
      username: event.target.value
    })
  }
}

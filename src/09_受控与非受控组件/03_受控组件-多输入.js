import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  constructor(props) {
    super();
    this.state = {
      username: "",
      password: "",
      valid: ""
    }
  }
  render() {
    const { username, password, valid } = this.state;
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <div>
            <label htmlFor="username">
              用户: <input type="text" id="username" name="username"
                onChange={e => this.inputChange(e)}
                value={username} />
            </label>
          </div>
          <div>
            <label htmlFor="password">
              用户: <input type="text" id="password" name="password"
                onChange={e => this.inputChange(e)}
                value={password} />
            </label>
          </div>
          <div>
            <label htmlFor="valid">
              用户: <input type="text" id="valid" name="valid"
                onChange={e => this.inputChange(e)}
                value={valid} />
            </label>
          </div>
          <button type="submit">提交</button>
        </form>
      </div>
    )
  }
  handleSubmit(event) {
    event.preventDefault();
    //console.log(event);
  }
  inputChange(event) {
    console.log(event.target.name);
    this.setState({
      [event.target.name]: event.target.value
    })
  }
}

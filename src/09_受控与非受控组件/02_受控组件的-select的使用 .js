import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  constructor(props){
    super();
    this.state={
      fruits: "banana"
    }
  }
  render() {
    const { fruits } = this.state;
    return (
      <div>
        <form onSubmit={ e => this.handleSubmit(e)}>
          <select name="fruit"  onChange={ e => this.handleChange(e)} value={ fruits}>
            <option value="apple">苹果</option>
            <option value="banana">香蕉</option>
            <option value="orange">橙子</option>
          </select>
          <button type="submit">提交</button>
        </form>
      </div>
    )
  }
  handleSubmit(event){
    event.preventDefault();
  }
  handleChange(event){
    //console.log(event.target.value);
    this.setState({
      fruits: event.target.value
    })
  }
}

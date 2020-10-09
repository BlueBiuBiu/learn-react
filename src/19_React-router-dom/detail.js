import React, { PureComponent } from 'react'

export default class detail extends PureComponent {
  render() {
    console.log(this.props.location);
    return (
      <div>
        <h2>Detail:
          <div>{this.props.location.state.name}</div>
          <div>{this.props.location.state.age}</div>
        </h2>
      </div>
    )
  }
}

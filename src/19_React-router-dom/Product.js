import React, { PureComponent } from 'react'

export default class Product extends PureComponent {
  render() {
    console.log(this.props.match);
    return (
      <div>
        <h2>Product</h2>
        <h2>ID: { this.props.match.params.id}</h2>
        <ul>
          <li>商品1</li>
          <li>商品2</li>
          <li>商品3</li>
          <li>商品4</li>
          <li>商品5</li>
        </ul>
      </div>
    )
  }
}

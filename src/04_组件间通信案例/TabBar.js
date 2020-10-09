import React, { Component } from 'react'

export default class TabBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentIndex: 0
    }
  }

  render() {
    const { currentIndex } = this.state;
    const { titles } = this.props;
    return (
      <div className="tab-control">
        {
          titles.map((item, index) => {
            return (
              <div className={"tab-item " + (index === currentIndex ? "active": "")}
                onClick={ e => this.itemClick(index) }>
                <span>{ item }</span>
              </div>
            )
          })
        }
      </div>
    )
  }

  itemClick(index){
    //console.log(index);
    this.setState({
      currentIndex: index
    })
    const { itemClick } = this.props;
    itemClick(index);
  }
}

import React, { PureComponent } from 'react'
import indexStyle from './style.module.css'

export default class index extends PureComponent {
  render() {
    return (
      <div>
        <div className={ indexStyle.title }>我是CSS_MODULES</div>
      </div>
    )
  }
}

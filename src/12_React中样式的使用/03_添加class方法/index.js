import React, { PureComponent } from 'react'
import classNames from 'classnames'

export default class index extends PureComponent {
  constructor(){
    super();
    this.state={
      isActive: true
    }
  }
  render() {
    const { isActive } = this.state;
    return (
      <div>
        {/*元素React添加class方法 */}
        <h2 className="foo bar active">标题1</h2>
        <h2 className={"title " + (isActive? "active": "")}>标题2</h2>
        <h2 className={["title", (isActive? "active": "")].join(" ")}>标题3</h2>

        {/*classnames库添加class */}
        <h2 className={ classNames("foo", "bar", "active")}>标题4</h2>
        <h2 className={ classNames({"active": isActive},"bar")}>标题5</h2>
        <h2 className={classNames(["foo","bar"])}>标题6</h2>
        <h2 className={classNames(["foo","bar",{"active": isActive}])}>标题7</h2>
      </div>
    )
  }
}

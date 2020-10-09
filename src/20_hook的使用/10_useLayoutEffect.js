import React, { useState, useLayoutEffect } from 'react'

export default function UseLayoutEffect() {
  const [count, setcount] = useState(10);

  //改变之前渲染之前执行，阻塞DOM更新
  useLayoutEffect(() => {
    if(count === 0) {
      setcount(Math.random())
    }
  },[count])

  //渲染的内容更新到DOM上后执行
  /* useLayoutEffect(() => {
    if(count === 0) {
      setcount(Math.random())
    }
  },[count]) */

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={e => setcount(0)}>修改数字</button>
    </div>
  )
}
